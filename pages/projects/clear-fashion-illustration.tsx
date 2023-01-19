import CTAMail from "components/CTAMail";
import Layout from "components/Layout";
import Image from "next/image";
import Chip from "components/Chip";

const gallery = [
  "projet2-2.png",
  "projet2-3.png",
  "projet2-4.png",
  "projet2-5.png",
  "projet2-6.png",
  "projet2-7.png",
];

const ClearFashionPage = () => {
  return (
    <Layout>
      <div className="mt-16">
        <div className="mb-8 flex flex-col">
          <span className="text5 mb-8">CLEAR FASHION</span>
          <h1 className="mr-8 font-title-bold text-5xl leading-[56px]">
            Illustration set for mobile app
          </h1>
          <div className="mt-8 flex flex-wrap gap-2">
            <Chip background="fp-background-light-purple">Illustration</Chip>
          </div>
        </div>
        <p className="text1">
          After Clear Fashion received recommendations by an external branding
          agency, there was a lot to do in order to meet the new guidelines. In
          addition to the UI components update, I suggested a new illustration
          set according to the new funky color palette. I went through all the
          user flows to make sure I knew what illustrations I had to replace,
          gathered the RGB codes and started designing on Illustrator.
        </p>
      </div>
      <div className="pt-20 pb-8">
        <img
          src={`/Project/Projet2/projet2-1.png`}
          className="h-[500px] w-full rounded-lg object-cover"
        />
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {gallery.map((img, index) => {
          return (
            <div key={index} className="flex overflow-hidden rounded-lg">
              <img
                src={`/Project/Projet2/${img}`}
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
      </div>
      <CTAMail />
    </Layout>
  );
};

export default ClearFashionPage;
