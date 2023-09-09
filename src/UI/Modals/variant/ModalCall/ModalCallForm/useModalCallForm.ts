import { useController, useForm } from "react-hook-form";
import { useStatus } from "@/hooks/useStatus";
import { useEffect } from "react";
import { ModalFormProps } from "@/UI/Modals/types";
import { FormCall } from "@/lib/models/Forms/FormCall";
import { fetchPostCall } from "@/lib/api/feedback/fetchPostCall";
import { ErrorNamespace } from "@/lib/constants/namespaces/ErrorNamespace";
import { isAxiosError } from "axios";

export const useModalCallForm = ({ handleSuccess }: ModalFormProps) => {
  const { isLoading, hasError, handleChangeStatus } = useStatus({
    isLoading: false,
  });

  const { control, handleSubmit, formState } = useForm<FormCall>({
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

    fetchPostCall(data)
      .then(() => {
        handleChangeStatus({ isLoading: false, hasError: "" });
        handleSuccess();
      })
      .catch((error) => {
        let hasError: string = ErrorNamespace.FORM;

        if (isAxiosError<FormCall>(error)) {
          const data = error.response?.data || { name: "", number: "" };

          if ("name" in data) {
            hasError = data.name[0];
          }

          if ("number" in data) {
            hasError = data.number[0];
          }
        }

        handleChangeStatus({
          isLoading: false,
          hasError,
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
