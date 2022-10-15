import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Layout from "components/Layout";
import CTAMail from "components/CTAMail";
import Card from "components/Card";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="pt-14">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row">
          <div className="flex h-full basis-5/12 flex-col text-left">
            <h1 className="font-display mb-4 font-title-bold text-3xl">
              Product Designer & illustrator
            </h1>
            <h2 className="text-xl">
              I design user-centered interfaces and UI assets to help teams
              deliver unique and consistent products.
            </h2>
          </div>
          <div className="w-full basis-7/12">
            <Image
              priority
              src="/home/Hero_grouped.webp"
              width="2781"
              height="1929"
              alt="hero"
            />
          </div>
        </div>
        <div className="mt-40 flex flex-col gap-8 md:flex-row">
          <Card
            title="CLEAR FASHION"
            description={"Mobile, web app and widget design "}
            link={"/projects/clear-fashion-product"}
            image={"/Project/CF-UI/Banniere/CF_UI_BANNER-2.png"}
            tags={[{ text: "UI Design", variant: "primary" }]}
          />
          <Card
            title="CLEAR FASHION"
            description={"Illustation set for Clear Fashion’s mobile app "}
            link={"/projects/clear-fashion-illustration"}
            image={"/Project/CF-illu/Banniere/CF_illu_BANNER-2.png"}
            tags={[
              { text: "Content creation", variant: "secondary" },
              { text: "UI Design", variant: "primary" },
            ]}
          />
          <Card
            title="DELPHEE"
            description={"Social media branding and illustrations"}
            link={"/projects/delphee"}
            image={"/Project/Delphee/Banniere/Delphee_BANNER-2.png"}
            tags={[
              { text: "Content creation", variant: "secondary" },
              { text: "Online branding", variant: "tertiary" },
            ]}
          />
        </div>
      </section>
      <section className="flex flex-col items-center gap-8 pt-80 md:flex-row">
        <div className="flex-[0.4]">
          <Image src="/home/Profil_pic.png" width="1604" height="1492" />
        </div>
        <div className="flex-[0.6]">
          <h2 className="mb-4 font-title-bold text-2xl">
            Hi — Nice to meet you!
          </h2>
          <p className="mb-4 text-lg">
            I’m Fflur Page, a freelance Product Designer & illustrator based in
            Paris.
          </p>
          <p className="mb-4 text-lg">
            After graduating from HETIC tech school, I worked 2 years as a
            Product Designer for a french startup. I was involved throughout the
            full design process from discovering users needs to delivering the
            best solution to address them. It was during that time I noticed
            that product teams don’t always have the time or ressources to
            create and manage assets efficiently. Shortly after this, I decided
            to work as an independant, focusing on helping product teams put
            together cohesive design systems.
          </p>
          <p className="mb-4 text-lg">
            To me, UI plays a huge role in enhancing the users experience while
            making a statement as a brand. The right components, icon set and
            illustration system will make a product so much more than
            attractive, it will make it consistent, reliable and unique.
          </p>
        </div>
      </section>
      <CTAMail />
    </Layout>
  );
};

export default Home;
