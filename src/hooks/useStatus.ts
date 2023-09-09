import { useState } from "react";

export interface IStatusState {
  isLoading: boolean;
  hasError: string;
}
type ChangeStatusFunctionType = (status: Partial<IStatusState>) => void;

type NotRequiredStatus = Partial<IStatusState>;

export const useStatus = (initialArg?: NotRequiredStatus) => {
  const initialState: IStatusState = {
    isLoading: true,
    hasError: "",
    ...initialArg,
  };

  const [{ isLoading, hasError }, setStatus] =
    useState<IStatusState>(initialState);

  const isError = !!hasError;

  const handleChangeStatus: ChangeStatusFunctionType = (state) => {
    setStatus((prevState) => ({ ...prevState, ...state }));
  };

  const handleClearStatus = () => {
    setStatus({ isLoading: false, hasError: "" });
  };

  return {
    isError,
    isLoading,
    hasError,
    handleChangeStatus,
    handleClearStatus,
  };
};
