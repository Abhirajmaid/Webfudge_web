import {
  About,
  Hero,
  OurClients,
  OurProject,
  OurServices,
  ShowSection,
} from "@src/components/home";
import { InfiniteMarquee } from "@src/components/common";

export const metadata = {
  title: "Home",
  description:
    "Build Brand Fast! Webfudge is Leading creative, media, and technology-driven digital agency based in Pune. Specializing in brand strategy and marketing, Web-design, transforming ideas into captivating online experiences.",
  keywords: [
    "Webfudge",
    "Webfudge Agency",
    "Entreprenure",
    "Social Media Management",
  ],
};

const Home = () => {
  return (
    <>
      <div className="md:px-[6%]" style={{ paddingTop: "80px" }}>
        <Hero />
        <ShowSection />
        <InfiniteMarquee txt="Let's Discuss" url="/contact-us" />
        <OurServices />
        <About />
        <OurProject />
        <OurClients />
      </div>
    </>
  );
};

export default Home;
