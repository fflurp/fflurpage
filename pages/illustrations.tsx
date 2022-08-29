import Link from "next/link";
import Layout from "components/Layout";
import CTAMail from "components/CTAMail";

const mockGallery = [...new Array(6)];

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
        {mockGallery.map((item, index) => {
          return (
            <div key={index} className="h-80 rounded-xl bg-emerald-50"></div>
          );
        })}
      </div>
      <CTAMail />
    </Layout>
  );
};

export default UIDesignPage;
