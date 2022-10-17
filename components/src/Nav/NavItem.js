import { jsx } from "react/jsx-runtime";
import { createElement } from "react";
import { Box } from "../Box.js";

export default function NavItem({ href, isActive, children }) {
  return (
    <Box as="li">
      <Box
        as="a"
        href={href}
        className={`block px-4 py-2 rounded-md ${isActive ? "text-fire" : ""}`}
      >
        {children}
      </Box>
    </Box>
  );
}
