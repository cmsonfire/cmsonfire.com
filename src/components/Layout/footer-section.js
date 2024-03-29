import { h } from "preact";
import { Box } from "../Box.js"
import { Button } from "../Buttons/Button.js"

import TwitterIcon from "../icons/twitter-icon.js";
import GitHubIcon from "../icons/github-icon.js";

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

const WrapperSection = (props) => {
  const data = props.data || {};
  const { copyright = "copyright", social = {} } = data;

  return (
    <Box class="items-center">
      <Box class="flex flex-row items-center">
        <SocialLink
          class="my-auto p-2"
          to={`https://twitter.com/${social.twitterUsername || ""}`}
          aria-label={`Twiter Link to ${social.twitterUsername || ""}`}
        >
          <TwitterIcon class="fill-primary-800 dark:fill-primary-200 text-primary-100 inline-block h-8 w-8" />
        </SocialLink>
        <SocialLink
          class="my-auto p-4 dark:text-primary-100"
          to={`https://github.com/${social.githubUsername || ""}`}
          aria-label={`Twiter Link to ${social.twitterUsername || ""}`}
        >
          <GitHubIcon class="fill-primary-800 dark:fill-primary-200 text-primary-100 inline-block h-8 w-8" />
        </SocialLink>
        <Box class="my-auto p-4 text-primary-800 font-bold inline-block dark:text-primary-200">
          © {copyright}
        </Box>
      </Box>
    </Box>
  );
};

const FooterSection = (props) => {

  return <WrapperSection data={props?.data} />;
};

export default FooterSection;
