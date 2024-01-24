import { ContactForm, Faqs } from "@src/components/contact";

const Contact = () => {
  return (
    <>
      <div className="px-[3%] md:px-[6%]" style={{ paddingTop: "80px" }}>
        <img
          src="/images/universe_2.png"
          alt="contact"
          className="absolute left-0 top-0 object-cover"
        />
        <div className="w-full relative">
          <ContactForm />
          <Faqs />
        </div>
      </div>
    </>
  );
};

export default Contact;
