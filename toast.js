// import { fetchMdxFromDisk, processMdx, sourceMdx } from "@toastdotdev/mdx";
// import { getApp, getCollectionFiles } from "@cmsonfire/cli";
// import path from "path";

// // see: https://github.com/toastdotdev/toast-tools/tree/main/packages/mdx

// export const sourceData = async ({ setDataForSlug }) => {
//   const app = await getApp({
//     projectName: "cms-on-fire",
//     authPath: path.join(process.cwd(), "./cms-config/service-account-key.js"),
//     // authPath: path.join(process.cwd(), "./cms-config/firebase-admin-key.js"), // local key file not using env
//   });

//   const settings = await getCollectionFiles(app, {
//     name: "settings",
//   }).then((files) => {
//     const item = {};
//     files.forEach((file) => {
//       item[file.slug] =
//         typeof file.content === "string"
//           ? JSON.parse(file.content)
//           : file.content;
//     });
//     return item;
//   });

//   const navigation = await getCollectionFiles(app, {
//     name: "navigation",
//   }).then((files) => {
//     const item = {};
//     files.forEach((file) => {
//       item[file.slug] =
//         typeof file.content === "string"
//           ? JSON.parse(file.content)
//           : file.content;
//     });
//     return item;
//   });

//   const authors = await getCollectionFiles(app, {
//     name: "authors",
//   }).then((files) => {
//     const item = {};
//     files.forEach((file) => {
//       item[file.slug] =
//         typeof file.content === "string"
//           ? JSON.parse(file.content)
//           : file.content;
//     });
//     return item;
//   });

//   settings.navigation = navigation;
//   settings.authors = authors;
//   await setDataForSlug("/settings", { data: { ...settings } });

//   const files = await getCollectionFiles(app, { name: "posts", isMeta: true });

//   const allMdx = await sourceMdx({
//     setDataForSlug,
//     sources: files.map((file) => ({
//       id: file.id,
//       source: file.content,
//     })),
//     slugPrefix: "",
//   });

//   await setDataForSlug("/posts", {
//     data: { posts: allMdx },
//   });
//   return;
// };

import {
  sourceMdx,
  fetchMdxFromDisk as fetchFilesFromDisk,
} from "@toastdotdev/mdx";

const getFilesObject = (files) => {
  const data = {};
  files.forEach((file) => {
    const dirArr = file.filename.split("/");
    const name = dirArr
      .slice(dirArr.length - 1)[0]
      .split(".")
      .slice(0, -1)
      .join(".");
    data[name] =
      typeof file.file === "string" ? JSON.parse(file.file) : file.file;
  });
  return data;
};

export const sourceData = async ({ setDataForSlug }) => {
  // https://github.com/toastdotdev/toast-tools/tree/main/packages/mdx
  const settingsFiles = await fetchFilesFromDisk({
    directory: "./data/settings",
    extensions: ["json"],
  });
  const navigationFiles = await fetchFilesFromDisk({
    directory: "./data/navigation",
    extensions: ["json"],
  });
  const authorsFiles = await fetchFilesFromDisk({
    directory: "./data/authors",
    extensions: ["json"],
  });
  const settings = getFilesObject(settingsFiles);
  settings.navigation = getFilesObject(navigationFiles);
  settings.authors = getFilesObject(authorsFiles);
  await setDataForSlug("/settings", { data: { ...settings } });

  // Using .mdx posts at garden/posts
  const allMdx = await sourceMdx({
    setDataForSlug,
    directory: "./data/posts",
    slugPrefix: "",
  });

  await setDataForSlug("/posts", {
    data: { posts: allMdx },
  });

  /* data for admin app */
  await setDataForSlug("/admin", {
    data: { type: "app" },
  });
  return;
};
