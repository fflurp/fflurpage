import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Layout from "components/Layout";
import CTAMail from "components/CTAMail";
import Chip from "components/Chip";

type CardProjectProps = {
  title: string;
  company: string;
  tags: { text: string; bg: string }[];
  image: string;
};

const CardProject: React.FC<CardProjectProps> = ({
  title,
  company,
  tags,
  image,
}) => {
  return (
    <div className="group flex w-full flex-col transition">
      <div className="relative h-[298px] md:h-[500px]">
        <div className="absolute z-10 hidden h-full w-full bg-white opacity-0 transition group-hover:opacity-50 group-hover:blur-sm md:block" />
        <img
          src={image}
          alt="project"
          className="absolute z-0 h-full w-full object-cover transition md:group-hover:blur-sm"
        />
        <div className="invisible absolute z-20 hidden p-8 transition group-hover:visible md:invisible md:flex md:flex-col">
          <div className="text5 mb-4 uppercase">{company}</div>
          <div className="h3 mb-4">{title} </div>
          <div className="flex flex-row gap-4">
            {tags.map((tag) => (
              <Chip background={tag.bg} key={tag.text}>
                {tag.text}
              </Chip>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:hidden">
        <div className="text5 py-4">{company}</div>
        <div className="h3 pb-4">{title} </div>
        <div className="flex flex-row gap-4">
          {tags.map((tag) => (
            <Chip background={tag.bg} key={tag.text}>
              {tag.text}
            </Chip>
          ))}
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
      image: "/home/icon_illustration.png",
    },
    {
      title: "Motion",
      description: "Lottie animations, GIFs",
      image: "/home/icon_motion.png",
    },
    {
      title: "Icons",
      image: "/home/icon_icons.png",
    },
    {
      title: "Patterns",
      image: "/home/icon_patterns.png",
    },
  ];

  const uiDesign = [
    {
      title: "UI Design",
      description: "Web and mobile mockups",
      image: "/home/icon_uidesign.png",
    },
    {
      title: "Design systems",
      description: "UI kits, Scalable Design Systems",
      image: "/home/icon_designsystems.png",
    },
    {
      title: "Webflow design",
      description: "Templates, Custom websites",
      image: "/home/icon_webflow.png",
    },
  ];

  const projects = [
    {
      title: "Mobile, web app and widget design",
      company: "Clear Fashion",
      tags: [
        { text: "UI Design", bg: "fp-background-light-pink" },
        { text: "Design system", bg: "fp-background-light-grey" },
      ],
      image: "/Project/Projet1/Banniere/coverprojet1.png",
      link: "clear-fashion-product",
    },
    {
      title: "Illustration set for mobile app",
      company: "Clear Fashion",
      tags: [{ text: "Illustration", bg: "fp-background-light-purple" }],
      image: "/Project/Projet2/Banniere/coverprojet2.png",
      link: "clear-fashion-illustration",
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
                src="/avatarfp.png"
                width="184px"
                height="236px"
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
        <div className="grid grid-cols-1 gap-20 pt-40 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.link}`} key={index}>
              <a>
                <CardProject
                  title={project.title}
                  company={project.company}
                  tags={project.tags}
                  image={project.image}
                />
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
          <div className="rounded-lg border-4 border-[#25283d]">
            <div className="fp-background-light-blue h4 border-b-4 border-[#25283d] p-6 text-center">
              <h3>Digital assets</h3>
            </div>
            <div className="flex flex-col gap-4 p-8">
              {digitalAssets.map((asset) => (
                <div className="flex items-center" key={asset.title}>
                  <div className="mr-6 h-20 w-20 rounded-lg">
                    <img
                      src={asset.image}
                      className="h-full w-full object-cover"
                    />
                  </div>
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
          <div className="rounded-lg border-4 border-[#25283d]">
            <div className="fp-background-light-blue h4 border-b-4 border-[#25283d] p-6 text-center">
              <h3>Interfaces</h3>
            </div>
            <div className="flex flex-col gap-4 p-8">
              {uiDesign.map((asset) => (
                <div className="flex items-center" key={asset.title}>
                  <div className="mr-6 h-20 w-20 rounded-lg">
                    <img
                      src={asset.image}
                      className="h-full w-full object-cover"
                    />
                  </div>
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
          <Image src="/home/photofp.png" width="475" height="552" />
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
              I fell in love with illustration right away and decided to
              supplement my skillset so I could work on the multiple creative
              aspects that make a great interface. Thanks to my background, I
              always make sure to deliver consistent, scalable assets that will
              help the product and its users reach their goals.
            </p>{" "}
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-start gap-8 pt-40 md:flex-row md:pt-80">
          <div className="fp-background-light-purple flex-1 rounded-2xl px-6 pt-6 pb-16">
            <span className="inline-flex pb-4 text-[24px]">⭐️</span>
            <p className="text3">
              “Working with Fflur was a true pleasure, her mockups, fun
              illustrations and skills on Figma were massive help to the
              integration of new features on our Products. Fflur is also a nice
              person to work with, open minded and reactive. I can only
              recommend her!”
            </p>
            <span className="inline-flex pt-4 font-title text-sm">
              THIBAUT, FRONT-END DEVELOPER @CLEAR FASHION
            </span>
          </div>
          <div className="fp-background-light-purple flex-1 rounded-2xl px-6 pt-6 pb-16">
            <span className="inline-flex pb-4 text-[24px]">⭐️</span>
            <p className="text3">
              “As a designer, Fflur was able to deliver functional and aesthetic
              interfaces. She is creative problem solver, her flexibility and
              efficiency during the design process made her a quality partner.
              She always has a smile on her face and invests herself in her
              work.”
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
