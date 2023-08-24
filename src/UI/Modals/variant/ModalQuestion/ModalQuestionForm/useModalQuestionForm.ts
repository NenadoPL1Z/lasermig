import { useStatus } from "@/hooks/useStatus";
import { useController, useForm } from "react-hook-form";
import { axiosProject } from "@/lib/http";
import { ApiNamespace } from "@/lib/constants/ApiNamespace";
import { ErrorNamespace } from "@/lib/constants/ErrorNamespace";
import { useEffect } from "react";
import { ModalFormProps } from "@/UI/Modals/types";

export const useModalQuestionForm = ({ handleSuccess }: ModalFormProps) => {
  const { isLoading, hasError, handleChangeStatus } = useStatus({
    isLoading: false,
  });

  const { control, handleSubmit, formState } = useForm<{
    name: string;
    phone: string;
    question: string;
    email: string;
  }>({
    defaultValues: { name: "", phone: "", question: "", email: "" },
  });

  const isEmpty =
    formState.errors.name?.type === "required" ||
    formState.errors.phone?.type === "required" ||
    formState.errors.question?.type === "required";

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
    name: "phone",
    rules: {
      required: true,
      maxLength: {
        value: 20,
        message: "Макс. длинна 20-ти символов",
      },
    },
  });

  const emailController = useController({
    control,
    name: "email",
    rules: {
      required: true,
      maxLength: {
        value: 50,
        message: "Макс. длинна 50-ти символов",
      },
    },
  });

  const questionController = useController({
    control,
    name: "question",
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
    emailController,
    questionController,
    onSubmit,
  };
};
