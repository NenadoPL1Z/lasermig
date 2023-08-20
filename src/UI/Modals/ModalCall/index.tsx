import React from "react";
import { Button, DialogProps, TextField } from "@mui/material";
import ModalContent from "@/UI/Modals/ModalContent";
import { useController, useForm } from "react-hook-form";
import styled from "styled-components";

const ModalCall = (props: Omit<DialogProps, "children">) => {
  const { control } = useForm<{ name: string; phone: string }>({
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

  return (
    <ModalContent dialogProps={props} title="Заказать звонок">
      <FormSC>
        <FormItemSC>
          <TextField
            label="ИМЯ"
            fullWidth={true}
            value={nameController.field.value}
            onChange={nameController.field.onChange}
          />
        </FormItemSC>
        <FormItemSC>
          <TextField
            label="ТЕЛЕФОН"
            fullWidth={true}
            value={phoneController.field.value}
            onChange={phoneController.field.onChange}
          />
        </FormItemSC>
        <ButtonSC>Отправить</ButtonSC>
      </FormSC>
    </ModalContent>
  );
};

const FormSC = styled("div")`
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
