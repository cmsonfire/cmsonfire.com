import { h } from "preact";
import { Box } from "../components/box.js";
import { useSiteData } from "../components/SiteDataProvider/index.js";

export default (props) => {
  const data = useSiteData();
  return (
    <Box>
      <Box
        as="div"
        class="text-lg bg-primary-900 leading-5 font-medium text-secondary-100 p-4"
      >
        Site Data JSON
      </Box>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Box>
  );
};
