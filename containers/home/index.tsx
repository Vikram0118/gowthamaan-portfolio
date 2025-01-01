import Layout from "@/components/Layout";
import Profile from "@/components/common/Profile";
import AboutMe from "./AboutMe";
import Social from "@/components/common/Social";

const Home = () => {
  return (
    <Layout>
      <Profile src="/assets/png/display-picture.png" />
      <AboutMe />
      <Social />
    </Layout>
  );
};

export default Home;
