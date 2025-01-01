import {
  LinkWrapper,
  ListWrapper,
  SectionHeading,
  SectionWrapper,
} from "@/components/common";
import { socials } from "@/constants/Social";
import { ISocial } from "@/interface/Social";

const Social = () => (
  <SectionWrapper>
    <SectionHeading heading="Socials" fontColor="#0a0a0a" />
    <ListWrapper>
      {socials.map(({ label, displayKey, displayValue, href }: ISocial) => (
        <li key={`social-${label}`}>
          <>
            {displayKey}
            <LinkWrapper href={href}>{displayValue}</LinkWrapper>
          </>
        </li>
      ))}
    </ListWrapper>
  </SectionWrapper>
);

export default Social;
