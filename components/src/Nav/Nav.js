import React, { createElement } from "react";
import { Box } from "../Box.js";
export default function Nav({ children }) {
  return (
    <Box as="nav" class="p-4">
      <Box as="ul" class="flex space-x-2">
        {children}
      </Box>
    </Box>
  );
}
