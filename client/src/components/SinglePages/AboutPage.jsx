"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { teamMembers } from "@src/data/data";
import { OurClients } from "../home";
import { Testimonial } from "../common";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="relative md:h-[550px] h-[400px] mt-[20px]"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="w-full md:flex-row flex flex-col md:justify-between z-50 absolute overflow-hidden">
          <div className="w-full">
            <motion.h1
              className="md:!text-[8vw] !text-[15vw] dark:text-white md:leading-[120px] leading-[60px] tracking-tight py-2 text-center mt-16"
              variants={{
                hidden: { opacity: 1, y: 200 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              WE CREATE
              <br />
              <span className="text-primary">DIGITAL IMPACT</span>
            </motion.h1>
          </div>
        </div>

        <div className="gradient-bg !opacity-70">
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            {/* <div className="g5"></div> */}
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <section className="py-20 bg-dark-light z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="md:flex items-center justify-between gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-[BelfastMedium] mb-8">
                About <span className="text-primary">Us</span>
              </h2>
              <p className="font-[BelfastMedium] text-lg md:text-xl text-white/80 leading-relaxed mb-6">
                Webfudge is a creative digital agency based in India, built with
                a simple goal to help brands stand out online.
                <br />
                <br />
                Since 2022, we have been turning ideas into real digital
                experiences that not only look great but also deliver results.
                From building stunning websites to designing strong brand
                identities and running smart digital strategies, we do it all
                with passion, precision, and purpose. <br />
                <br />
                We’ve successfully delivered over 50 projects across industries
                from local businesses to growing startups. Our clients trust us
                not just for our skills, but for our dedication, honest
                communication, and result-driven mindset. <br />
                <br />
                At Webfudge, we believe great design and technology should go
                hand in hand. That’s why we work closely with our clients to
                understand their goals, solve problems creatively, and build
                digital solutions that connect with real people.
                <br />
                <br /> Whether you're looking to launch a new brand, revamp your
                website, or grow your presence online we are here to make it
                happen, the Webfudge way.
              </p>
            </motion.div>

            <motion.div
              className="md:w-1/2 mt-8 md:mt-0 h-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/ClientLogos/Frame.png"
                width={600}
                height={400}
                alt="About Webfudge"
                className="rounded-2xl shadow-lg h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Updated Numbers */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=" p-8 rounded-2xl text-center"
          >
            <h3 className="text-7xl font-bold text-primary mb-2">20+</h3>
            <p className="font-Poppins text-3xl">
              Happy <br /> Clients
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=" p-8 rounded-2xl text-center"
          >
            <h3 className="text-7xl font-bold text-primary mb-2">100%</h3>
            <p className="font-Poppins text-3xl">
              Client <br /> Retention
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=" p-8 rounded-2xl text-center"
          >
            <h3 className="text-7xl font-bold text-primary mb-2">3+</h3>
            <p className="font-Poppins text-3xl">
              Years <br /> Experience
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=" p-8 rounded-2xl text-center"
          >
            <h3 className="text-7xl font-bold text-primary mb-2">50+</h3>
            <p className="font-Poppins text-3xl">
              Projects <br /> Delivered
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-20 bg-dark-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-[BelfastMedium] text-center mb-16">
            What We <span className="text-primary">Do</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-dark p-8 rounded-2xl"
            >
              <Icon
                icon="fluent:design-ideas-24-filled"
                className="text-5xl text-primary mb-4"
              />
              <h3 className="text-2xl font-bold mb-3">Branding & Design</h3>
              <p className="font-Poppins text-gray-400">
                Logo Design • Brand Identity • Graphic Design • Marketing
                Materials
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-dark p-8 rounded-2xl"
            >
              <Icon
                icon="fluent:code-24-filled"
                className="text-5xl text-primary mb-4"
              />
              <h3 className="text-2xl font-bold mb-3">Web Development</h3>
              <p className="font-Poppins text-gray-400">
                Custom Websites • E-commerce • Web Applications • CMS
                Integration
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-dark p-8 rounded-2xl"
            >
              <Icon
                icon="fluent:document-24-filled"
                className="text-5xl text-primary mb-4"
              />
              <h3 className="text-2xl font-bold mb-3">Business Growth</h3>
              <p className="font-Poppins text-gray-400">
                Pitch Decks • Market Research • Business Strategy • Growth
                Planning
              </p>
            </motion.div>

            {/* Add 3 more service boxes */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-dark p-8 rounded-2xl"
            >
              <Icon icon="el:website" className="text-5xl text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">UI/UX Design</h3>
              <p className="font-Poppins text-gray-400">
                User Interface • User Experience • Wireframing • Prototyping
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-dark p-8 rounded-2xl"
            >
              <Icon
                icon="fluent:megaphone-24-filled"
                className="text-5xl text-primary mb-4"
              />
              <h3 className="text-2xl font-bold mb-3">Digital Marketing</h3>
              <p className="font-Poppins text-gray-400">
                Social Media • Content Strategy • SEO • Brand Awareness
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-dark p-8 rounded-2xl"
            >
              <Icon
                icon="fluent:paint-brush-24-filled"
                className="text-5xl text-primary mb-4"
              />
              <h3 className="text-2xl font-bold mb-3">Creative Solutions</h3>
              <p className="font-Poppins text-gray-400">
                Custom Graphics • Motion Design • Illustrations • Visual Content
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section with Hover Effects */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-[BelfastMedium] text-center mb-16">
            Meet Our <span className="text-primary">Creative Team</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.slice(0, 4).map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-300">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials & Clients */}
      <OurClients />
      <Testimonial />
    </div>
  );
};

export default AboutPage;
