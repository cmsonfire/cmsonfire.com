import { h } from "preact";
import { Box } from "components";

export default (props) => (
  <Box>
    <Box
      as="div"
      class="text-lg bg-primary-900 leading-5 font-medium text-secondary-100 p-4"
    >
      Settings JSON
    </Box>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </Box>
);
