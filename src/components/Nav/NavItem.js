import { h } from "preact";
import { Box } from "../box.js";
export default function NavItem({ href, isActive, children }) {
  return (
    <Box as="li">
      <Box
        as="a"
        href={href}
        class={`block px-4 py-2 rounded-md ${
          isActive ? "bg-fire-200 text-amber-700" : ""
        }`}
      >
        {children}
      </Box>
    </Box>
  );
}
