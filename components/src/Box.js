import React, { forwardRef, createElement } from "react";

export const Box = forwardRef(({ as = "div", children, ...props }, ref) => {
  return createElement(as, { ref: { ref }, ...props }, children);
});
