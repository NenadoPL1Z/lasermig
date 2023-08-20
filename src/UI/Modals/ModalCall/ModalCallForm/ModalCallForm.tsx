import React from "react";
import { useController, useForm } from "react-hook-form";
import TextFieldUI from "@/UI/TextFieldUI";
import styled from "styled-components";
import { Button } from "@mui/material";
import { ErrorTitleSC } from "@/UI/ErrorTitleSC";

const ModalCallForm = () => {
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

  const onSubmit = handleSubmit(() => {
    // console.log(data);
  });

  return (
    <FormSC onSubmit={onSubmit}>
      <FormItemSC>
        <TextFieldUI
          name="name"
          placeholder="ИМЯ"
          inputProps={{ inputMode: "text" }}
          fullWidth={true}
          value={nameController.field.value}
          onChange={nameController.field.onChange}
          error={!!nameController.fieldState.error}
          helperText={nameController.fieldState.error?.message}
        />
      </FormItemSC>
      <FormItemSC>
        <TextFieldUI
          name="phone"
          placeholder="ТЕЛЕФОН"
          inputProps={{ inputMode: "tel" }}
          fullWidth={true}
          value={phoneController.field.value}
          onChange={phoneController.field.onChange}
          error={!!phoneController.fieldState.error}
          helperText={phoneController.fieldState.error?.message}
        />
      </FormItemSC>
      {isEmpty && <ErrorTitleSC>Заполните все обязательные поля</ErrorTitleSC>}
      <ButtonSC type="submit">Отправить</ButtonSC>
    </FormSC>
  );
};

const FormSC = styled("form")`
  display: flex;
  flex-direction: column;
`;

const FormItemSC = styled("div")`
  margin-bottom: 32px;
`;

const ButtonSC = styled(Button)`
  max-width: 179px;
`;

export default React.memo(ModalCallForm);
