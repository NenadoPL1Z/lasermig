import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";

export const TagButton = styled(OutlinedButton)<{ active?: boolean }>(
  ({ active }) =>
    active
      ? {
          position: "relative",

          color: ColorScheme.WHITE,
          backgroundColor: ColorScheme.PRIMARY,
          border: "none",
        }
      : {},
);
