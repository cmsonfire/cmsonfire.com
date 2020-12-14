import { h } from "preact";
import { Box } from "components";
import { Button, FooterSection as WrapperSection } from "components";
import { useSiteData } from "../../site-data-provider.js";

const FooterSection = (props) => {
  const data = useSiteData();
  const { footer = {}, "site-metadata": siteMetadata = {} } = data;

  return <WrapperSection data={{ footer, siteMetadata }} />;
};

export default FooterSection;
