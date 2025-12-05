"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLeadForm } from "@src/context/LeadFormContext";
import { OurClients } from "../home";
import { Testimonial } from "../common";
import ServiceCTA from "../services/ServiceCTA";
import ServiceFAQ from "../services/ServiceFAQ";

const AboutPage = () => {
  const { openModal } = useLeadForm();

  // Company values/strengths data
  const companyValues = [
    {
      id: 1,
      title: "Creative Excellence",
      description: "We push boundaries and deliver designs that not only look stunning but also solve real business problems.",
      icon: "mdi:palette",
    },
    {
      id: 2,
      title: "Client-Centric Approach",
      description: "Your success is our success. We work as an extension of your team, understanding your goals deeply.",
      icon: "mdi:account-heart",
    },
    {
      id: 3,
      title: "Result-Driven Mindset",
      description: "Every project we deliver is measured against real business outcomes, not just aesthetics.",
      icon: "mdi:chart-line",
    },
    {
      id: 4,
      title: "Transparent Communication",
      description: "No surprises, no hidden costs. We keep you informed at every step of the journey.",
      icon: "mdi:message-text",
    },
  ];

  // Our process data
  const ourProcess = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into understanding your business, goals, and target audience to create a strategic foundation.",
    },
    {
      step: "02",
      title: "Strategy",
      description: "We develop a comprehensive plan that aligns with your objectives and market positioning.",
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Our team brings ideas to life with cutting-edge design and robust development practices.",
    },
    {
      step: "04",
      title: "Launch & Optimize",
      description: "We ensure smooth deployment and continuously optimize for better performance and results.",
    },
  ];

  // Why choose us reasons
  const whyChooseUs = [
    {
      id: 1,
      title: "Proven Track Record",
      description: "With 50+ successful projects and 100% client retention, we've built a reputation for delivering exceptional results that drive real business growth.",
      icon: "mdi:trophy",
    },
    {
      id: 2,
      title: "Full-Service Capabilities",
      description: "From branding to development, marketing to strategy—we're your one-stop solution, eliminating the need to coordinate multiple agencies.",
      icon: "mdi:package-variant",
    },
    {
      id: 3,
      title: "Agile & Flexible",
      description: "We adapt to your timeline and requirements, whether you're a startup or an established business looking to scale.",
      icon: "mdi:lightning-bolt",
    },
    {
      id: 4,
      title: "Industry Expertise",
      description: "We've worked across diverse industries—from healthcare to fintech, e-commerce to SaaS—bringing relevant insights to every project.",
      icon: "mdi:domain",
    },
    {
      id: 5,
      title: "Modern Technology Stack",
      description: "We use the latest tools and technologies to build scalable, future-proof solutions that grow with your business.",
      icon: "mdi:code-tags",
    },
    {
      id: 6,
      title: "Dedicated Support",
      description: "Our relationship doesn't end at launch. We provide ongoing support and optimization to ensure your continued success.",
      icon: "mdi:headset",
    },
  ];

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "Where is Webfudge based?",
      answer: "Webfudge is a creative digital agency based in India. We work with clients globally, providing remote and on-site services as needed.",
    },
    {
      id: 2,
      question: "What industries do you work with?",
      answer: "We've successfully worked across diverse industries including healthcare, fintech, e-commerce, SaaS, education, real estate, and more. Our adaptable approach allows us to serve businesses in any sector.",
    },
    {
      id: 3,
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while comprehensive branding and development projects can take 8-12 weeks. We provide detailed timelines during the discovery phase.",
    },
    {
      id: 4,
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes! We offer maintenance packages and ongoing support services. Many of our clients continue working with us for updates, optimizations, and new features. We believe in building long-term partnerships.",
    },
    {
      id: 5,
      question: "Can you work with our existing team?",
      answer: "Absolutely! We excel at collaborating with in-house teams. We can integrate seamlessly with your existing workflows, tools, and processes, acting as an extension of your team.",
    },
    {
      id: 6,
      question: "What makes Webfudge different from other agencies?",
      answer: "Our combination of creative excellence, technical expertise, and result-driven mindset sets us apart. We're not just designers or developers—we're strategic partners focused on your business success. Our 100% client retention rate speaks to our commitment to delivering value.",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <motion.div
        className="relative md:mt-[80px] mt-[50px] mb-16"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col gap-4 md:gap-6">
          <motion.h1
            className="md:text-[5vw] text-[8vw] tracking-tighter uppercase font-[BelfastMedium] dark:text-white text-main-dark leading-tight"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            WE CREATE DIGITAL IMPACT
          </motion.h1>
          
          <motion.p
            className="font-Poppins md:text-[1.5vw] text-lg text-gray dark:text-gray-300 max-w-4xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Webfudge is a creative digital agency based in India, built with a simple goal to help brands stand out online. Since 2022, we've been turning ideas into real digital experiences that not only look great but also deliver results.
          </motion.p>
          
          <motion.p
            className="font-Poppins md:text-[1.2vw] text-base text-gray dark:text-gray-400 max-w-4xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            From building stunning websites to designing strong brand identities and running smart digital strategies, we do it all with passion, precision, and purpose.
          </motion.p>

          <motion.div
            className="mt-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <button
              onClick={openModal}
              className="bg-[#FFEB3B] hover:bg-[#FFD700] text-black font-[BelfastMedium] font-bold px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl transition-colors uppercase text-sm md:text-base"
            >
              LET'S WORK TOGETHER
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="md:my-16 my-10 grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7 }}
      >
        <div className="text-center">
          <div className="font-[BelfastMedium] text-3xl md:text-4xl font-bold text-primary mb-2">
            20+
          </div>
          <div className="font-Poppins text-gray dark:text-gray-400 text-sm md:text-base">
            Happy Clients
          </div>
        </div>
        <div className="text-center">
          <div className="font-[BelfastMedium] text-3xl md:text-4xl font-bold text-primary mb-2">
            100%
          </div>
          <div className="font-Poppins text-gray dark:text-gray-400 text-sm md:text-base">
            Client Retention
          </div>
        </div>
        <div className="text-center">
          <div className="font-[BelfastMedium] text-3xl md:text-4xl font-bold text-primary mb-2">
            3+
          </div>
          <div className="font-Poppins text-gray dark:text-gray-400 text-sm md:text-base">
            Years Experience
          </div>
        </div>
        <div className="text-center">
          <div className="font-[BelfastMedium] text-3xl md:text-4xl font-bold text-primary mb-2">
            50+
          </div>
          <div className="font-Poppins text-gray dark:text-gray-400 text-sm md:text-base">
            Projects Delivered
          </div>
        </div>
      </motion.div>

      {/* About Us Section */}
      <motion.div
        className="md:my-20 my-12"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="rounded-3xl md:rounded-[40px] p-8 md:p-12 bg-white dark:bg-dark-gray">
          <div className="md:flex items-center justify-between gap-12">
            <motion.div
              className="md:w-1/2"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="md:text-[4vw] text-[6vw] tracking-tighter uppercase font-[BelfastMedium] mb-6 dark:text-white text-main-dark">
                About <span className="text-primary">Webfudge</span>
              </h2>
              <p className="font-Poppins md:text-lg text-base text-gray dark:text-gray-300 leading-relaxed mb-4">
                Webfudge is a creative digital agency based in India, built with a simple goal to help brands stand out online.
              </p>
              <p className="font-Poppins md:text-lg text-base text-gray dark:text-gray-300 leading-relaxed mb-4">
                Since 2022, we have been turning ideas into real digital experiences that not only look great but also deliver results. From building stunning websites to designing strong brand identities and running smart digital strategies, we do it all with passion, precision, and purpose.
              </p>
              <p className="font-Poppins md:text-lg text-base text-gray dark:text-gray-300 leading-relaxed">
                We've successfully delivered over 50 projects across industries from local businesses to growing startups. Our clients trust us not just for our skills, but for our dedication, honest communication, and result-driven mindset.
              </p>
            </motion.div>

            <motion.div
              className="md:w-1/2 mt-8 md:mt-0"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/ClientLogos/Frame.png"
                width={600}
                height={400}
                alt="About Webfudge"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Company Values Section (Similar to Challenges) */}
      <CompanyValuesSection values={companyValues} />

      {/* CTA Section 1 */}
      <motion.div
        className="md:my-12 my-8"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <ServiceCTA
          variant="primary"
          description="Starting from scratch or refreshing an existing brand? We can help."
          ctaText="BOOK A FREE CALL"
          ctaLink="https://calendly.com/webfudgeagency"
          icon="mdi:refresh"
        />
      </motion.div>

      {/* Our Process Section */}
      <OurProcessSection process={ourProcess} />

      {/* Why Choose Us Section (Similar to Reasons) */}
      <WhyChooseUsSection reasons={whyChooseUs} />

      {/* Clients Section */}
      <OurClients />

      {/* Testimonials Section */}
      <Testimonial />

      {/* FAQ Section */}
      <ServiceFAQ faqs={faqs} />

      {/* Final CTA Section */}
      <motion.div
        className="md:my-12 my-8"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <ServiceCTA
          variant="primary"
          title="Ready to create digital impact together?"
          description="Schedule a free consultation with our team and discover how we can help transform your brand and accelerate your growth."
          ctaText="BOOK A FREE CALL"
          ctaLink="https://calendly.com/webfudgeagency"
        />
      </motion.div>
    </div>
  );
};

