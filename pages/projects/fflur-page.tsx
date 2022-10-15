import CTAMail from "components/CTAMail";
import Layout from "components/Layout";
import Image from "next/image";
import Chip from "components/Chip";

const gallery = [
  "Tamagotchi.png",
  "Nokia.png",
  "Gamecube.png",
  "Mac.png",
  "Keyboard.png",
  "Color-palette.png",
];

const ClearFashionPage = () => {
  return (
    <Layout
      hero={
        <img
          src={`/Project/Fflur/Banniere/Fflur_banner-2.png`}
          className="h-full w-full object-cover"
        />
      }
    >
      <div className="mt-16 pb-20">
        <div className="mb-6 inline-flex items-start">
          <h1 className="mr-8 font-title-bold text-5xl">Fflur Page</h1>
          <div className="flex flex-wrap gap-2">
            <Chip variant="secondary">Content creation</Chip>
            <Chip variant="tertiary">Online branding</Chip>
            <Chip variant="primary">UI design</Chip>
          </div>
        </div>
        <p className="text-xl">
          As I was revamping my portfolio ready to start freelancing, I took
          this opportunity to work thoughtfully on my personal branding. I knew
          I wanted my online presence to be fun and chearful, but it was also
          important that it reflected what I do and who I am. I started by
          narrowing down my influences before starting research for my
          moodboard: I went along with my millennial childhood nostalgia,
          remembering my first interactions with digital devices and what the
          illustration style of my favourite cartoons were. I thought mixing a
          millennial themed design with a few gen z references could be fun!
          Once I defined my color palette and typography, I could finally start
          working on my portfolio design and illustrations.
        </p>
      </div>
      <div className="grid gap-8 pt-20 md:grid-cols-3">
        {gallery.map((img, index) => {
          return (
            <div key={index} className="flex overflow-hidden rounded-xl">
              <Image src={`/Project/Fflur/${img}`} width="800" height="800" />
            </div>
          );
        })}
      </div>
      <CTAMail />
    </Layout>
  );
};

export default ClearFashionPage;
