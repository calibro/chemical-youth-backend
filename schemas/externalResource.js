export default {
  name: "externalresource",
  title: "Link Resource",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "blockContentResources"
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      validation: Rule => Rule.required(),
      to: [
        {
          type: "resourcecategory"
        }
      ]
    },
    {
      title: "Link URL",
      name: "linkUrl",
      type: "url"
    }
  ],
  preview: {
    select: {
      name: "name"
    },
    prepare(value) {
      const block = (value.name || []).find(block => block._type === "block");
      return {
        title: block
          ? block.children
              .filter(child => child._type === "span")
              .map(span => span.text)
              .join("")
          : "No title"
      };
    }
  }
};
