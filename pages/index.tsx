import { Layout } from "components/Layout";
import Link from "next/link";

const CardCTA = ({ title, slug }: { title: string; slug: string }) => {
  return (
    <div className="relative flex h-full">
      <div className="z-10 flex h-full flex-col items-start justify-between p-10">
        <div className="w-2/3 flex-1">
          <div>logo</div>
          <h2 className="h2 mt-5">{title}</h2>
        </div>
        <Link href={`/projects/${slug}`}>
          <button className="rounded-full bg-black py-3 px-6 text-white">
            Discover project
          </button>
        </Link>
      </div>
      <div className="absolute right-0 bottom-0 h-full w-1/2 bg-red-200"></div>
    </div>
  );
};

const Home = () => {
  return (
    <Layout>
      <div className="grid h-full grid-cols-3 grid-rows-[320px] gap-5">
        <div className="surface-tertiary col-span-1 row-span-2 rounded-2xl">
          img
        </div>
        <div className="surface-tertiary col-span-2 row-span-1 rounded-2xl">
          <CardCTA
            title="Matching top-tier freelancers with company needs"
            slug="matching-top-tier-freelancers-company-needs"
          />
        </div>
        <div className="surface-tertiary col-span-1 row-span-1 rounded-2xl">
          img
        </div>
        <div className="surface-tertiary col-span-1 row-span-1 rounded-2xl">
          img
        </div>
        <div className="surface-tertiary col-span-2 row-span-1 rounded-2xl">
          <CardCTA
            title="Solutions for a more sustainable fashion industry"
            slug="solutions-sustainable-fashion-industry"
          />
        </div>
        <div className="surface-tertiary col-span-1 row-span-2 rounded-2xl">
          img
        </div>
        <div className="surface-tertiary row-span-1 rounded-2xl">img</div>
        <div className="surface-tertiary row-span-1 rounded-2xl">img</div>
      </div>
    </Layout>
  );
};

export default Home;
