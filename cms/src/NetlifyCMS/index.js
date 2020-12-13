import React from "react";
import CMS from "netlify-cms-app";
import { NetlifyCmsBackendFirestore } from "netlify-cms-backend-firestore";
import NavigationPreview from "./components/NavigationPreview";
// import previewStyles from "./components/previewStyles";
// import PostPreview from "./components/PostPreview";
// import AuthorsPreview from "./components/AuthorsPreview";
// import GeneralPreview from "./components/GeneralPreview";
// import EditorYoutube from "./components/EditorYoutube";
// import RelationKitchenSinkPostPreview from "./components/RelationKitchenSinkPostPreview";

import config from "../config";

const NetlifyCMS = () => {
  React.useEffect(() => {
    // console.log(`CMS [${process.env.NODE_ENV}]`, CMS);
    CMS.registerBackend("firestore", NetlifyCmsBackendFirestore);
    // if (process.env.NODE_ENV === "development") {
    //   config.load_config_file = false;
    //   config.local_backend = {
    //     url: "http://localhost:3000/api/v1",
    //   };
    // }
    CMS.registerPreviewTemplate("menu", NavigationPreview);
    // CMS.registerPreviewTemplate("posts", PostPreview);
    // CMS.registerPreviewStyle(previewStyles, { raw: true });
    // CMS.registerPreviewTemplate("authors", AuthorsPreview);
    // CMS.registerPreviewTemplate("general", GeneralPreview);
    // CMS.registerEditorComponent(EditorYoutube);
    // CMS.registerWidget(
    //   "relationKitchenSinkPost",
    //   "relation",
    //   RelationKitchenSinkPostPreview
    // );
    CMS.registerPreviewStyle("/styles.css");
    CMS.init({ config });
  }, []);

  return <div id="nc-root" />;
};

export default NetlifyCMS;