// Company Values Component (Similar to ServiceChallenges)
const CompanyValuesSection = ({ values }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, values.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <motion.div
      ref={ref}
      className="md:my-20 my-12 relative"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.7 }}
    >
      <div className="rounded-3xl md:rounded-[40px] p-8 md:p-12 relative overflow-hidden">
        <motion.h2
          className="md:text-[4vw] text-[6vw] tracking-tighter uppercase font-[BelfastMedium] mb-12 text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-white bg-clip-text text-transparent">
            OUR CORE
          </span>{" "}
          <span className="text-white">VALUES</span>
        </motion.h2>

        <div className="relative w-full overflow-hidden">
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{
                x: `-${currentIndex * (100 / itemsPerView)}%`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.id}
                  className="flex-shrink-0"
                  style={{
                    width: `${100 / itemsPerView}%`,
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="bg-transparent border-2 border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6 h-full flex flex-col relative group hover:border-white/40 transition-all duration-300 w-full">
                    <div className="mb-4 md:mb-6 flex justify-center">
                      <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
                        <Icon
                          icon={value.icon || "mdi:star"}
                          className="text-white"
                          style={{ fontSize: "clamp(2.5rem, 4vw, 5rem)" }}
                        />
                      </div>
                    </div>

                    <h3 className="font-[BelfastMedium] text-base md:text-lg font-bold text-white mb-3 md:mb-4 text-center line-clamp-2">
                      {value.title}
                    </h3>

                    <p className="font-Poppins text-white/80 text-xs md:text-sm leading-relaxed text-center flex-grow line-clamp-4 md:line-clamp-5">
                      {value.description}
                    </p>

                    <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
                      <Icon
                        icon="mdi:plus"
                        className="text-white text-sm md:text-lg"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {values.length > itemsPerView && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center transition-all duration-300 ${
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:border-white hover:bg-white/10 cursor-pointer"
              }`}
            >
              <Icon icon="mdi:chevron-left" className="text-white text-xl" />
            </button>

            <div className="flex gap-2 items-center">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1 transition-all duration-300 ${
                    currentIndex === index
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={`w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center transition-all duration-300 ${
                currentIndex >= maxIndex
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:border-white hover:bg-white/10 cursor-pointer"
              }`}
            >
              <Icon icon="mdi:chevron-right" className="text-white text-xl" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Our Process Component (Similar to ServiceProcess)
const OurProcessSection = ({ process }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const stepGradients = [
    "from-slate-400 to-blue-500",
    "from-blue-400 to-emerald-400",
    "from-emerald-400 to-lime-300",
    "from-lime-300 to-amber-300",
  ];

  return (
    <motion.div
      ref={ref}
      className="md:my-20 my-12 relative"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.7 }}
    >
      <div className="rounded-3xl md:rounded-[40px] p-8 md:p-12 relative overflow-hidden">
        <motion.div
          className="mb-8 md:mb-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="md:text-[4vw] text-[6vw] tracking-tighter uppercase font-[BelfastMedium] mb-4 text-white">
            <span className="text-white">OUR INNOVATIVE</span>{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              WORK PROCESS
            </span>
          </h2>
          <p className="font-Poppins text-white/80 md:text-lg text-base max-w-3xl leading-relaxed">
            From start to finish, our process transforms your ideas into impactful digital solutions that achieve your business goals and set your brand apart in the market.
          </p>
        </motion.div>

        <div className="relative mt-12 md:mt-16">
          <div className="flex flex-col md:flex-row items-start md:items-stretch gap-0 relative">
            {process.map((step, index) => {
              const isLast = index === process.length - 1;
              const gradient = stepGradients[index] || stepGradients[0];

              return (
                <React.Fragment key={step.step}>
                  <motion.div
                    className="flex flex-col items-center flex-1 relative border-r border-white/10 last:border-r-0"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  >
                    <div className="mb-4 md:mb-6">
                      <span className="text-white font-[BelfastMedium] font-bold md:text-lg text-sm uppercase">
                        STEP {step.step}
                      </span>
                    </div>

                    <div className="mb-6 md:mb-8 text-center px-3 md:px-4">
                      <h3 className="font-[BelfastMedium] text-white font-bold md:text-lg text-sm">
                        {step.title}
                      </h3>
                    </div>

                    <div className="relative w-full px-3 md:px-4 group">
                      <div
                        className={`h-10 md:h-10 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center relative shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105`}
                      >
                        <Icon
                          icon="mdi:plus"
                          className="text-white text-3xl md:text-4xl"
                        />
                      </div>

                      <div className="mt-4 md:mt-6 hidden md:block px-3 md:px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0">
                        <p className="font-Poppins text-white/70 text-sm leading-relaxed text-center">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>

          <div className="md:hidden mt-6 space-y-6">
            {process.map((step, index) => {
              if (index === process.length - 1) return null;
              return (
                <div
                  key={`mobile-line-${step.step}`}
                  className="h-0.5 bg-white/20 w-full"
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Why Choose Us Component (Similar to ServiceReasons)
const WhyChooseUsSection = ({ reasons }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      className="md:my-20 my-12"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        className="md:text-[4vw] text-[7vw] tracking-tighter uppercase font-[BelfastMedium] mb-12 dark:text-white text-main-dark"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        6 Reasons to Work With Us
      </motion.h2>

      <div className="rounded-3xl md:rounded-[40px] p-6 md:p-8">
        <div className="grid md:grid-cols-2">
          {reasons.map((reason, index) => {
            const isOdd = (index + 1) % 2 === 1;
            const isInFirstTwoRows = index < 4;

            return (
              <motion.div
                key={reason.id}
                className={`flex flex-col gap-4 p-6 md:p-8 ${
                  isInFirstTwoRows ? "border-b border-white/10" : ""
                } ${isOdd ? "md:border-r border-white/10" : ""}`}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {reason.icon && (
                  <div className="mb-2">
                    <Icon
                      icon={reason.icon}
                      className="text-white text-4xl md:text-5xl"
                    />
                  </div>
                )}
                <h3 className="font-[BelfastMedium] text-xl md:text-2xl font-bold text-white">
                  {reason.title}
                </h3>
                <p className="font-Poppins text-white/90 md:text-base text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
