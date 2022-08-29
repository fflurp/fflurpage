import type { NextPage } from "next";
import Link from "next/link";
import Layout from "components/Layout";
import CTAMail from "components/CTAMail";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="pt-40">
        <div className="text-center">
          <h1 className="text-3xl mb-4">UI Designer & illustrator</h1>
          <h2 className="max-w-md mx-auto">
            I create user-centered interfaces and UI assets to help product
            teams deliver unique and consistent designs.{" "}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-40">
          <div className="flex-1 w-full">
            <Link href="/ui-design">
              <a>
                <div className="h-80 bg-red-50 rounded-xl mb-2">img</div>
                <span>UI Design</span>
              </a>
            </Link>
          </div>
          <div className="flex-1 w-full">
            <Link href="/illustrations">
              <a>
                <div className="h-80 bg-red-50 rounded-xl mb-2">img</div>
                <span>Illustration</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="pt-80 flex flex-col md:flex-row gap-8">
        <div className="flex-[0.4]">
          <div className="">img</div>
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
