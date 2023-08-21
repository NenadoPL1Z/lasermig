import { css, styled } from "@mui/material";
import ColorScheme from "@/styles/theme/ColorScheme";
import { OutlinedButton } from "@/UI/Buttons/OutlinedButton";

const PsevdoElementsMixin = css`
  content: "";

  width: 0;
  height: 0;

  opacity: 0;
  background-color: ${ColorScheme.WHITE};

  position: absolute;
  top: 50%;
  right: 41px;

  transition: 0.2s all linear;
`;

const PsevdoElementsMixinBefore = css`
  ${PsevdoElementsMixin};
  transform: translateY(-50%) rotate(140deg);
`;

const PsevdoElementsMixinAfter = css`
  ${PsevdoElementsMixin};
  transform: translateY(-50%) rotate(40deg);
`;

const PsevdoElementMixinHover = css`
  width: 1px;
  height: 15px;

  opacity: 1;
`;

export const TagButton = styled(OutlinedButton)<{ active?: boolean }>(
  ({ active }) =>
    active
      ? {
          position: "relative",

          color: ColorScheme.WHITE,
          backgroundColor: ColorScheme.PRIMARY,
          border: "none",

          transition: ".2s all linear",

          "&::before": PsevdoElementsMixinBefore,
          "&::after": PsevdoElementsMixinAfter,

          "&:hover": {
            paddingRight: "54px",

            border: "none",
            backgroundColor: ColorScheme.PRIMARY,

            "&::before": PsevdoElementMixinHover,
            "&::after": PsevdoElementMixinHover,
          },
        }
      : {},
);
