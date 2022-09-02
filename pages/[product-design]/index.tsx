import Link from "next/link";
import Layout from "components/Layout";
import CTAMail from "components/CTAMail";
import Image from "next/image";

const UIDesignPage = () => {
  return (
    <Layout>
      <nav className="flex mt-4">
        <Link href="/">
          <a className="underline text-base font-title">Home</a>
        </Link>
        <span className="px-2">·</span>
        <Link href="/ui-design">
          <a className="text-base font-title">Product Design</a>
        </Link>
      </nav>
      <div className="mt-16 mb-20">
        <h1 className="mb-6 text-5xl font-title">Product Design</h1>
        <p className="text-xl">
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
        <div className="grid gap-8 md:grid-cols-3">
          <Link href="/ui-design/clear-fashion">
            <a>
              <div className="rounded">
                <Image
                  src="/cf/ProductDesign_banner.png"
                  width="1202"
                  height="1080"
                />
              </div>
              <span className="text-lg font-title py-6 px-4 inline-flex">
                Clear Fashion
              </span>
            </a>
          </Link>
          <Link href="/ui-design/clear-fashion">
            <a className="opacity-50 cursor-wait">
              <div className="rounded">
                <Image
                  src="/product_design/Coming_soon.png"
                  width="1202"
                  height="1080"
                />
              </div>
              <span className="text-lg font-title py-6 px-4 inline-flex">
                Rebell
              </span>
            </a>
          </Link>
        </div>
      </div>
      <CTAMail />
    </Layout>
  );
};

export default UIDesignPage;
