export default {
  name: "internalresource",
  title: "Document Resource",
  type: "document",
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
      to: [
        {
          type: "resourcecategory"
        }
      ]
    },
    {
      title: "Document",
      name: "document",
      type: "file"
    },
    {
      name: "private",
      title: "Private Document",
      type: "boolean"
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
