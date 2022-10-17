import { h } from "preact";
import { Box } from "../components/index.js";

export default ({children, ...props}) => (
  <Box>
    <Box
      as="div"
      class="text-lg bg-primary-900 leading-5 font-medium text-primary-100 p-4"
    >
      Settings JSON
    </Box>
    <Box as="pre" class="bg-fire-200 dark:bg-fire-900 dark:text-fire-100">{JSON.stringify(props, null, 2)}</Box>
  </Box>
);
