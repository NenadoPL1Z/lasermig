import React from "react";
import TextFieldUI from "@/UI/TextFieldUI";
import { CircularProgress } from "@mui/material";
import { ErrorTitleSC } from "@/UI/ErrorTitleSC";
import { ModalFormProps } from "@/UI/Modals/types";
import { telephoneMask } from "@/lib/services";
import { useModalQuestionForm } from "@/UI/Modals/variant/ModalQuestion/ModalQuestionForm/useModalQuestionForm";
import { styles } from "@/UI/Modals/variant/ModalQuestion/ModalQuestionForm/index.styles";

const ModalQuestionForm = (props: ModalFormProps) => {
  const {
    isLoading,
    isEmpty,
    hasError,

    nameController,
    phoneController,
    questionController,

    onSubmit,
  } = useModalQuestionForm(props);

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
      <FormItemSC>
        <TextFieldUI
          placeholder="ВАШ ВОПРОС"
          fullWidth={true}
          value={questionController.field.value}
          onChange={questionController.field.onChange}
          error={!!questionController.fieldState.error}
          helperText={questionController.fieldState.error?.message}
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

export const { FormSC, FormItemSC, ButtonSC } = styles;

export default React.memo(ModalQuestionForm);
