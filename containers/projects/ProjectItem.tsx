import {
  DivWBorderWrapper,
  LinkWrapper,
  ListWrapper,
  Tag,
} from "@/components/common";
import { IProject } from "@/interface/projects";
import Image from "next/image";

interface IProjectItemProps {
  project: IProject;
}

const ProjectItem: React.FC<IProjectItemProps> = ({ project }) => {
  const { tags, tagBgColors, code, preview, title, description, thumbnail } =
    project;

  return (
    <DivWBorderWrapper>
      <div className="space-y-2">
        <p
          className="project-title text-base font-medium font-poppins"
          aria-label={title}
        >
          {title}
        </p>
        <div aria-label="links" className="space-x-4 text-[0.8125rem]">
          {code && (
            <LinkWrapper href={code} linkIcon>
              Code
            </LinkWrapper>
          )}
          {preview && (
            <LinkWrapper href={preview} linkIcon>
              Preview
            </LinkWrapper>
          )}
        </div>
        <div aria-label="tags" className="space-x-2 flex">
          {tags.map((tag, i) => (
            <Tag
              label={tag}
              tagProps={{
                style: {
                  backgroundColor: tagBgColors[i],
                },
              }}
              key={`proTag-${tag}`}
            />
          ))}
        </div>
        <div className="py-2">
          <ListWrapper>
            {description.map((item, index) => (
              <li key={`p${index}list-${index}`}>{item}</li>
            ))}
          </ListWrapper>
        </div>
      </div>
      {thumbnail && (
        <Image
          src={thumbnail}
          alt={title}
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-48 transition-opacity duration-1000"
          priority
        />
      )}
    </DivWBorderWrapper>
  );
};

export default ProjectItem;
