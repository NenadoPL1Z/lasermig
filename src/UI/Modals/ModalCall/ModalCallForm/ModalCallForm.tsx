import React from "react";
import TextFieldUI from "@/UI/TextFieldUI";
import { styled } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { ErrorTitleSC } from "@/UI/ErrorTitleSC";
import { useModalCall } from "@/UI/Modals/ModalCall/useModalCall";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import { ModaFormProps } from "@/UI/Modals/types";

const ModalCallForm = (props: ModaFormProps) => {
  const {
    isLoading,
    isEmpty,
    hasError,

    nameController,
    phoneController,

    onSubmit,
  } = useModalCall(props);

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
      {(isEmpty || !!hasError) && (
        <ErrorTitleSC>
          {hasError || "Заполните все обязательные поля"}
        </ErrorTitleSC>
      )}
      <ButtonSC type="submit" disabled={isLoading}>
        {isLoading ? <CircularProgress size={30} /> : "Отправить"}
      </ButtonSC>
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

const ButtonSC = styled(DefaultButton)`
  max-width: 179px;
`;

export default React.memo(ModalCallForm);
