import * as React from "react";

import {
  chakra,
  forwardRef,
  ImageProps,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

import logo from "./logo.svg";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = forwardRef<ImageProps, "img">((props, ref) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

  return <chakra.img animation={animation} ref={ref} src={logo}
{...props} />;
});

export default Logo;
