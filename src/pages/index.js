import { h } from "preact";
import { Box } from "../components/box.js";
import { Button } from "../components/index.js";

export default (props) => (
  <Box class=" min-h-full">
    <Box class="flex lg:flex-row md:flex-col py-16">
      <Box class="flex-col lg:w-1/2 md:w-full">
        <Box class="lg:w-4/5 md:w-full m-auto bg-fire-200 bg-opacity-50 p-10 shadow-md border-r-4">
          <Box class="lg:text-5xl md:text-4xl text-fire-900 lg:leading-tight md:leading-none">
            <Box class="font-bold">
              Tools to help you keep your content available
            </Box>
          </Box>
          <Box class="text-2xl text-gray-900">
            Build your sites from any tool using the same data and content
          </Box>
          <Box class="p-5 pt-10">
            <Button as="a" href="/#" class="btn btn-secondary m-0">
              {"Call to Action"}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box class="w-1/2">
        <Box class="text-2xl text-gray-900">Right</Box>
      </Box>
    </Box>
  </Box>
);
