import CTAMail from "components/CTAMail";
import Layout from "components/Layout";
import Link from "next/link";
import Image from "next/image";

const ClearFashionPage = () => {
  return (
    <Layout>
      <nav className="flex mt-4">
        <Link href="/">
          <a className="underline text-base font-title">Home</a>
        </Link>
        <span className="px-2">·</span>
        <Link href="/ui-design">
          <a className="underline text-base font-title">Product Design</a>
        </Link>
        <span className="px-2">·</span>
        <Link href="/ui-design">
          <a className="text-base font-title">Clear Fashion</a>
        </Link>
      </nav>
      <div className="mt-16 mb-20">
        <h1 className="text-5xl font-title mb-6">Clear Fashion</h1>
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
      <div>
        <div className="w-full">
          <Image src={`/cf/CF_banner.png`} width="3229" height="971" />
        </div>
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
              I’m Fflur Page, a freelance UI designer & illustrator based in
              Paris.
            </p>
            <p className="mb-2">
              After graduating from HETIC tech school, I worked 2 years as a
              product designer for a french startup. I was involved throughout
              the full design process from discovering users needs to delivering
              the best solution to address them. It was during that time I
              noticed that product teams don’t always have the time or
              ressources to create and manage assets efficiently.{" "}
            </p>
            <p className="mb-2">
              To me, UI plays a huge role in enhancing the users experience
              while allowing brands to make a statement. The right components,
              icon set and illustration system will make a product so much more
              than attractive, it will make it consistent and reliable. I want
              to focus on helping companies and product teams achieve that!
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
              I’m Fflur Page, a freelance UI designer & illustrator based in
              Paris.
            </p>
            <p className="mb-2">
              After graduating from HETIC tech school, I worked 2 years as a
              product designer for a french startup. I was involved throughout
              the full design process from discovering users needs to delivering
              the best solution to address them. It was during that time I
              noticed that product teams don’t always have the time or
              ressources to create and manage assets efficiently.{" "}
            </p>
            <p className="mb-2">
              To me, UI plays a huge role in enhancing the users experience
              while allowing brands to make a statement. The right components,
              icon set and illustration system will make a product so much more
              than attractive, it will make it consistent and reliable. I want
              to focus on helping companies and product teams achieve that!
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
      className={`mt-80 flex flex-col gap-8 ${
        isReverse ? `md:flex-row-reverse` : `md:flex-row`
      }`}
    >
      <div className="flex-[0.4]">
        <div className="">
          <Image src={`/cf/${img}`} width={544} height={489} />
        </div>
      </div>
      <div className="flex-[0.6]">
        <h2 className="text-3xl font-title mb-8">{title}</h2>
        <div className="text-lg">{text}</div>
      </div>
    </section>
  );
};

export default ClearFashionPage;
