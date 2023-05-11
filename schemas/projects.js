const projects = {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "screenshot",
      title: "Screenshot",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "showcaseUrl",
      title: "Showcase URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default projects;
