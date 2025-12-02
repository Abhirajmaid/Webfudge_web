"use client";

import Link from "next/link";

const ServicesDropdown = ({ subLinks }) => {
  // Group services by category
  const designServices = subLinks?.filter(
    (service) => service.category === "Design"
  );
  const developmentServices = subLinks?.filter(
    (service) => service.category === "Development"
  );

  return (
    <div className="!bg-dark-gray p-8 rounded-lg shadow-lg w-[600px] max-w-[90vw]">
      <div className="grid grid-cols-2 gap-8">
        {/* Design Services */}
        <div>
          <h3 className="text-primary font-[BelfastMedium] text-xl mb-4">
            Design Services
          </h3>
          <ul className="gap-3 flex flex-col">
            {designServices?.map(({ id, linkText, url }) => (
              <Link
                key={id}
                href={url}
                className="text-white opacity-80 hover:opacity-100 font-Poppins text-base transition-opacity"
              >
                {linkText}
              </Link>
            ))}
          </ul>
        </div>

        {/* Development Services */}
        <div>
          <h3 className="text-primary font-[BelfastMedium] text-xl mb-4">
            Development Services
          </h3>
          <ul className="gap-3 flex flex-col">
            {developmentServices?.map(({ id, linkText, url }) => (
              <Link
                key={id}
                href={url}
                className="text-white opacity-80 hover:opacity-100 font-Poppins text-base transition-opacity"
              >
                {linkText}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/* View All Services Link */}
      <div className="mt-6 pt-6 border-t border-white/20">
        <Link
          href="/services"
          className="text-primary font-[BelfastMedium] text-lg hover:opacity-80 transition-opacity inline-flex items-center gap-2"
        >
          View All Services
          <span>→</span>
        </Link>
      </div>
    </div>
  );
};

export default ServicesDropdown;
