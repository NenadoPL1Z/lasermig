import React from "react";
import TextFieldUI from "@/UI/TextFieldUI";
import { styled } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { ErrorTitleSC } from "@/UI/ErrorTitleSC";
import { DefaultButton } from "@/UI/Buttons/DefaultButton";
import { ModalFormProps } from "@/UI/Modals/types";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import { telephoneMask } from "@/lib/services";
import { useModalCallForm } from "@/UI/Modals/variant/ModalCall/ModalCallForm/useModalCallForm";

const ModalCallForm = (props: ModalFormProps) => {
  const {
    isLoading,
    isEmpty,
    hasError,

    nameController,
    phoneController,

    onSubmit,
  } = useModalCallForm(props);

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
          onChange={(e) =>
            phoneController.field.onChange(telephoneMask(e.target.value))
          }
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

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 16px;
  }
`;

const ButtonSC = styled(DefaultButton)`
  max-width: 179px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: none;
  }
`;

export default React.memo(ModalCallForm);
