import { h } from "preact";
import { Box } from "../../box.js";
import { Button } from "../../buttons/Button.js";
import { useSiteData } from "../../SiteDataProvider/index.js";

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
  const data = useSiteData();
  const { footer = {}, "site-metadata": siteMetadata = {} } = data;

  return (
    <Box>
      <Box class="flex flex-row">
        <Box as="span" class="w-1/4"></Box>
        <SocialLink
          class="my-auto p-4"
          to={`https://twitter.com/${siteMetadata.twitterUsername || ""}`}
        >
          <TwitterIcon class="fill-current text-secondary-900 inline-block h-10 w-10" />
        </SocialLink>
        <SocialLink
          class="my-auto p-4"
          to={`https://github.com/${siteMetadata.githubUsername || ""}`}
        >
          <GitHubIcon class="fill-current text-secondary-900 inline-block h-10 w-10" />
        </SocialLink>
        <Box class="my-auto p-4 text-secondary-900 font-bold inline-block">
          © {footer.copyright}
        </Box>
      </Box>
    </Box>
  );
};

export default FooterSection;
