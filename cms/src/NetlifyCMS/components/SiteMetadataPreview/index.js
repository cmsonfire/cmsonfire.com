import React from "react";
import { Box, Nav, NavigationBar, Footer, FooterSection } from "@cmsonfire/components";

const SiteMetadataPreview = ({ entry, widgetFor }) => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const siteMetadata = entry.getIn(["data"]).toJS();
    setData(siteMetadata);
  }, [entry]);

  return (
    <React.Fragment>
      <NavigationBar header={data.title}>
        <Box className={`divide-y divide-gray-100 absolute top-0 right-0`}>
          <Nav data={{}} />
        </Box>
      </NavigationBar>
      <Box as="h2" className="text-2xl">
        Fields Not Used in Footer:
      </Box>
      <Box className="text-base">{`author: ${data.author}`}</Box>
      <Box className="text-base">{`description: ${data.description}`}</Box>
      <Box className="text-base">{`facebookAppID: ${data.facebookAppID}`}</Box>
      <Box className="text-base">{`image: ${data.image}`}</Box>
      <Box className="text-base">{`owner: ${data.owner}`}</Box>
      <Box className="text-base">{`titleTemplate: ${data.titleTemplate}`}</Box>
      <Box className="text-base">{`twitterCardType: ${data.twitterCardType}`}</Box>
      <Box className="text-base">{`twitterUsername: ${data.twitterUsername}`}</Box>
      <Box className="text-base">{`url: ${data.url}`}</Box>
      <Footer>
        <FooterSection
          data={{
            footer: { copyright: data.organization },
            siteMetadata: {},
          }}
        />
      </Footer>
    </React.Fragment>
  );
};

export default SiteMetadataPreview;
