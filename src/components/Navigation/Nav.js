import { h } from "preact";
import { Box } from "../Box.js";
export default function Nav({ children }) {
  return (
    <Box
      as="ul"
      class="bg-primary-100 outline outline-2 md:outline-0 outline-fire-800 p-4 mt-4 md:flex md:flex-row md:items-center md:w-auto md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-fire-800 md:dark:bg-fire-900 dark:border-fire-700"
    >
      {children}
    </Box>
  );
}
