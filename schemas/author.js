const author = {
  type: "document",
  name: "author",
  title: "Author for blogs",
  fields: [
    {
      type: "string",
      name: "name",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "image",
      name: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      type: "array",
      name: "bio",
      title: "Bio",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default author;
