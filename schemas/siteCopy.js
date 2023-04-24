const siteCopy = {
  name: "site-copy",
  type: "document",
  title: "Site Copy",
  fields: [
    {
      name: "introTopLeft",
      title: "Intro top left",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "introBottomRight",
      title: "Intro bottom right",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "introHeroText",
      title: "Intro hero text",
      type: "string",
    },
    {
      name: "whatDo",
      title: "What you do",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "contactTitle",
      title: "Contact form title",
      type: "string",
    },
    {
      name: "contactDescription",
      title: "Contact form description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default siteCopy;
