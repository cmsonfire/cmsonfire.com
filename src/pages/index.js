import { h } from "preact";
import { Box } from "../components/box.js";
import { Button } from "../components/index.js";

export default (props) => (
  <Box class="min-h-full">
    <Box class="flex items-center lg:flex-row md:flex-col py-16">
      <Box class="flex-col lg:w-1/2 md:w-full lg:p-16 md:p-1 ">
        <Box class="md:w-full m-auto bg-fire-100 p-10 shadow-md border-r-4">
          <Box class="lg:text-5xl md:text-4xl text-primary-800 lg:leading-tight md:leading-none">
            <Box class="font-bold">
              Tools to help you keep your content available
            </Box>
          </Box>
          <Box class="text-2xl text-gray-900">
            Build your sites from any tool using the same data and content
          </Box>
          <Box class="p-5 pt-10">
            <Button as="a" href="/#" class="btn btn-primary m-0">
              {"Call to Action"}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box class="flex-col lg:w-1/2 md:w-full lg:p-32 md:p-20 h-full box-background">
        <Box class="w-full text-center text-2xl text-gray-900">
          Using the open source examples in the project, you can move your
          content from your repository into a location where it can be accessed
          by multiple sources.
        </Box>
      </Box>
    </Box>
  </Box>
);
