import { h } from "preact";
import { Box } from "../box.js";
import Navigation from "../Nav/index.js";
import LogoIcon from "../icons/LogoIconGlow.js";
import colors from "../../theme/colors.js";

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
  const theme = { colors };
  return (
    <HeaderWrapper class="relative flex flex-row h-18 p-2 bg-transparent font-medium text-fire-900">
      <Box class="flex h-18">
        <Box as="a" href="/" class="w-16 h-16 flex-item">
          <Box
            as="span"
            class="absolute bottom-0 pl-16 pb-1 text-3xl font-medium my-auto italic text-fire"
          >
            {props.header}
          </Box>
          <LogoIcon />
        </Box>
      </Box>
      <Navigation class="absolute top-0 right-0" />
      <Box class="float-right absolute right-0">
        <ThemeSwitcher displayMode={false} />
      </Box>
    </HeaderWrapper>
  );
};
