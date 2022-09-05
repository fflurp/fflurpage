import Link from "next/link";
import Layout from "components/Layout";
import CTAMail from "components/CTAMail";

const UIDesignPage = () => {
  return (
    <Layout>
      <nav className="mt-4 flex">
        <Link href="/">
          <a className="font-title text-base">Home</a>
        </Link>
        <span className="px-2">·</span>
        <Link href="/product-design">
          <a className="font-title text-base text-neutral-500">
            Product Design
          </a>
        </Link>
      </nav>
      <div className="mt-16 mb-20">
        <h1 className="mb-6 font-title-bold text-5xl">Product Design</h1>
        <p className="text-xl">
          Coming from a product/tech background, I consider usability and
          consistency to be key elements when it comes to design. First of all,
          product teams should have a proper understanding of their users to
          make sure, throughout the whole design process, that the solution will
          work for the targeted audience. In addition to that, the interfaces
          themselves need to be designed consciously by creating a balanced
          synergy between brand guidelines, design principles and
          best-practices.
        </p>
      </div>
      <div className="mb-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="w-full">
            <Link href="/product-design/clear-fashion">
              <a>
                <div className="flex h-full max-h-80 overflow-hidden rounded-tl-3xl rounded-tr-3xl">
                  <img
                    src="/cf/ProductDesign_banner.png"
                    className="w-full object-cover"
                    alt="clear fashion"
                  />
                </div>
                <div className="inline-flex w-full overflow-hidden rounded-bl-3xl rounded-br-3xl bg-[#FAFBFF]/50 py-6 px-4 font-title-bold text-lg">
                  <span>Clear Fashion</span>
                </div>
              </a>
            </Link>
          </div>
          <div className="w-full">
            <a className="cursor-wait opacity-75">
              <div className="flex h-full max-h-80 overflow-hidden rounded-tl-3xl rounded-tr-3xl">
                <img
                  src="/product_design/Coming_soon.png"
                  className="w-full object-cover"
                  alt="rebell"
                />
              </div>
              <div className="inline-flex w-full overflow-hidden rounded-bl-3xl rounded-br-3xl bg-[#FAFBFF]/50 py-6 px-4 font-title-bold text-lg">
                <span>Rebell</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <CTAMail />
    </Layout>
  );
};

export default UIDesignPage;
