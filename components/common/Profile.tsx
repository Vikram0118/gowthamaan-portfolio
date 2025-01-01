import Image from "next/image";
import { PageName, PageSubHeading } from "@/components/common";

const Profile: React.FC<{
  src: string;
}> = ({ src }) => (
  <div className="flex flex-row items-center gap-5 mb-5">
    <Image
      src={src}
      alt="display-picture"
      width="100"
      height="100"
      priority
      className="object-cover rounded-full border-solid border-white hue-rotate-15 group-hover:hue-rotate-0 transition-opacity duration-1000"
    />

    <div className="flex flex-col justify-center gap-0 leading-none">
      <PageName label="Gowthamaan Palani" />
      <PageSubHeading description="Machine Learning Researcher" />
    </div>
  </div>
);

export default Profile;
