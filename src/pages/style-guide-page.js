import { h } from "preact";
import { Box } from "../components/index.js";
import { Button } from "../components/Buttons/Button.js";

export default (props) => (
  <Box>
    <Box class="container">
      <Button class="btn">{"Basic"}</Button>
      <Button class="btn btn-primary">{"Primary"}</Button>
      <Button class="btn btn-secondary">{"Secondary"}</Button>
    </Box>
  </Box>
);
