import React from "react";
import {
  DivWBorderWrapper,
  SectionHeading,
  SectionWrapper,
} from "@/components/common";
import { IEducation } from "@/interface/education";

interface EducationProps {
  educations: IEducation[];
}

const Education: React.FC<EducationProps> = ({ educations }) => (
  <SectionWrapper>
    <SectionHeading heading="Education" fontColor="#0a0a0a" />
    <div className="space-y-5">
      {educations.map((education: IEducation, index) => {
        const { schoolName, major, degree, duration, location }: IEducation =
          education;

        return (
          <DivWBorderWrapper key={`exp-${index}`}>
            <div className="flex flex-row gap-12">
              <div className="flex flex-col w-1/4">
                <p className="text-sm font-medium" aria-label="duration">
                  {degree}
                </p>
                <p className="text-sm" aria-label="duration">
                  {duration}
                </p>
              </div>
              <div className="flex flex-col w-2/3">
                <p className="text-sm font-medium" aria-label="school name">
                  {schoolName}
                </p>
                <p className="text-sm" aria-label="major">
                  {major}
                </p>
              </div>
            </div>
          </DivWBorderWrapper>
        );
      })}
    </div>
  </SectionWrapper>
);

export default Education;
