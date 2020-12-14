import { createElement } from "react";
import { Box } from "../Box.js";
import { Button } from "../buttons/Button.js";

import TwitterIcon from "../icons/social/twitter-icon.js";
import GitHubIcon from "../icons/social/github-icon.js";

const SocialLink = ({
  as = "span",
  to = "#",
  children,
  description = "",
  ...props
}) => {
  return (
    <Button
      as="a"
      href={to || `#`}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </Button>
  );
};

const FooterSection = (props) => {
  const data = props.data || {};
  const { footer = {}, siteMetadata = {} } = data;

  return (
    <Box>
      <Box class="flex flex-row">
        <Box as="span" class="w-1/4"></Box>
        <SocialLink
          class="my-auto p-4"
          to={`https://twitter.com/${siteMetadata.twitterUsername || ""}`}
        >
          <TwitterIcon class="fill-current text-primary-100 inline-block h-10 w-10" />
        </SocialLink>
        <SocialLink
          class="my-auto p-4"
          to={`https://github.com/${siteMetadata.githubUsername || ""}`}
        >
          <GitHubIcon class="fill-current text-primary-100 inline-block h-10 w-10" />
        </SocialLink>
        <Box class="my-auto p-4 text-primary-800 font-bold inline-block">
          © {footer.copyright}
        </Box>
      </Box>
    </Box>
  );
};

export default FooterSection;
