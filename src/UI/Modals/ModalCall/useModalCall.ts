import { useController, useForm } from "react-hook-form";
import { axiosProject } from "@/lib/http";
import { ApiNamespace } from "@/lib/constants/ApiNamespace";
import { useStatus } from "@/hooks/useStatus";
import { ErrorNamespace } from "@/lib/constants/ErrorNamespace";
import { useEffect } from "react";
import { ModaFormProps } from "@/UI/Modals/types";

export const useModalCall = ({ handleSuccess }: ModaFormProps) => {
  const { isLoading, hasError, handleChangeStatus } = useStatus({
    isLoading: false,
  });

  const { control, handleSubmit, formState } = useForm<{
    name: string;
    phone: string;
  }>({
    defaultValues: { name: "", phone: "" },
  });

  const isEmpty =
    formState.errors.name?.type === "required" ||
    formState.errors.phone?.type === "required";

  const nameController = useController({
    control,
    name: "name",
    rules: {
      required: true,
      maxLength: {
        value: 20,
        message: "Максимальная длинна имени до 20-ти символов",
      },
    },
  });

  const phoneController = useController({
    control,
    name: "phone",
    rules: {
      required: true,
      maxLength: {
        value: 20,
        message: "Максимальная длинна телефона до 20-ти символов",
      },
    },
  });

  const onSubmit = handleSubmit((data) => {
    handleChangeStatus({ isLoading: true, hasError: "" });
    axiosProject
      .post(ApiNamespace.call, data)
      .then(() => {
        handleChangeStatus({ isLoading: false, hasError: "" });
        handleSuccess();
      })
      .catch(() => {
        handleChangeStatus({
          isLoading: false,
          hasError: ErrorNamespace.default,
        });
      });
  });

  useEffect(() => {
    if (hasError) {
      handleChangeStatus({ hasError: "" });
    }
  }, [nameController.field.value, phoneController.field.value]);

  return {
    isEmpty,
    isLoading,
    hasError,
    nameController,
    phoneController,
    onSubmit,
  };
};
