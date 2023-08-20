import { useController, useForm } from "react-hook-form";

export const useModalCall = () => {
  const { control, handleSubmit } = useForm<{ name: string; phone: string }>({
    defaultValues: { name: "", phone: "" },
  });

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

  const onSubmit = handleSubmit(() => {
    //
  });

  return {
    onSubmit,
    nameController,
    phoneController,
  };
};
