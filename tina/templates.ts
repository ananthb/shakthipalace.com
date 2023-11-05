import type { TinaField } from "tinacms";
export function facilitiesFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "heading",
      label: "Heading",
    },
    {
      type: "string",
      name: "icon",
      label: "Icon",
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
    },
    {
      type: "number",
      name: "weight",
      label: "Weight",
      required: true,
    },
    {
      type: "image",
      name: "images",
      label: "Photos",
      list: true,
    },
  ] as TinaField[];
}
export function galleryFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Thumbnail",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
    },
    {
      type: "image",
      name: "images",
      label: "Photos",
      list: true,
    },
  ] as TinaField[];
}
