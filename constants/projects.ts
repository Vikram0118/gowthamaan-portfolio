import { IProject } from "@/interface/projects";
import { colorMap } from "@/utils/colormap";

export const projectsData: IProject[] = [
    {
      tags: ["hackathon winner", "group project"],
      tagBgColors: [colorMap["hackathon winner"], colorMap["group project"]],
      code: "https://github.com",
      preview: "https://devpost.com",
      title: "Awesome Todo Maintainer",
      description: [
        "Awesome Todo Maintainer Extension for Awesome Hackers; powered by NotionAPI.",
        "Manage your Notion TO-DOs Database right from VSCode.",
        "In this project, I worked on the extension UI and functionality part.",
        "Tech stacks involved are JavaScript, Node.js, Express.js, Visual Studio Code."
      ],
      thumbnail: "/assets/jpg/project-thumbnail.jpg"
    },
    {
      tags: ["hackathon winner", "group project"],
      tagBgColors: [colorMap["hackathon winner"], colorMap["group project"]],
      code: "https://github.com",
      title: "Pride Campus",
      description: [
        "Spreading awareness about the LGBTQ+ Community with our Discord Bot.",
        "I worked on the bot UI/UX logic & interaction part.",
        "Tech stacks involved are JavaScript, Discord.js."
      ],
      thumbnail: "/assets/jpg/project-thumbnail.jpg"
    },
    {
      tags: ["hackathon winner", "group project"],
      tagBgColors: [colorMap["hackathon winner"], colorMap["group project"]],
      code: "https://github.com",
      title: "Pride Campus",
      description: [
        "Spreading awareness about the LGBTQ+ Community with our Discord Bot.",
        "I worked on the bot UI/UX logic & interaction part.",
        "Tech stacks involved are JavaScript, Discord.js."
      ],
    }
  ];