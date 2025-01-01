import { IExperience } from "@/interface/experience";
import { colorMap } from "@/utils/colormap";

export const experiencesItems: IExperience[] = [
  {
    companyName: "Aerobiosys Innovations Pvt. Ltd",
    duration: "Jan 22 - Present",
    tags: ["full-time"],
    tagBgColors: [colorMap["full-time"]],
    title: "Software Engineer",
    location: "Chennai & Puducherry, India",
    desc: [
      "Developed <span class='semi-bold'>JeevanConnect</span>, a cloud platform for JeevanLite medical ventilators, using  <span class='semi-bold'>Flutter, Django </span > and  <span class='semi-bold'>PostgreSQL </span>",
      "Created embedded firmware applications for  <span class='semi-bold'>STM32</span> microcontrollers"
    ],
  },
  {
    companyName: "Aerobiosys Innovations Pvt. Ltd",
    duration: "Oct 2020 - Jan 2022",
    tags: ["full-time"],
    tagBgColors: [colorMap["full-time"]],
    title: "Android Application Developer Intern",
    location: "Puducherry, India",
    desc: [
      "Designed and developed an  <span class='semi-bold'>IoT-based mobile application</span> in  <span class='semi-bold'>Flutter</span> for JeevanLite medical ventilators",
    ],
  },
  {
    companyName: "Future Gurukuls Pvt. Ltd",
    duration: "Oct 2020 - Feb 2021",
    tags: ["full-time"],
    tagBgColors: [colorMap["full-time"]],
    title: "Embedded Firmware Developer",
    location: "Puducherry, India",
    desc: [
      "Developed user-friendly libraries to interface components with  <span class='semi-bold'>ATMega328</span> and <span class='semi-bold'>ATMega2560</span> for educational purposes.",
      "Conducted workshops for undergraduate students on  <span class='semi-bold'>Introduction to Embedded Systems</span> using the  <span class='semi-bold'>Arduino</span> platform"
    ],
  },
  {
    companyName: "Syntank Pvt. Ltd",
    duration: "Sep 2019 - Aug 2020",
    tags: ["full-time"],
    tagBgColors: [colorMap["full-time"]],
    title: "Reserach Assistant",
    location: "Puducherry",
    desc: [
      "Designed and developed innovative  <span class='semi-bold'>science kits</span> for students, along with teaching aids tailored for schools"
    ],
  },
];