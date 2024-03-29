import { h } from "preact";
import { Box } from "../Box.js";

const LogoIcon = (props) => {
  const {
    css,
    rotate = 0,
    outerColor = "#f57c00",
    middleColor = "#ffca28",
    innerColor = "#FAF089",
  } = props;
  const rotateDeg = `rotate(${parseInt(rotate)})`;

  return (
    <Box
      as="svg"
      css={css}
      focusable="false"
      viewBox="0 0 600 600"
      transform={rotateDeg}
      ariaHidden="true"
    >
      <path
        id="outer"
        fill={outerColor}
        d="M341.483 38.167c73.182 166.066-325.156 328.744-144.246 490.286 61.531 54.943 211.178 57.496 238.165-37.795 19.142-67.599-61.998-202.006 33.751-235.66-26.748-9.946-47.976 6.653-61.751 27.971-25.555 36.363-16.478-57.506-16.478-57.506s13.335-147.669-49.441-187.296z"
      />
      <path
        id="middle"
        fill={middleColor}
        d="M346.31 341.389c19.723 43.952 42.685 94.697 19.688 142.354-23.158 47.99-82.101 61.848-124.535 30.17-59.926-44.735-17.387-110.08 15.207-156.104-1.642 12.494-14.241 92.652 13.325 91.033 20.879-3.771 19.351-35.563 19.263-50.903-.262-45.695-14.87-132.357 49.354-142.078-32.865 4.971 1.645 72.035 7.698 85.528z"
      />
      <path
        id="inner"
        fill={innerColor}
        d="M314.137 446.329c18.622-31.94 11.768-70.012 8.376-104.627 15.889 41.146 27.402 97.238 19.778 124.602-7.624 27.364-53.181 45.707-59.153 29.535-5.972-16.172 20.824-32.063 30.999-49.51z"
      />
    </Box>
  );
};

export default LogoIcon;
