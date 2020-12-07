import { h } from "preact";
import { Box } from "../box.js";
import Navigation from "../Nav/index.js";

const HeaderWrapper = (props) => (
  <Box as="header" {...props}>
    {props.children}
  </Box>
);

export const ThemeSwitcher = (props) => (
  <Box as="div" {...props}>
    {props.children}
  </Box>
);

export default (props) => {
  return (
    <HeaderWrapper class="relative flex flex-row h-18 p-2 bg-transparent font-medium text-fire-900">
      <Box class="flex h-18">
        <Box as="a" href="/" class="h-16 flex-item">
          <Box
            as="span"
            class="absolute bottom-0 text-4xl font-semibold my-auto italic text-fire"
          >
            {props.header}
          </Box>
        </Box>
      </Box>
      <Navigation class="absolute top-0 right-0" />
      <Box class="float-right absolute right-0">
        <ThemeSwitcher displayMode={false} />
      </Box>
    </HeaderWrapper>
  );
};
