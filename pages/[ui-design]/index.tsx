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
          <a>UI Design</a>
        </Link>
      </nav>
      <div className="mt-16 mb-20">
        <h1 className="text-3xl mb-6">UI Design</h1>
        <p>
          Coming from a product/tech background, I consider usability and
          consistency to be key elements when it comes to design. First of all,
          product teams need to have a proper understanding of their users to
          make sure thoughout the whole design process that the solution will
          work for the targeted audience. In addition to that, the interfaces
          themselves should be designed consciously, by creating a balanced
          synergy between brand guidelines, design principles and
          best-practices.
        </p>
      </div>
      <div className="mb-20">
        <h2 className="text-2xl mb-10">Projects</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/ui-design/clear-fashion">
              <a>
                <div className="h-80 bg-red-50 rounded-xl"></div>
                <span>clear fashion</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl mb-10">Gallery</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {mockGallery.map((item, index) => {
            return (
              <div key={index} className="h-80 rounded-xl bg-emerald-50"></div>
            );
          })}
        </div>
      </div>
      <CTAMail />
    </Layout>
  );
};

export default UIDesignPage;
