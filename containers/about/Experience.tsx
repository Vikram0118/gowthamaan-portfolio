import React from "react";
import {
  DivWBorderWrapper,
  ListWrapper,
  SectionHeading,
  SectionWrapper,
  Tag,
} from "@/components/common";
import { IExperience } from "@/interface/experience";

interface ExperienceProps {
  experiences: IExperience[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => (
  <SectionWrapper>
    <SectionHeading heading="Experience" fontColor="#0a0a0a" />
    <div className="space-y-8">
      {experiences.map((experience, index) => {
        const {
          companyName,
          desc,
          duration,
          location,
          tagBgColors,
          tags,
          title,
        } = experience;

        return (
          <DivWBorderWrapper key={`exp-${index}`}>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-4 flex flex-col gap-2">
                <div>
                  <p className="text-base font-medium mb-1">{companyName}</p>
                  <p className="text-sm text-gray-600">{duration}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <Tag
                      label={tag}
                      tagProps={{
                        style: {
                          backgroundColor: tagBgColors[i],
                        },
                      }}
                      key={`exp-${index}-tag-${i}`}
                    />
                  ))}
                </div>
              </div>
              <div className="col-span-8 flex flex-col gap-2">
                <div>
                  <p className="text-base font-medium mb-1">{title}</p>
                  <p className="text-sm text-gray-600">{location}</p>
                </div>
                <ListWrapper
                  liProps={{
                    className: "text-base leading-relaxed",
                  }}
                >
                  {desc.map((item, i) => (
                    <li
                      key={`desc-${index}-${i}`}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ListWrapper>
              </div>
            </div>
          </DivWBorderWrapper>
        );
      })}
    </div>
  </SectionWrapper>
);

export default Experience;
