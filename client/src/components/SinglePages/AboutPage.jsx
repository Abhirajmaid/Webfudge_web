"use client";
import React from "react";
import { motion } from "framer-motion";
import { Testimonial } from "../common";
import ServicesHero from "../services/ServicesHero";
import ServiceTrustedBy from "../services/ServiceTrustedBy";
import ServiceChallenges from "../services/ServiceChallenges";
import ServiceProcess from "../services/ServiceProcess";
import ServiceReasons from "../services/ServiceReasons";
import ServiceProjectsCarousel from "../services/ServiceProjectsCarousel";
import ServiceCTA from "../services/ServiceCTA";
import ServiceFAQ from "../services/ServiceFAQ";

const AboutPage = () => {
  // Hero data for ServicesHero component
  const heroData = {
    headline: "WE CREATE DIGITAL IMPACT",
    subheadline: "Webfudge is a creative digital agency based in India, built with a simple goal to help brands stand out online. Since 2022, we've been turning ideas into real digital experiences that not only look great but also deliver results.",
    supportingText: "From building stunning websites to designing strong brand identities and running smart digital strategies, we do it all with passion, precision, and purpose.",
    ctaText: "LET'S WORK TOGETHER",
  };

  // Company values/strengths data (for ServiceChallenges component)
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

  // Our process data (for ServiceProcess component)
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

  // Why choose us reasons (for ServiceReasons component)
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
      <ServicesHero hero={heroData} />

      {/* Stats Section */}
      <motion.div
        className="md:my-16 my-10 grid grid-cols-2 md:grid-cols-4 gap-6 px-[3%]"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7 }}
      >
        <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
          <div className="font-[BelfastMedium] text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
            20+
          </div>
          <div className="font-Poppins text-gray dark:text-gray-400 text-sm md:text-base">
            Happy Clients
          </div>
        </div>
        <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
          <div className="font-[BelfastMedium] text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
            100%
          </div>
          <div className="font-Poppins text-gray dark:text-gray-400 text-sm md:text-base">
            Client Retention
          </div>
        </div>
        <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
          <div className="font-[BelfastMedium] text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
            3+
          </div>
          <div className="font-Poppins text-gray dark:text-gray-400 text-sm md:text-base">
            Years Experience
          </div>
        </div>
        <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
          <div className="font-[BelfastMedium] text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
            50+
          </div>
          <div className="font-Poppins text-gray dark:text-gray-400 text-sm md:text-base">
            Projects Delivered
          </div>
        </div>
      </motion.div>

      {/* Company Values Section (Using ServiceChallenges component) */}
      <ServiceChallenges 
        challenges={companyValues}
        title="Our Core Values"
        description="The principles that guide everything we do. These values shape our approach to every project and define how we work with our clients."
      />

      {/* CTA Section 1 */}
      <motion.div
        className="md:my-12 my-8 px-[3%]"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7 }}
      >
        <ServiceCTA
          variant="primary"
          description="Starting from scratch or refreshing an existing brand? We can help."
          ctaText="BOOK A FREE CALL"
          ctaLink="https://calendly.com/webfudgeagency"
        />
      </motion.div>

      {/* Our Process Section (Using ServiceProcess component) */}
      <ServiceProcess
        process={ourProcess}
        serviceTitle="ABOUT WEBFUDGE"
      />

      {/* Why Choose Us Section (Using ServiceReasons component) */}
      <ServiceReasons reasons={whyChooseUs} />

      {/* Projects Carousel Section */}
      <ServiceProjectsCarousel service={{}} showAll={true} />

      {/* Trusted By Section */}
      <ServiceTrustedBy />

      {/* Testimonials Section */}
      <Testimonial />

      {/* FAQ Section */}
      <ServiceFAQ faqs={faqs} />

      {/* Final CTA Section */}
      <motion.div
        className="md:my-12 my-8 px-[3%]"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
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


export default AboutPage;
