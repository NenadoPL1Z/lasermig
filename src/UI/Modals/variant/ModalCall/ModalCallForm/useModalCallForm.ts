import { useController, useForm } from "react-hook-form";
import { axiosProject } from "@/lib/http";
import { ApiNamespace } from "@/lib/constants/enums/ApiNamespace";
import { useStatus } from "@/hooks/useStatus";
import { ErrorNamespace } from "@/lib/constants/enums/ErrorNamespace";
import { useEffect } from "react";
import { ModalFormProps } from "@/UI/Modals/types";

export const useModalCallForm = ({ handleSuccess }: ModalFormProps) => {
  const { isLoading, hasError, handleChangeStatus } = useStatus({
    isLoading: false,
  });

  const { control, handleSubmit, formState } = useForm<{
    name: string;
    number: string;
  }>({
    defaultValues: { name: "", number: "" },
  });

  const isEmpty =
    formState.errors.name?.type === "required" ||
    formState.errors.number?.type === "required";

  const nameController = useController({
    control,
    name: "name",
    rules: {
      required: true,
      maxLength: {
        value: 20,
        message: "Макс. длинна 20-ти символов",
      },
    },
  });

  const phoneController = useController({
    control,
    name: "number",
    rules: {
      required: true,
      maxLength: {
        value: 20,
        message: "Макс. длинна 20-ти символов",
      },
    },
  });

  const onSubmit = handleSubmit((data) => {
    handleChangeStatus({ isLoading: true, hasError: "" });
    axiosProject
      .post(ApiNamespace.FEEDBACK_CALL, data)
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
