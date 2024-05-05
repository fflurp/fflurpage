import { Layout } from "components/Layout";
import Link from "next/link";

const CardCTA = ({
  title,
  slug,
  img,
}: {
  title: string;
  slug: string;
  img: string;
}) => {
  return (
    <div className="relative flex h-full">
      <div className="z-10 flex h-full flex-col items-start justify-between p-10">
        <div className="w-2/3 flex-1">
          <div>logo</div>
          <h2 className="h2 mt-5">{title}</h2>
        </div>
        <Link href={`/projects/${slug}`}>
          <button className="rounded-full bg-black px-6 py-3 text-white">
            Discover project
          </button>
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 h-full w-1/2">
        <img src={img} alt={title} className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <Layout>
      <div className="grid h-full grid-cols-3 grid-rows-[320px] gap-5">
        <div className="surface-tertiary col-span-1 row-span-2 overflow-hidden rounded-2xl">
          <img
            src="/home/creme/Snapshot_Creme_1.png"
            alt="Snapshot_Creme_1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="surface-tertiary col-span-2 row-span-1 overflow-hidden rounded-2xl">
          <CardCTA
            title="Matching top-tier freelancers with company needs"
            slug="matching-top-tier-freelancers-company-needs"
            img="/home/creme/Creme_Card_Img.png"
          />
        </div>
        <div className="surface-tertiary col-span-1 row-span-1 overflow-hidden rounded-2xl">
          <img
            src="/home/creme/Snapshot_Creme_2.png"
            alt="Snapshot_CF_1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="surface-tertiary col-span-1 row-span-1 overflow-hidden rounded-2xl">
          <img
            src="/home/creme/Snapshot_Creme_3.png"
            alt="Snapshot_CF_1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="surface-tertiary col-span-2 row-span-1 rounded-2xl">
          <CardCTA
            title="Solutions for a more sustainable fashion industry"
            slug="solutions-sustainable-fashion-industry"
            img="/home/cf/CF_Card_Img.png"
          />
        </div>
        <div className="surface-tertiary col-span-1 row-span-2 overflow-hidden rounded-2xl ">
          <img
            src="/home/cf/Snapshot_CF_1.png"
            alt="Snapshot_CF_1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="surface-tertiary col-span-1 row-span-1 overflow-hidden rounded-2xl">
          <img
            src="/home/cf/Snapshot_CF_2.png"
            alt="Snapshot_CF_1"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="surface-tertiary col-span-1 row-span-1 overflow-hidden rounded-2xl">
          <img
            src="/home/cf/Snapshot_CF_3.png"
            alt="Snapshot_CF_1"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
