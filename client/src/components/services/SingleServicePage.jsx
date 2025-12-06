"use client";

import React from "react";
import ServicesHero from "./ServicesHero";
import ServiceTrustedBy from "./ServiceTrustedBy";
import ServiceProjects from "./ServiceProjects";
import ServiceChallenges from "./ServiceChallenges";
import ServiceProcess from "./ServiceProcess";
import ServiceReasons from "./ServiceReasons";
import ServiceProjectsCarousel from "./ServiceProjectsCarousel";
import ServiceFAQ from "./ServiceFAQ";
import ServiceCTA from "./ServiceCTA";
import { Testimonial } from "@src/components/common";
import { motion } from "framer-motion";

const SingleServicePage = ({ service }) => {
  if (!service) return null;

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <ServicesHero hero={service.hero} />

      {/* Trust Indicators / Stats Section */}
      {/* {service.stats && (
        <motion.div
          className="md:my-16 my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-[3%]"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          {service.stats.projects && (
            <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
              <div className="font-[BelfastMedium] text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
                {service.stats.projects}
              </div>
              <div className="font-Poppins text-gray dark:text-gray-400 text-sm md:text-base">
                Products turned to success stories
              </div>
            </div>
          )}
          {service.stats.users && (
            <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
              <div className="font-[BelfastMedium] text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
                {service.stats.users}
              </div>
              <div className="font-Poppins text-gray dark:text-gray-400 text-sm md:text-base">
                Active users on platforms
              </div>
            </div>
          )}
          {service.stats.fundsRaised && (
            <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
              <div className="font-[BelfastMedium] text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
                {service.stats.fundsRaised}
              </div>
              <div className="font-Poppins text-gray dark:text-gray-400 text-sm md:text-base">
                Total funds raised by clients
              </div>
            </div>
          )}
          {service.stats.launchSpeed && (
            <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
              <div className="font-[BelfastMedium] text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
                {service.stats.launchSpeed}
              </div>
              <div className="font-Poppins text-gray dark:text-gray-400 text-sm md:text-base">
                Faster launch
              </div>
            </div>
          )}
          {service.stats.costReduction && (
            <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
              <div className="font-[BelfastMedium] text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
                {service.stats.costReduction}
              </div>
              <div className="font-Poppins text-gray dark:text-gray-400 text-sm md:text-base">
                Lower design costs
              </div>
            </div>
          )}
          {service.stats.scalingEfficiency && (
            <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
              <div className="font-[BelfastMedium] text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
                {service.stats.scalingEfficiency}
              </div>
              <div className="font-Poppins text-gray dark:text-gray-400 text-sm md:text-base">
                More efficient scaling
              </div>
            </div>
          )}
        </motion.div>
      )} */}

      {/* Service Projects Section */}
      <ServiceProjects service={service} />

      {/* Challenges Section */}
      {service.challenges && service.challenges.length > 0 && (
        <ServiceChallenges challenges={service.challenges} />
      )}

      {/* CTA Section 1 */}
      <motion.div
        className="md:my-12 my-8"
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
          description="Starting from scratch or refreshing an existing product? We can help."
          ctaText="BOOK A FREE CALL"
          ctaLink="https://calendly.com/webfudgeagency"
        />
      </motion.div>

      {/* Process Section */}
      {service.process && service.process.length > 0 && (
        <ServiceProcess
          process={service.process}
          serviceTitle={service.title?.toUpperCase() || "UI/UX DESIGN"}
        />
      )}

      {/* Reasons Section */}
      {service.reasons && service.reasons.length > 0 && (
        <ServiceReasons reasons={service.reasons} />
      )}

      {/* Projects Carousel Section */}
      <ServiceProjectsCarousel service={service} />

      {/* Trusted By Section */}
      <ServiceTrustedBy />

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <ServiceFAQ faqs={service.faqs} />
      )}

      {/* Final CTA Section */}
      <motion.div
        className="md:my-12 my-8"
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
          title="Ready to launch faster and convert more users?"
          description="Schedule a free 30-minute consultation with our UX experts and discover how we can help you accelerate growth — without compromising on design quality."
          ctaText="BOOK A FREE CALL"
          ctaLink="https://calendly.com/webfudgeagency"
        />
      </motion.div>
    </div>
  );
};

export default SingleServicePage;
