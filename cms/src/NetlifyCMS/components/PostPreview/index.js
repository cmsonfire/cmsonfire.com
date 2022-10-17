import React from "react";
import MDX from "@mdx-js/runtime";
import {
  Box,
  OutsideLink,
  // EmailLink,
  Nav,
  NavigationBar,
  Footer,
} from "@cmsonfire/components";

const components = {
  // Import components for mdx
  wrapper: (props) => <div className="p-4" {...props} />,
  Box,
  OutsideLink,
  h1: (props) => <Box as="h1" {...props} className="heading h1-mdx" />,
  h2: (props) => <Box as="h2" {...props} className="heading h2-mdx" />,
  h3: (props) => <Box as="h3" {...props} className="heading h3-mdx" />,
  h4: (props) => <Box as="h4" {...props} className="heading h4-mdx" />,
  p: (props) => <Box as="p" {...props} className="paragraph-mdx" />,
  ul: (props) => <Box as="ul" {...props} className="ul-mdx" />,
  blockquote: (props) => (
    <Box as="blockquote" {...props} className="blockquote-mdx" />
  ),
  codeblock: ({ children, ...props }) => (
    <div
      dangerouslySetInnerHTML={{ __html: children }}
      {...props}
      style={{ background: "black", padding: "1rem" }}
    />
  ),
  "heading-link-icon": (props) => (
    <svg
      className="w-5 h-5"
      //   {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
        clipRule="evenodd"
      />
    </svg>
  ),
  // EmailLink,
  // Something: Thing,
};

const MDXRenderer = (props) => <MDX {...props} />;

const PostPreview = ({ entry, widgetFor }) => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    if (!entry) return;
    const entryData = entry.getIn(["data"]).toJS();
    setData(entryData);
  }, [entry]);

  return (
    <React.Fragment>
      <NavigationBar header={data.title}>
        <Box className={`divide-y divide-gray-100 absolute top-0 right-0`}>
          <Nav data={{}} />
        </Box>
      </NavigationBar>
      <MDXRenderer
        components={components}
        scope={{ meta: { ...data } }}
        children={data.body}
      />
      <Footer data={{}} />
      <h2 className="text-2xl">[meta]</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </React.Fragment>
  );
};

export default PostPreview;
