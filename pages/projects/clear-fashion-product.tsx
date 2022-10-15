import CTAMail from "components/CTAMail";
import Layout from "components/Layout";
import Link from "next/link";
import Image from "next/image";
import Chip from "components/Chip";

const ClearFashionPage = () => {
  return (
    <Layout
      hero={
        <img src={`/cf/CF_banner.png`} className="h-full w-full object-cover" />
      }
    >
      <div className="mt-16 mb-20">
        <div className="mb-6 inline-flex items-start">
          <h1 className="mr-8 font-title-bold text-5xl">Clear Fashion</h1>
          <Chip>UI design</Chip>
        </div>
        <p className="text-xl">
          Clear Fashion is a french, mission-led company that helps consumers
          check fashion brands engagements and analyse garments social and
          environmental impact. I joined the team at an early stage as a Product
          Designer and worked there for 2 years. At first, I only focused on the
          initial product, a B2C mobile app with +100k downloads. I then worked
          on a network of products including a web app and widgets displayed on
          brands websites.
        </p>
      </div>
      <SectionImgText
        img="ProductDesign_banner.png"
        title="The mobile app: Following consumers through their entire shopping journey"
        text={
          <>
            <p className="mb-2">
              When I joined the team, one of the first versions of the mobile
              app was live and early adopters were already using the original
              features: brand search, top brands and garment scan.
            </p>
            <p className="mb-2">
              My role was to co-construct the product vision with the users,
              design new meaningful features and standardize the layout and
              components throughout the app.
            </p>
            <p className="mb-2">
              More specifically, I worked on projects such as improving the
              visualization of brands engagements for each creterias, as well as
              developping a reliable way for users to rate the quality of their
              clothing, or allowing them to add brands to their favorite list,
              etc.
            </p>
          </>
        }
      />
      <SectionImgText
        isReverse
        img="CF_image_2.png"
        title="The web app: Making information more accessible to consumers"
        text={
          <>
            <p className="mb-2">
              In order to improve the fashion industry, Clear Fashion’s goal is
              to spread information about brands practices as widely as
              possible. We realised that the mobile app, while being great for a
              personalized experience, could actually be an obstacle to that
              goal. Building a web app would enable consumers (even ones that
              haven’t downloaded the app yet) to scan products from QR codes and
              be redirected to the evaluation page through their mobile’s
              navigator.
            </p>
            <p className="mb-2">
              My role here was to design the web app’s MVP mockups, define it’s
              purpose in the user journey, prioritize the features
              implementations and insure the consistency of the design system
              throughout Clear Fashion’s products.
            </p>
          </>
        }
      />
      <SectionImgText
        img="Widget.gif"
        title="The widgets: A summary of the garment’s evaluation displayed on the brands website."
        text={
          <>
            <p className="mb-2">
              Clear Fashion’s business model is based on the brands subscription
              to a licence that allows them to display their brand and products
              evaluation.
            </p>
            <p className="mb-2">
              I worked with the marketing team and fashion brands to define
              offers that would be the most useful to brands while fulfilling
              our goal of bringing awareness to the consumers.
            </p>
            <p className="mb-2">
              That’s when we decided to design widgets that met the brands
              visual requirements. They are meant to be displayed on their
              website’s product pages, and sum up the most valuable informations
              about the products fabrication, according to user-research and
              fashion industry experts.
            </p>
          </>
        }
      />
      <CTAMail />
    </Layout>
  );
};

interface SectionImgTextProps {
  img: string;
  title: string;
  text: React.ReactNode;
  isReverse?: boolean;
}

const SectionImgText: React.FC<SectionImgTextProps> = ({
  img,
  title,
  text,
  isReverse = false,
}) => {
  return (
    <section
      className={`mt-80 flex flex-col items-center gap-8 ${
        isReverse ? `md:flex-row-reverse` : `md:flex-row`
      }`}
    >
      <div className="flex-[0.4]">
        <div className="">
          <Image src={`/cf/${img}`} width={544} height={489} />
        </div>
      </div>
      <div className="flex-[0.6]">
        <h2 className="mb-8 font-title-bold text-3xl">{title}</h2>
        <div className="text-lg">{text}</div>
      </div>
    </section>
  );
};

export default ClearFashionPage;
