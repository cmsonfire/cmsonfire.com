import { h } from "preact";
import { forwardRef } from "preact/compat";

export const Box = forwardRef(({ as = "div", children, ...props }, ref) => {
  return h(as, { ref: { ref }, ...props }, children);
});
