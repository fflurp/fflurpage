import { Layout } from "components/Layout";
import Link from "next/link";

const CardCTA = ({ title, slug }: { title: string; slug: string }) => {
  return (
    <div className="flex h-full">
      <div className="flex h-full w-1/2 flex-col items-start justify-between p-10">
        <div className="flex-1">
          <div>logo</div>
          <h2 className="mt-5">{title}</h2>
        </div>
        <Link href={`/projects/${slug}`}>
          <button className="rounded-full bg-black py-3 px-6 text-white">
            Discover project
          </button>
        </Link>
      </div>
      <div className="h-full w-1/2 bg-red-200"></div>
    </div>
  );
};

const Home = () => {
  return (
    <Layout>
      <div className="grid h-full grid-cols-3 grid-rows-[320px] gap-5">
        <div className="col-span-1 row-span-2 rounded-2xl bg-neutral-100"></div>
        <div className="col-span-2 row-span-1 rounded-2xl bg-neutral-100">
          <CardCTA
            title="Matching top-tier freelancers with company needs"
            slug="matching-top-tier-freelancers-company-needs"
          />
        </div>
        <div className="col-span-1 row-span-1 rounded-2xl bg-neutral-100"></div>
        <div className="col-span-1 row-span-1 rounded-2xl bg-neutral-100"></div>
        <div className="col-span-2 row-span-1 rounded-2xl bg-neutral-100">
          <CardCTA
            title="Solutions for a more sustainable fashion industry"
            slug="solutions-sustainable-fashion-industry"
          />
        </div>
        <div className="col-span-1 row-span-2 rounded-2xl bg-neutral-100"></div>
        <div className="row-span-1 rounded-2xl bg-neutral-100"></div>
        <div className="row-span-1 rounded-2xl bg-neutral-100"></div>
      </div>
    </Layout>
  );
};

export default Home;
