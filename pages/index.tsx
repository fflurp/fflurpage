import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Layout from "components/Layout";
import CTAMail from "components/CTAMail";
import Card from "components/Card";

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
          <div className="flex h-full w-[520px] flex-1 flex-col text-center">
            <div className="mb-10 w-full flex-1">
              <Image
                priority
                src="/home/Hero_grouped.webp"
                width="2781"
                height="1929"
                alt="hero"
              />
            </div>
            <h1 className="font-display mb-4 font-title-bold text-5xl leading-[56px] text-gray-700">
              Product designer & illustrator
            </h1>
            <h2 className="text-xl">
              Everything from UI design to digital asset creation for an extra
              topping of user satisfaction 🧁
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:pt-80">
          {Array(4)
            .fill("")
            .map((_, i) => (
              <div className="h-[500px] w-full bg-zinc-800" key={i}>
                test
              </div>
            ))}
        </div>
        <div className="pt-12 text-center">
          <Link href="/projects">
            <span className="cursor-pointer font-title underline">
              More projects
            </span>
          </Link>
        </div>
      </section>
      <section className="pt-40 md:pt-80">
        <div className="mb-8 flex flex-col items-center">
          <h2 className="font-title-bold text-2xl">Services</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg border-4 border-gray-900">
            <div className="border-b-4 border-gray-900 p-6 text-center">
              <h3>Digital assets</h3>
            </div>
            <div className="flex flex-col gap-4 p-8">
              {digitalAssets.map((asset) => (
                <div className="flex items-center" key={asset.title}>
                  <div className="mr-6 h-20 min-w-[5rem] rounded-lg bg-zinc-800" />
                  <div>
                    <h4>{asset.title}</h4>
                    {asset.description ? (
                      <span>{asset.description}</span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border-4 border-gray-900">
            <div className="border-b-4 border-gray-900 p-6 text-center">
              <h3>Interfaces</h3>
            </div>
            <div className="flex flex-col gap-4 p-8">
              {uiDesign.map((asset) => (
                <div className="flex items-center" key={asset.title}>
                  <div className="mr-6 h-20 min-w-[5rem] rounded-lg bg-zinc-800" />
                  <div>
                    <h4>{asset.title}</h4>
                    {asset.description ? (
                      <span>{asset.description}</span>
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
          <p className="mb-4 text-lg">
            I’m Fflur Page, a freelance designer and illustrator based in Paris.
          </p>
          <p className="mb-4 text-lg">
            After graduating from HETIC tech school, I worked 2 years as a
            Product Designer for a french startup. I was involved throughout the
            full design process from discovering users needs to delivering the
            best solution to address them. During that time, I got involved in
            product creative tasks, delivering illustrations and UI assets that
            would make the product stand out and meet the users’ expectations.
          </p>
          <p className="mb-4 text-lg">
            After that, I wanted to dedicated my work not only to interface
            design, but also to digital asset creation and online branding. To
            me, all those things play a huge role in enhancing the users’
            experience while making a statement as a brand, and that’s precisely
            what I want to help product teams achieve.
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-start gap-8 pt-40 md:flex-row md:pt-80">
          <div className="flex-1 rounded-2xl bg-[#FAFBFF] px-6 pt-6 pb-16">
            <span className="inline-flex pb-4 text-[32px]">💬</span>
            <p className="border-l-2 border-gray-700 pl-2 text-lg">
              “Working with Fflur was a true pleasure, her mockups, fun
              illustrations and skills on Figma were massive help to the
              integration of new features on our Products. Fflur is also a nice
              person to work with, open minded and reactive. I can only
              recommend her !”
            </p>
            <span className="inline-flex pt-4 font-title text-sm text-gray-600">
              THIBAUT, FRONT-END DEVELOPER @CLEAR FASHION
            </span>
          </div>
          <div className="flex-1 rounded-2xl bg-[#FAFBFF] px-6 pt-6 pb-16">
            <span className="inline-flex pb-4 text-[32px]">💬</span>
            <p className="border-l-2 border-gray-700 pl-2 text-lg">
              “As a designer, Fflur delivered fonctional and aesthetic
              interfaces. She was able to find creative solutions during the
              design process, her flexibility and efficacity made her a quality
              project partner. Fflur always had a smile on her face and invested
              herself in her work.”
            </p>
            <span className="inline-flex pt-4 font-title text-sm text-gray-600">
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
