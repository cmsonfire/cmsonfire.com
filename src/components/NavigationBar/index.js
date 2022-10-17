import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { Box } from "../Box.js";

const NavigationBarWrapper = (props) => {
  return (
    <Box as="header" {...props} class={props.className}>
      {props.children}
    </Box>
  );
};

export const ThemeSwitcher = (props) => (
  <Box as="div" {...props}>
    {props.children}
  </Box>
);

const MenuButton = (props) => {
  const [on, setOn] = useState(false);

  const handleClick = (event) => {
    setOn(!on);
  }
  useEffect(()=>{
    if (typeof props.onToggle === "function") {
      props.onToggle(on)
    }
  }, [on, props.onToggle])

  return (
    <Box
      as="button"
      onClick={handleClick}
      data-collapse-toggle="navbar-default"
      type="button"
      class="md:hidden items-center p-2 ml-3 text-sm text-fire-500 rounded-lg hover:bg-fire-100 focus:outline-none focus:ring-2 focus:ring-fire-200 dark:text-fire-400 dark:hover:bg-fire-700 dark:focus:ring-fire-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </Box>
  );
};

const NavigationBar = ({children, ...props}) => {

  return (
    <NavigationBarWrapper as="header" className="bg-white text-fire-800 bg-fire-200 border-fire-200 px-2 sm:px-4 py-2.5 dark:bg-fire-800 dark:text-fire-300">
      <Box class="container flex justify-between items-center mx-auto">
        <Box as="a" href="/" class="flex items-center" aria-label="Site Root">
          <Box
            as="span"
            class="self-center text-4xl font-semibold whitespace-nowrap dark:text-fire-100 italic"
          >
            {props.header}
          </Box>
        </Box>
        <MenuButton onToggle={props.onToggle}/>
        {children}
        <Box class="float-right absolute right-0">
          <ThemeSwitcher displayMode={false} />
        </Box>
      </Box>
    </NavigationBarWrapper>
  );
};

export default NavigationBar;
