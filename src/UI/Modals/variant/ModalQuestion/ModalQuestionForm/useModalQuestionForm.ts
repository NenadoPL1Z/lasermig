import { useStatus } from "@/hooks/useStatus";
import { useController, useForm } from "react-hook-form";
import { axiosProject } from "@/lib/http";
import { ApiNamespace } from "@/lib/constants/enums/ApiNamespace";
import { ErrorNamespace } from "@/lib/constants/enums/ErrorNamespace";
import { useEffect } from "react";
import { ModalFormProps } from "@/UI/Modals/types";

export const useModalQuestionForm = ({ handleSuccess }: ModalFormProps) => {
  const { isLoading, hasError, handleChangeStatus } = useStatus({
    isLoading: false,
  });

  const { control, handleSubmit, formState } = useForm<{
    name: string;
    number: string;
    text: string;
  }>({
    defaultValues: { name: "", number: "", text: "" },
  });

  const isEmpty =
    formState.errors.name?.type === "required" ||
    formState.errors.number?.type === "required" ||
    formState.errors.text?.type === "required";

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

  const questionController = useController({
    control,
    name: "text",
    rules: {
      required: true,
      maxLength: {
        value: 1000,
        message: "Макс. длинна 1000-ти символов",
      },
    },
  });

  const onSubmit = handleSubmit((data) => {
    handleChangeStatus({ isLoading: true, hasError: "" });

    axiosProject
      .post(ApiNamespace.FEEDBACK_QUESTION, data)
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
    questionController,
    onSubmit,
  };
};
