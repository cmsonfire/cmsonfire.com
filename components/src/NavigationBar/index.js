import { jsx } from "react/jsx-runtime";
import { createElement } from "react";
import { Box } from "../Box.js";

const NavigationBarWrapper = ({ children, ...props }) => {
  return (
    <Box as="header" {...props} className={props.className}>
      {children}
    </Box>
  );
};

export const ThemeSwitcher = ({ children, ...props }) => (
  <Box as="div" {...props}>
    {children}
  </Box>
);

export const NavigationBar = ({ children, ...props }) => {
  return (
    <NavigationBarWrapper className="relative flex flex-row h-18 p-2 bg-transparent font-medium text-fire-900">
      <Box className="flex h-18">
        <Box as="a" href="/" className="h-16 flex-item">
          <Box
            as="span"
            className="absolute bottom-0 text-4xl font-semibold my-auto italic text-fire"
          >
            {props.header}
          </Box>
        </Box>
      </Box>
      {children}
      <Box className="float-right absolute right-0">
        <ThemeSwitcher displayMode={false} />
      </Box>
    </NavigationBarWrapper>
  );
};
