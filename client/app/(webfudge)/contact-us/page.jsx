import { InfiniteMarquee } from "@src/components/common";
import { ContactForm, Faqs } from "@src/components/contact";

export const metadata = {
  title: "Contact",
  description:
    "Drop Webfudge A Message, We're excited to work with you soon! Please drop an email with your details & requirements to contact@webfudgeagency.com.",
};

const Contact = () => {
  return (
    <>
      <div className="px-[3%] md:px-[6%]" style={{ paddingTop: "80px" }}>
        <img
          src="/images/universe_2.png"
          alt="contact"
          className="h-screen w-full absolute left-0 top-0 object-cover"
        />
        <div className="w-full relative">
          <ContactForm />
          <InfiniteMarquee txt="Get Personalize Project Quote" url="/quote" />
          <Faqs />
        </div>
      </div>
    </>
  );
};

export default Contact;
