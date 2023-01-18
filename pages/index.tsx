import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Layout from "components/Layout";
import CTAMail from "components/CTAMail";
import Chip from "components/Chip";

const CardProject = () => {
  return (
    <div className="group flex w-full flex-col transition">
      <div className="relative h-[298px] md:h-[500px]">
        <div className="absolute z-10 hidden h-full w-full bg-white opacity-0 transition group-hover:opacity-50 group-hover:blur-sm md:block" />
        <img
          src="/home/Profil_pic.png"
          alt="project"
          className="absolute z-0 h-full w-full object-cover transition transition md:group-hover:blur-sm"
        />
        <div className="invisible absolute z-20 hidden p-8 transition group-hover:visible md:invisible md:flex md:flex-col">
          <div className="text5 mb-4">CLEAR FASHION</div>
          <div className="h3 mb-4">Illustration set for mobile app </div>
          <div>
            <Chip>Illustration</Chip>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:hidden">
        <div className="text5 py-4">CLEAR FASHION</div>
        <div className="h3 pb-4">Illustration set for mobile app </div>
        <div>
          <Chip>Illustration</Chip>
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const digitalAssets = [
    {
      title: "Illustration",
      description: "Illustration sets, Illustration systems",
    },
    {
      title: "Motion",
      description: "Lottie animations, GIFs",
    },
    {
      title: "Icons",
    },
    {
      title: "Patterns",
    },
  ];

  const uiDesign = [
    {
      title: "UI Design",
      description: "Web and mobile mockups",
    },
    {
      title: "Design systems",
      description: "UI kits, Scalable Design Systems",
    },
    {
      title: "Webflow design",
      description: "Templates, Custom websites",
    },
  ];

  return (
    <Layout>
      <section className="pt-14">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex h-full w-full flex-1 flex-col items-center text-center">
            <div className="mb-10 w-full flex-1 md:w-[520px]">
              <Image
                priority
                src="/home/Hero_grouped.webp"
                width="2781"
                height="1929"
                alt="hero"
              />
            </div>
            <h1 className="h2 md:h1 mb-4 w-full md:w-[520px]">
              Product illustrator & UI Designer
            </h1>
            <h2 className="text-3 md:text2">
              Creating custom, user-centered digital assets and interfaces ✨
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-20 pt-80 md:grid-cols-2 md:gap-8">
          {Array(2)
            .fill("")
            .map((_, i) => (
              <Link href="/" key={i}>
                <a>
                  <CardProject />
                </a>
              </Link>
            ))}
        </div>
        {/* <div className="pt-12 text-center">
          <span className="cursor-pointer font-title underline">
            More projects
          </span>
        </div> */}
      </section>
      <section className="pt-40 md:pt-80">
        <div className="mb-8 flex flex-col items-center">
          <h2 className="font-title-bold text-2xl">Services</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg border-4 border-gray-900">
            <div className="fp-background-light-blue h4 border-b-4 border-gray-900 p-6 text-center">
              <h3>Digital assets</h3>
            </div>
            <div className="flex flex-col gap-4 p-8">
              {digitalAssets.map((asset) => (
                <div className="flex items-center" key={asset.title}>
                  <div className="mr-6 h-20 min-w-[5rem] rounded-lg bg-zinc-800" />
                  <div>
                    <h4 className="text3">{asset.title}</h4>
                    {asset.description ? (
                      <span className="text8">{asset.description}</span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border-4 border-gray-900">
            <div className="fp-background-light-blue h4 border-b-4 border-gray-900 p-6 text-center">
              <h3>Interfaces</h3>
            </div>
            <div className="flex flex-col gap-4 p-8">
              {uiDesign.map((asset) => (
                <div className="flex items-center" key={asset.title}>
                  <div className="mr-6 h-20 min-w-[5rem] rounded-lg bg-zinc-800" />
                  <div>
                    <h4 className="text3">{asset.title}</h4>
                    {asset.description ? (
                      <span className="text8">{asset.description}</span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-8 pt-40 md:flex-row  md:pt-80">
        <div className="flex-[0.4]">
          <Image src="/home/Profil_pic.png" width="1604" height="1492" />
        </div>
        <div className="flex-[0.6]">
          <h2 className="mb-4 font-title-bold text-2xl">
            Hi — Nice to meet you!
          </h2>
          <div className="text1">
            <p className="mb-4">
              I’m Fflur Page, a freelance designer and illustrator based in
              Paris.
            </p>
            <p className="mb-4">
              After graduating from HETIC tech school, I worked as a Product
              Designer for a french startup. I was involved throughout the full
              design process from discovering users needs to delivering the best
              solution to address them. During that time, I got involved in
              creative tasks and started delivering my first illustrations and
              UI assets for the company’s products.
            </p>
            <p className="mb-4">
              Even though I never thought I was destined to it, I fell in love
              with illustration right away and decided to start a new journey as
              a self-taught illustrator and UI asset creator. My product design
              background acts as a landmark during my creative process, so I can
              make sure to deliver consistent work and enhance the overall
              experience.
            </p>{" "}
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-start gap-8 pt-40 md:flex-row md:pt-80">
          <div className="fp-background-light-purple flex-1 rounded-2xl px-6 pt-6 pb-16">
            <span className="inline-flex pb-4 text-[24px]">⭐️</span>
            <p className="text3 border-l-4 border-gray-700 pl-4">
              “Working with Fflur was a true pleasure, her mockups, fun
              illustrations and skills on Figma were massive help to the
              integration of new features on our Products. Fflur is also a nice
              person to work with, open minded and reactive. I can only
              recommend her !”
            </p>
            <span className="inline-flex pt-4 font-title text-sm">
              THIBAUT, FRONT-END DEVELOPER @CLEAR FASHION
            </span>
          </div>
          <div className="fp-background-light-purple flex-1 rounded-2xl px-6 pt-6 pb-16">
            <span className="inline-flex pb-4 text-[24px]">⭐️</span>
            <p className="text3 border-l-4 border-gray-700 pl-4">
              “As a designer, Fflur was able to deliver fonctional and aesthetic
              interfaces. She is creative in finding solutions during the design
              process, her flexibility and efficacity make her a quality project
              partner. Fflur always has a smile on her face and invests herself
              in her work.”
            </p>
            <span className="inline-flex pt-4 font-title text-sm">
              JULIETTE, PRODUCT MANAGER @CLEAR FASHION
            </span>
          </div>
        </div>
      </section>
      <CTAMail />
    </Layout>
  );
};

export default Home;
