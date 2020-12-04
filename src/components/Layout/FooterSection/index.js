import { h } from "preact";
import { Box } from "../../box.js";
import { Button } from "../../buttons/Button.js";

import TwitterIcon from "../../icons/social/twitter-icon.js";
import GitHubIcon from "../../icons/social/github-icon.js";

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
  return (
    <Box>
      <Box class="flex flex-row">
        <Box as="span" class="w-1/4"></Box>
        <SocialLink class="my-auto p-4" to={`https://twitter.com/3_alves`}>
          <TwitterIcon class="fill-current text-gray-100 inline-block h-10 w-10" />
        </SocialLink>
        <SocialLink class="my-auto p-4" to={`https://github.com/talves`}>
          <GitHubIcon class="fill-current text-gray-100 inline-block h-10 w-10" />
        </SocialLink>
        <Box class="my-auto p-4 text-gray-100 inline-block">© Tony Alves</Box>
      </Box>
    </Box>
  );
};

export default FooterSection;
