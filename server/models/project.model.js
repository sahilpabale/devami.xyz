const { Schema, model } = require("mongoose");

const schema = Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  },
  username: {
    type: String,
  },
  name: {
    type: String,
  },
  links: [
    {
      type: String,
    },
  ],
  stack: [
    {
      type: String,
    },
  ],
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
  resume: {
    type: String,
  },
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = model("Project", schema, "projects");
