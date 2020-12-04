import { h } from "preact";
import { Box } from "../box.js";
export default function Nav({ children }) {
  return (
    <Box as="nav" class="p-4">
      <Box as="ul" class="flex space-x-2">
        {children}
      </Box>
    </Box>
  );
}
