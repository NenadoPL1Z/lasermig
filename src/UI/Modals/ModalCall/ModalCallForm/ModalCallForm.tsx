import React from "react";
import { useController, useForm } from "react-hook-form";
import TextFieldUI from "@/UI/TextFieldUI";
import styled from "styled-components";
import { Button } from "@mui/material";

const ModalCallForm = () => {
  const { control, handleSubmit } = useForm<{
    name: string;
    phone: string;
  }>({
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
