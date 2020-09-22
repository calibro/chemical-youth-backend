export default {
  name: "publication",
  title: "Publication",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "blockContentResources",
    },
    {
      title: "Year",
      name: "year",
      type: "number",
      validation: (Rule) => Rule.required().integer().positive(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      validation: (Rule) => Rule.required(),
      to: [
        {
          type: "resourcecategory",
        },
      ],
    },
    {
      title: "Document",
      name: "document",
      type: "file",
    },
    {
      name: "private",
      title: "Private Document",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      name: "name",
    },
    prepare(value) {
      const block = (value.name || []).find((block) => block._type === "block");
      return {
        title: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No title",
      };
    },
  },
};
