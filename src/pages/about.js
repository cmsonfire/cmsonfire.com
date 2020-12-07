import { h } from "preact";
import { Box } from "../components/box.js";
import { useSiteData } from "../components/SiteDataProvider/index.js";

export default (props) => {
  const data = useSiteData();
  return (
    <Box>
      <Box as="div" class="bg-header">
        Site Data JSON
      </Box>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Box>
  );
};
