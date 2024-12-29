import {
  ParagraphWrapper,
  SectionHeading,
  SectionWrapper,
} from "@/components/common";

const AboutMe = () => (
  <SectionWrapper>
    <SectionHeading heading="About Me" fontColor="#0a0a0a" />
    <ParagraphWrapper>
      <p>
        Machine Learning Researcher specializing in Computer Vision, with
        hands-on experience solving healthcare challenges. Currently pursuing
        Masters at IIT Madras, I combine my passion for AI research with
        software development expertise to build practical, impactful solutions.
      </p>
      <p style={{ marginTop: "20px" }}>
        I thrive on exploring new frontiers in technology and research. My
        commitment to continuous learning fuels my journey in developing
        cutting-edge AI solutions, always seeking to bridge the gap between
        theoretical advances and real-world impact.
      </p>
    </ParagraphWrapper>
  </SectionWrapper>
);

export default AboutMe;
