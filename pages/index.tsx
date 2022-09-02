import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Layout from "components/Layout";
import CTAMail from "components/CTAMail";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="pt-14">
        <div className="text-center flex items-center gap-8 flex-col md:flex-row">
          <div className="flex flex-col h-full text-left basis-5/12">
            <h1 className="text-3xl mb-4">Product Designer & illustrator</h1>
            <h2 className="max-w-md mx-auto">
              I design user-centered interfaces and UI assets to help teams
              deliver unique and consistent products.
            </h2>
          </div>
          <div className="basis-7/12 w-full">
            <Image src="/home/Hero_grouped.png" width="2781" height="1929" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-40">
          <div className="flex-1 w-full">
            <Link href="/ui-design">
              <a>
                <Image
                  src="/home/ProductDesign_banner.png"
                  width="1202"
                  height="1080"
                />
                <span>Product Design</span>
              </a>
            </Link>
          </div>
          <div className="flex-1 w-full">
            <Link href="/illustrations">
              <a>
                <Image
                  src="/home/Illustration_banner.png"
                  width="1202"
                  height="1080"
                />
                <span>Illustration</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="pt-80 flex flex-col md:flex-row gap-8">
        <div className="flex-[0.4]">
          <Image src="/home/Profil_pic.png" width="1604" height="1492" />
        </div>
        <div className="flex-[0.6]">
          <h2 className="text-2xl mb-4">Hi — Nice to meet you!</h2>
          <p className="mb-2">
            I’m Fflur Page, a freelance UI designer & illustrator based in
            Paris.
          </p>
          <p className="mb-2">
            After graduating from HETIC tech school, I worked 2 years as a
            product designer for a french startup. I was involved throughout the
            full design process from discovering users needs to delivering the
            best solution to address them. It was during that time I noticed
            that product teams don’t always have the time or ressources to
            create and manage assets efficiently.{" "}
          </p>
          <p className="mb-2">
            To me, UI plays a huge role in enhancing the users experience while
            allowing brands to make a statement. The right components, icon set
            and illustration system will make a product so much more than
            attractive, it will make it consistent and reliable. I want to focus
            on helping companies and product teams achieve that!
          </p>
        </div>
      </section>
      <CTAMail />
    </Layout>
  );
};

export default Home;
