import CTAMail from "components/CTAMail";
import Layout from "components/Layout";
import Image from "next/image";
import Chip from "components/Chip";

const gallery = [
  "Aphrodite.png",
  "Apollo.png",
  "Ares.png",
  "Artemis.png",
  "Athena.png",
  "Demeter.png",
  "Hephaestus.png",
  "Hera.png",
  "Hermes.png",
  "Hestia.png",
  "Poseidon.png",
  "Zeus.png",
];

const ClearFashionPage = () => {
  return (
    <Layout
      hero={
        <img
          src={`/Project/Delphee/Banniere/Delphee_banner-2.png`}
          className="h-full w-full object-cover"
        />
      }
    >
      <div className="mt-16 pb-20">
        <div className="mb-6 inline-flex flex-wrap items-start">
          <h1 className="mr-8 inline-flex font-title-bold text-5xl leading-[56px]">
            Delphee
          </h1>
          <div className="mt-2 flex flex-wrap gap-2">
            <Chip variant="secondary">Content creation</Chip>
            <Chip variant="tertiary">Online branding</Chip>
          </div>
        </div>
        <p className="text-xl">
          Delphee is an oracle card project based on greek mythology gods and
          goddesses. In addition to the card illustrations, I worked on the
          social media launch of the brand in order to start building a
          community of people that could be interested in purchasing the card
          game when it will be ready. I did research on the user communities
          that should be targeted and defined 4/5 pillars on which I could
          create content that the targeted audience would be sensible to. I
          designed all the content and also the online branding for this
          project.
        </p>
      </div>
      <div className="grid gap-8 pt-20 md:grid-cols-3">
        {gallery.map((img, index) => {
          return (
            <div key={index} className="flex overflow-hidden rounded-xl">
              <Image src={`/Project/Delphee/${img}`} width="800" height="800" />
            </div>
          );
        })}
      </div>
      <CTAMail />
    </Layout>
  );
};

export default ClearFashionPage;
