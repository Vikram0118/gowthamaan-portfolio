import Head from "next/head";
import Footer from "./Footer";
import Menus from "./Menu";

const Layout: React.FC<{
  children: React.ReactNode;
  title: string;
  sectionProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
}> = ({ children, title, sectionProps }) => (
  <>
    <Head>
      <title>{`${title} | Gowthamaan Palani`}</title>
    </Head>
    <div className={` bg-white text-black`} aria-label="main-content">
      <main
        className="container mx-auto py-10 pb-20 max-w-2xl w-full min-h-fit flex flex-col gap-10 px-4 md:px-0 relative"
        {...sectionProps}
      >
        {children}
      </main>

      <Footer />
    </div>
    <Menus />
  </>
);

export default Layout;
