import { IExperience } from "@/interface/experience";
import { colorMap } from "@/utils/colormap";

export const experiencesItems: IExperience[] = [
  {
    companyName: "NPTEL - IITM",
    duration: "Aug '24 - Dec '24",
    tags: ["full-time"],
    tagBgColors: [colorMap["full-time"]],
    title: "Teaching Assistent",
    location: "Online",
    desc: [
      "Tecaching Asssitent for Machine Learning course on NPTEL",
      "Worked on the course under the guidence of Dr.Ganapathy"
    ],
  },
  {
    companyName: "Aerobiosys Innovations",
    duration: "Aug '23 - Present",
    tags: ["full-time"],
    tagBgColors: [colorMap["full-time"]],
    title: "Software Engineer",
    location: "Hybrid",
    desc: [
      "All things coding is handled by me ✨",
      "All things coding is handled by me ✨"
    ],
  },
  {
    companyName: "Syntax Resarch",
    duration: "Aug '22 - Aug '23",
    tags: ["full-time"],
    tagBgColors: [colorMap["full-time"]],
    title: "Research Intern",
    location: "Hybrid",
    desc: [
      "All things coding is handled by me ✨",
      "All things coding is handled by me ✨"
    ],
  },
];