import { css, styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";
import { Breakpoints } from "@/styles/theme/Breakpoints";

export const TagButton = styled(OutlinedButton)<{ active?: boolean }>(
  ({ active }) =>
    active
      ? css`
          position: relative;

          color: ${ColorScheme.WHITE};
          background-color: ${ColorScheme.PRIMARY};
          border: none;
          white-space: nowrap;

          @media (max-width: ${Breakpoints.BIG_TABLET}px) {
            &:hover {
              color: ${ColorScheme.WHITE};
              fill: ${ColorScheme.WHITE};
              background-color: ${ColorScheme.SECONDARY};

              & > svg {
                fill: ${ColorScheme.WHITE};

                & > path {
                  fill: ${ColorScheme.WHITE};
                }
              }
            }
          }
        `
      : css`
          white-space: nowrap;
        `,
);
