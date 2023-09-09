import { useStatus } from "@/hooks/useStatus";
import { useController, useForm } from "react-hook-form";
import { useEffect } from "react";
import { ModalFormProps } from "@/UI/Modals/types";
import { FormQuestion } from "@/lib/models/Forms/FormQuestion";
import { ErrorNamespace } from "@/lib/constants/namespaces/ErrorNamespace";
import { fetchPostQuestion } from "@/lib/api/feedback/fetchPostQuestion";
import { isAxiosError } from "axios";

export const useModalQuestionForm = ({ handleSuccess }: ModalFormProps) => {
  const { isLoading, hasError, handleChangeStatus } = useStatus({
    isLoading: false,
  });

  const { control, handleSubmit, formState } = useForm<FormQuestion>({
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

    fetchPostQuestion(data)
      .then(() => {
        handleChangeStatus({ isLoading: false, hasError: "" });
        handleSuccess();
      })
      .catch((error) => {
        let hasError: string = ErrorNamespace.FORM;

        if (isAxiosError<FormQuestion>(error)) {
          const data = error.response?.data || {
            name: "",
            number: "",
            text: "",
          };

          if ("name" in data) {
            hasError = data.name[0];
          }

          if ("number" in data) {
            hasError = data.number[0];
          }

          if ("text" in data) {
            hasError = data.text[0];
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
    questionController,
    onSubmit,
  };
};
