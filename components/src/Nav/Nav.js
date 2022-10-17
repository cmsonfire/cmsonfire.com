import { jsx } from "react/jsx-runtime";
import { createElement } from "react";
import { Box } from "../Box.js";
export default function Nav({ children }) {
  return (
    <Box as="nav" className="p-4">
      <Box as="ul" className="flex space-x-2">
        {children}
      </Box>
    </Box>
  );
}
