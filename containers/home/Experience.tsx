import React from "react";
import {
  DivWBorderWrapper,
  LinkWrapper,
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
    <div className="space-y-4">
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
            <div className="flex flex-row gap-12">
              <div className="flex flex-col w-1/4 gap-1">
                <p className="text-sm font-medium" aria-label="duration">
                  {companyName}
                </p>
                <p className="text-sm" aria-label="duration">
                  {duration}
                </p>
                <div className="flex flex-row space-x-2">
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
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium" aria-label="place">
                  {title}
                  <br />
                  {location}
                </div>
                <ListWrapper
                  liProps={{
                    className: "w-auto",
                  }}
                >
                  {desc.map((item, i) => (
                    <li key={`desc-${index}-${i}`}>{item}</li>
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
