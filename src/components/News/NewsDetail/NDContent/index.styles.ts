import { css, styled } from "@mui/material";
import { FontNamespace } from "@/styles/theme/FontNamespace";
import { Breakpoints } from "@/styles/theme/Breakpoints";
import ColorScheme from "@/styles/theme/ColorScheme";

const Title = css`
  color: ${ColorScheme.PRIMARY};
  font-family: ${FontNamespace.BN};

  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ContainerSC = styled("div")`
  overflow-x: hidden;

  h1 {
    ${Title};
    font-size: 48px;
    @media (max-width: ${Breakpoints.BIG_TABLET}px) {
      font-size: 32px;
    }
  }

  h2 {
    ${Title};
    font-size: 36px;
    @media (max-width: ${Breakpoints.BIG_TABLET}px) {
      font-size: 32px;
    }
  }

  h3 {
    ${Title};
    font-size: 28px;
    @media (max-width: ${Breakpoints.BIG_TABLET}px) {
      font-size: 24px;
    }
  }

  h4,
  h5,
  h6 {
    ${Title};
    font-size: 24px;
  }

  p {
    color: ${ColorScheme.PRIMARY};
    font-family: ${FontNamespace.SF};

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: ${Breakpoints.BIG_TABLET}px) {
      font-size: 14px;
    }
  }

  ul,
  li {
    list-style-type: circle;
  }

  img {
    display: block;

    width: 100%;
    height: 100%;
    max-height: 477px;

    object-fit: contain;

    @media (max-width: ${Breakpoints.BIG_TABLET}px) {
      width: 100% !important;
      height: 100% !important;
    }
  }

  video {
    display: block;

    width: 100%;
    max-height: 567px;

    @media (max-width: ${Breakpoints.BIG_TABLET}px) {
      width: 100% !important;
    }
  }

  iframe {
    display: block;
    border-radius: 40px;

    width: 100%;
    max-height: 567px;

    @media (max-width: ${Breakpoints.BIG_TABLET}px) {
      width: 100%;
      max-height: 467px;
      border-radius: 24px;
    }

    @media (max-width: ${Breakpoints.MOBILE}px) {
      max-height: 250px;
    }
  }

  figcaption {
    color: ${ColorScheme.SECONDARY};

    font-family: ${FontNamespace.SF};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: ${Breakpoints.BIG_TABLET}px) {
      font-size: 12px;
    }
  }
`;
export const styles = {
  ContainerSC,
};
