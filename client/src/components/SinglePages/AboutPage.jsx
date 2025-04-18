import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Briefcase,
  Building,
  ChevronRight,
  Clock,
  Globe,
  Heart,
  Lightbulb,
  MessageSquare,
  Users,
} from "lucide-react";
import { teamMembers } from "@src/data/data";
import { OurClients } from "../home";
import { Testimonial } from "../common";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80 text-white overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              We Create Digital Experiences That Matter
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              A creative agency focused on bringing your ideas to life with
              passion, innovation, and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href="/our-work" className="!opacity-100">
                <button className="btn bg-white text-primary hover:bg-white/90 !py-4 flex items-center">
                  Our Work
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
              <Link href="/contact-us" className="!opacity-100">
                <button
                  size="lg"
                  variant="outline"
                  className="btn border border-white text-white hover:bg-white/10 !py-4"
                >
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background z-10"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-primary font-medium">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                From a Small Studio to an Award-Winning Agency
              </h2>
              <p className="text-muted-foreground text-lg font-Poppins">
                Founded in 2022, we started as a small team of passionate
                designers and developers with a shared vision: to create digital
                experiences that leave a lasting impression.
              </p>
              <p className="text-muted-foreground font-Poppins">
                Over the years, we've grown into a full-service creative agency,
                working with clients from startups to Fortune 500 companies. Our
                journey has been defined by our commitment to excellence,
                innovation, and the relationships we've built along the way.
              </p>
              <div className="pt-4">
                <Link
                  href="/our-work"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Explore our journey
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/ClientLogos/Frame.png"
                alt="webfudge"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-dark-light ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-primary font-medium">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter ">
              The Principles That Guide Our Work
            </h2>
            <p className="text-muted-foreground text-lg font-Poppins">
              Our values are the foundation of everything we do, shaping our
              approach to design, development, and client relationships.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-dark p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Passion</h3>
              <p className="text-muted-foreground font-Poppins">
                We're deeply passionate about what we do. This passion drives us
                to go above and beyond for every project.
              </p>
            </div>

            <div className="bg-dark p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground font-Poppins">
                We constantly push boundaries and explore new ideas to deliver
                cutting-edge solutions.
              </p>
            </div>

            <div className="bg-dark p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-muted-foreground font-Poppins">
                We believe in the power of teamwork, both within our agency and
                with our clients.
              </p>
            </div>

            <div className="bg-dark p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground font-Poppins">
                We strive for excellence in everything we do, from the smallest
                details to the biggest ideas.
              </p>
            </div>

            <div className="bg-dark p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-muted-foreground font-Poppins">
                We operate with honesty, transparency, and ethical practices in
                all our relationships.
              </p>
            </div>

            <div className="bg-dark p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-muted-foreground font-Poppins">
                We deliver on our promises, meeting deadlines and exceeding
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-primary font-medium">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Meet the Creative Minds Behind Our Work
            </h2>
            <p className="text-muted-foreground text-lg font-Poppins">
              Our diverse team brings together expertise across design,
              development, strategy, and more.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center btn bg-dark-light !py-5 w-[25%] mx-auto">
            <Link className="w-full h-full" href="/team">
              View Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-dark-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-primary font-medium">
                Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Comprehensive Creative Solutions
              </h2>
              <p className="text-muted-foreground text-lg font-Poppins">
                We offer a full range of creative services to help your brand
                stand out and connect with your audience.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Brand Strategy & Identity
                    </h3>
                    <p className="text-muted-foreground font-Poppins">
                      We develop comprehensive brand strategies and visual
                      identities that resonate with your target audience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Web Design & Development
                    </h3>
                    <p className="text-muted-foreground font-Poppins">
                      We create beautiful, functional websites that deliver
                      exceptional user experiences.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Digital Marketing
                    </h3>
                    <p className="text-muted-foreground font-Poppins">
                      We help you reach and engage your audience through
                      strategic digital marketing campaigns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Explore all services
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1591788788660-5a345f363d7a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our creative services"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <OurClients />
          <Testimonial />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
