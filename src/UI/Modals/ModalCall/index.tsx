import React from "react";
import { Button, DialogProps } from "@mui/material";
import ModalContent from "@/UI/Modals/ModalContent";
import styled from "styled-components";
import { useModalCall } from "@/UI/Modals/ModalCall/useModalCall";
import TextFieldUI from "@/UI/TextFieldUI";

const ModalCall = (props: Omit<DialogProps, "children">) => {
  const { nameController, phoneController, onSubmit } = useModalCall();
  return (
    <ModalContent dialogProps={props} title="Заказать звонок">
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
    </ModalContent>
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

export default React.memo(ModalCall);
