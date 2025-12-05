import {
  About,
  Hero,
  OurClients,
  OurProject,
  OurServices,
  ShowSection,
} from "@src/components/home";
import { InfiniteMarquee, Testimonial } from "@src/components/common";
import SoftwareProjectsCarousel from "@src/components/projects/SoftwareProjectsCarousel";

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
      <div className="md:px-[6%] px-[0]" style={{ paddingTop: "100px" }}>
        <Hero />
        <ShowSection />
        <InfiniteMarquee txt="Let's Discuss" url="/contact-us" />
      </div>

      <div className="md:px-[6%] px-[3%]" style={{ paddingTop: "50px" }}>
        <OurServices />
        {/* <About /> */}
        <SoftwareProjectsCarousel />
        <OurProject />
        <OurClients />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
