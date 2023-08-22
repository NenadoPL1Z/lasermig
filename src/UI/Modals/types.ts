import { ChildrenProps } from "@/types/types";

export interface AllModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export interface ModalContentProps
  extends Pick<AllModalProps, "isOpen" | "handleClose">,
    ChildrenProps {
  title: string;
  subtitle?: string;
  isSuccess?: boolean;
}

export interface ModalContainerProps
  extends Pick<
    ModalContentProps,
    "isSuccess" | "isOpen" | "handleClose" | "children"
  > {}

export interface ModalFormProps {
  handleSuccess: () => void;
}

export interface ModalSuccessProps extends Pick<AllModalProps, "handleClose"> {}
