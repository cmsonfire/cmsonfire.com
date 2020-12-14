import { h } from "preact";
import { Box, Button } from "components";

export default (props) => (
  <Box>
    <Box class="container">
      <Button class="btn">{"Basic"}</Button>
      <Button class="btn btn-primary">{"Primary"}</Button>
      <Button class="btn btn-secondary">{"Secondary"}</Button>
    </Box>
  </Box>
);
