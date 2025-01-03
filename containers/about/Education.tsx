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
    <div className="space-y-8">
      {educations.map((education: IEducation, index) => {
        const { schoolName, major, degree, duration, location }: IEducation =
          education;

        return (
          <DivWBorderWrapper key={`exp-${index}`}>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-4 flex flex-col gap-4">
                <div>
                  <p className="text-base font-medium mb-1">{degree}</p>
                  <p className="text-sm text-gray-600">{duration}</p>
                </div>
              </div>
              <div className="col-span-8 flex flex-col gap-4">
                <div>
                  <p className="text-base font-medium mb-1">{schoolName}</p>
                  <p className="text-sm text-gray-600">{major}</p>
                  {location && (
                    <p className="text-sm text-gray-600">{location}</p>
                  )}
                </div>
              </div>
            </div>
          </DivWBorderWrapper>
        );
      })}
    </div>
  </SectionWrapper>
);

export default Education;
