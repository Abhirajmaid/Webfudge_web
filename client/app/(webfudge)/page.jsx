import {
  About,
  Hero,
  OurProject,
  OurServices,
  ShowSection,
} from "@src/components/home";
import { InfiniteMarquee } from "@src/components/common";

export const metadata = {
  title: "Webfudge - Home",
  description:
    "Build Brand Fast! Leading creative, media, and technology-driven digital agency based in Pune. Specializing in brand strategy and marketing, Web-design, transforming ideas into captivating online experiences.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: [
      {
        url: "./opengraph-image.png",
      },
    ],
  },
};

const Home = () => {
  return (
    <>
      <div className="md:px-[6%]" style={{ paddingTop: "80px" }}>
        <Hero />
        <ShowSection />
        <InfiniteMarquee />
        <OurServices />
        <About />
        <OurProject />
      </div>
    </>
  );
};

export default Home;
