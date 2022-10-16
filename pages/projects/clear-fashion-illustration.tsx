import CTAMail from "components/CTAMail";
import Layout from "components/Layout";
import Image from "next/image";
import Chip from "components/Chip";

const gallery = [
  "Clothes.png",
  "Scientist.png",
  "People.png",
  "Trash.png",
  "Keys.png",
  "Box.png",
];

const ClearFashionPage = () => {
  return (
    <Layout
      hero={
        <img
          src="/Project/CF-illu/Banniere/CF_illu_BANNER-2.png"
          className="h-full w-full object-cover"
        />
      }
    >
      <div className="mt-16 pb-20">
        <div className="mb-6 inline-flex flex-wrap items-start">
          <h1 className="mr-8 font-title-bold text-5xl leading-[56px]">
            Clear Fashion
          </h1>
          <div className="mt-2 flex flex-wrap gap-2">
            <Chip variant="secondary">Content creation</Chip>
            <Chip variant="primary">UI design</Chip>
          </div>
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
      <div className="grid gap-8 pt-20 md:grid-cols-3">
        {gallery.map((img, index) => {
          return (
            <div key={index} className="flex overflow-hidden rounded-xl">
              <Image src={`/Project/CF-illu/${img}`} width="800" height="800" />
            </div>
          );
        })}
      </div>
      <CTAMail />
    </Layout>
  );
};

export default ClearFashionPage;
