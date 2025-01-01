import { PageName } from "@/components/common";
import Layout from "@/components/Layout";
import InvitationContent from "./InvitationContent";
import Profile from "@/components/common/Profile";

const StandingInvitation = () => {
  return (
    <Layout>
      <Profile src="/assets/png/display-picture.png" />
      <InvitationContent />
    </Layout>
  );
};

export default StandingInvitation;
