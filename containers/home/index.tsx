import Layout from "@/components/Layout";
import Profile from "./Profile";
import AboutMe from "./AboutMe";
import Social from "./Social";
import Experience from "./Experience";
import { experiencesItems } from "@/constants/experience";
import Education from "./Education";
import { educationItems } from "@/constants/education";

const Home = () => {
  return (
    <Layout>
      <Profile src="/assets/png/display-picture.png" />
      <AboutMe />
      <Education educations={educationItems} />
      <Experience experiences={experiencesItems} />
      <Social />
    </Layout>
  );
};

export default Home;
