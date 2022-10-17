import { h } from "preact";
import { Box } from "../components/index.js";
import { useSiteData } from "../site-data-provider.js";

export default (props) => {
  const data = useSiteData();
  return (
    <Box>
      <Box as="div" class="bg-header">
        Site Data JSON
      </Box>
      <Box as="pre" class="bg-fire-200 dark:bg-fire-900 dark:text-fire-100">{JSON.stringify(data, null, 2)}</Box>
    </Box>
  );
};
