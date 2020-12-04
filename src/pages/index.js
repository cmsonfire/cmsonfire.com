import { h } from "preact";
import { Box } from "../components/box.js";
import { Button } from "../components/index.js";

export default (props) => (
  <Box class="bg-fire-300">
    <Box class="flex flex-row">
      <Box class="flex-col w-1/2">
        <Box class="text-fire">Left-1</Box>
        <Box class="">Left-2</Box>
        <Box class="">Left-3</Box>
      </Box>
      <Box class="w-1/2">
        <Box class="">Right</Box>
      </Box>
    </Box>
    <Button as="a" href="/posts" class="btn btn-secondary">
      {"Posts"}
    </Button>
  </Box>
);
