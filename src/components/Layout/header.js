import { h } from "preact";
import { Box } from "../box.js";
import LogoIcon from "../icons/LogoIcon.js";
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
    <HeaderWrapper class="flex flex-row h-18 p-2 bg-transparent font-medium text-fire-900">
      <Box class="flex h-18">
        <Box
          as="a"
          href="/"
          class="w-16 h-16 flex-item border-solid border-2 border-fire-900"
          style={{
            borderRadius: "50%",
          }}
        >
          <LogoIcon
            outerColor={theme.colors.fire["700"]}
            middleColor={theme.colors.fire["600"]}
            innerColor={theme.colors.fire["500"]}
          />
        </Box>
        <Box
          as="span"
          class="pl-4 text-3xl font-medium my-auto italic text-fire"
        >
          {props.header}
        </Box>
      </Box>
      <Box class="float-right absolute right-0">
        <ThemeSwitcher displayMode={false} />
      </Box>
    </HeaderWrapper>
  );
};
