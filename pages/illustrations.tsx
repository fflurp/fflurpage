import Link from "next/link";
import Layout from "components/Layout";
import CTAMail from "components/CTAMail";
import Image from "next/image";

const gallery = [
  "Clothes.png",
  "Scientist.png",
  "People.png",
  "Trash.png",
  "Keys.png",
  "Box.png",
  "Tamagotchi.png",
  "Nokia.png",
  "Gamecube.png",
  "Mac.png",
  "Keyboard.png",
];

const UIDesignPage = () => {
  return (
    <Layout>
      <nav className="mt-10 flex">
        <Link href="/">
          <a className="font-title text-base">Home</a>
        </Link>
        <span className="px-2">·</span>
        <Link href="/ui-design">
          <a className="font-title text-base text-neutral-500">Illustration</a>
        </Link>
      </nav>
      <div className="mt-16 mb-20">
        <h1 className="mb-6 font-title text-5xl">Illustrations</h1>
        <p className="text-xl">
          Applied to product design, illustrations play a massive role in
          amplifying or simplifying the messages that are delivered to the
          users. Whether it’s there to make complicated information easier to
          process or to reduce frustration, interface illustration should always
          be useful as opposed to purely decorative.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {gallery.map((img, index) => {
          return (
            <div key={index} className="flex overflow-hidden rounded-xl">
              <Image src={`/illustration/${img}`} width="800" height="800" />
            </div>
          );
        })}
      </div>
      <CTAMail />
    </Layout>
  );
};

export default UIDesignPage;
