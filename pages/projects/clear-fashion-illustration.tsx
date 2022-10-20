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
          src="/Project/CF-illu/Banniere/CF_illu_banner-2.png"
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
            <Chip variant="secondary">Asset creation</Chip>
            <Chip variant="primary">UI design</Chip>
          </div>
        </div>
        <p className="text-xl">
        After Clear Fashion received recommendations by an external branding agency, there was a lot to do in order to meet the new guidelines. In addition to the UI components update, I suggested a new illustration set according to the new funky color palette. I went through all the user flows to make sure I knew what illustrations I had to replace, gathered the RGB codes and started designing on Illustrator.
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
