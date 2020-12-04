import { h } from "preact";
import { Box } from "../box.js";
import Container from "./container.js";

const MainWrapper = (props) => (
  <Box
    as="main"
    class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"
    {...props}
  >
    {props.children}
  </Box>
);

const PageWrapper = (props) => (
  <MainWrapper class="py-6 bg-default flex flex-col desktop:flex-row justify-center sm:py-12">
    <Container class="w-full">{props.children}</Container>
  </MainWrapper>
);

const ListPageWrapper = (props) => (
  <MainWrapper class="py-6 bg-default flex flex-col desktop:flex-row justify-center sm:py-12">
    <Box class="w-1/3">{/* Placeholder for sidebar */}</Box>
    <Container class="w-1/3">{props.children}</Container>
    <Box class="w-1/3">{/* Placeholder for sidebar */}</Box>
  </MainWrapper>
);

export default (props) => {
  /* Determine if this is a page, list-page, item-page */
  const { props: childProps } = props.children;
  let type = childProps.type || "page"; //default
  if (childProps.meta && !childProps.type)
    type = childProps.meta.type || "item-page";
  if (childProps.posts) type = "list-page";

  let Wrapper = PageWrapper;
  switch (type) {
    case "list-page":
    case "item-page":
      Wrapper = ListPageWrapper;
  }
  return <Wrapper {...props} />;
};
