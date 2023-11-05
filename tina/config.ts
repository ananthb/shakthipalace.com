import { defineConfig } from "tinacms";
import { facilitiesFields } from "./templates";
import { galleryFields } from "./templates";

const branch = process.env.CF_PAGES_BRANCH || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINAIO_CLIENTID,
  token: process.env.TINAIO_TOKEN,
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "media",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Gallery",
        name: "gallery",
        path: "content/gallery",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...galleryFields(),
        ],
      },
      {
        format: "md",
        label: "Facilities",
        name: "facilities",
        path: "content/facilities",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...facilitiesFields(),
        ],
      },
    ],
  },
});
