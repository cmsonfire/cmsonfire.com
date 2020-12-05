import { h } from "preact";
import { Box } from "../components/box.js";
import { Button } from "../components/index.js";

export default (props) => (
  <Box class=" min-h-full">
    <Box class="flex flex-row py-16 box-background">
      <Box class="flex-col w-1/2">
        <Box class="w-4/5 m-auto bg-fire-200 bg-opacity-50 p-10 shadow-md border-r-4">
          <Box class="text-4xl text-fire-900">
            <Box class="font-bold">
              Tools to help you keep your content available
            </Box>
          </Box>
          <Box class="text-2xl text-gray-900">
            Build from any tool using the same data and content
          </Box>
          <Box class="p-5 pt-10">
            <Button as="a" href="/#" class="btn btn-secondary m-0">
              {"Call to Action"}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box class="w-1/2">
        <Box class="text-2xl text-gray-900">This is the right Box</Box>
      </Box>
    </Box>
  </Box>
);
