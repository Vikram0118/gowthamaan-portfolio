import {
  LinkWrapper,
  ParagraphWrapper,
  SectionWrapper,
} from "@/components/common";

const AboutMe = () => (
  <SectionWrapper>
    <ParagraphWrapper>
      <p>
        I'm Gowthamaan, currently pursuing my MS at IIT Madras under the
        guidance of Prof. Ganapathy Krishnamurthi focusing on Medical Image
        Analysis with Deep Learning. Alongside my studies, I work as a Software
        Engineer at Aerobiosys, applying my skills to develop respiratory
        therapetuic devices.
      </p>
      <p style={{ marginTop: "20px" }}>
        I’ve always had a passion for writing and software development, and I’ve
        created this space to share some of the things I’ve learned—hopefully,
        you’ll find them useful!
      </p>
      <div style={{ marginTop: "20px" }}>
        I’m always happy to get email and meet new people - see{" "}
        <LinkWrapper href="/standing-invitation" target="_self">
          Standing Invitation
        </LinkWrapper>
      </div>
    </ParagraphWrapper>
  </SectionWrapper>
);

export default AboutMe;
