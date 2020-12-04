import { h } from "preact";
import { useSiteData } from "../../SiteDataProvider/index.js";

export const useSiteMetadata = () => {
  const siteData = useSiteData();
  const siteMetaData = siteData["site-metadata"] || {};
  const data = {
    ...siteMetaData,
  };
  // title;
  // description;
  // author;
  // organization;
  // facebookAppID;
  // image;
  // owner;
  // titleTemplate;
  // twitterUsername;
  // twitterCardType;
  // url;
  return data;
};
