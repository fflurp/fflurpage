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
      <nav className="flex mt-10">
        <Link href="/">
          <a className="underline font-semibold">Home</a>
        </Link>
        <span className="px-2">·</span>
        <Link href="/ui-design">
          <a>Illustration</a>
        </Link>
      </nav>
      <div className="mt-16 mb-20">
        <h1 className="text-3xl mb-6">Illustrations</h1>
        <p>
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
            <div key={index} className="rounded-xl flex overflow-hidden">
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
