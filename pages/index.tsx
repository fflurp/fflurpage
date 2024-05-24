import { Layout } from "components/Layout";
import Link from "next/link";

const CardCTA = ({
  title,
  slug,
  img,
  icon,
}: {
  title: string;
  slug: string;
  img: string;
  icon: string;
}) => {
  return (
    <div className="relative flex h-full">
      <div className="z-10 flex h-full flex-col items-start justify-between p-10">
        <div className="w-2/3 flex-1">
          <div>
            <img src={icon} alt="icon" className="h-full w-24 object-fill" />
          </div>
          <h2 className="h2 mt-5">{title}</h2>
        </div>
        <Link href={`/projects/${slug}`}>
          <button className="rounded-full bg-black px-6 py-3 text-white">
            Discover project
          </button>
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 flex h-full items-end justify-end">
        <img src={img} alt={title} className="w-[240px] object-contain" />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <Layout>
      <div className="grid h-full grid-cols-2 grid-rows-[460px] gap-5 md:grid-cols-3 md:grid-rows-[320px]">
        <div className="surface-tertiary col-span-1 row-span-2 hidden overflow-hidden rounded-2xl sm:flex">
          <img
            src="/home/creme/Snapshot_Creme_1.png"
            alt="Snapshot_Creme_1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="surface-tertiary order-first col-span-2 row-span-1 overflow-hidden rounded-2xl md:order-none">
          <div className="relative flex h-full">
            <div className="z-10 flex h-full flex-col items-start justify-between p-10">
              <div className="w-2/3 flex-1">
                <div>
                  <img
                    src="/home/creme/creme_icon.png"
                    alt="icon"
                    className="h-full w-24 object-fill"
                  />
                </div>
                <h2 className="h2 mt-5">
                  {"Matching top-tier freelancers with company needs"}
                </h2>
              </div>
              <Link
                href={`/projects/matching-top-tier-freelancers-company-needs`}
              >
                <button className="rounded-full bg-black px-6 py-3 text-white">
                  Discover project
                </button>
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 flex h-full items-end justify-end">
              <img
                src={"/home/creme/Creme_Card_Img.png"}
                alt={"Matching top-tier freelancers with company needs"}
                className="w-[300px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="surface-tertiary col-span-1 row-span-1 hidden overflow-hidden rounded-2xl sm:flex">
          <img
            src="/home/creme/Snapshot_Creme_2.png"
            alt="Snapshot_CF_1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="surface-tertiary col-span-1 row-span-1 hidden overflow-hidden rounded-2xl sm:flex">
          <img
            src="/home/creme/Snapshot_Creme_3.png"
            alt="Snapshot_CF_1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="surface-tertiary col-span-2 row-span-1 rounded-2xl">
          <div className="relative flex h-full">
            <div className="z-10 flex h-full flex-col items-start justify-between p-10">
              <div className="w-2/3 flex-1">
                <div>
                  <img
                    src="/home/cf/cf_icon.png"
                    alt="icon"
                    className="h-full w-24 object-fill"
                  />
                </div>
                <h2 className="h2 mt-5">
                  {"Solutions for a more sustainable fashion industry"}
                </h2>
              </div>
              <Link href={`/projects/solutions-sustainable-fashion-industry`}>
                <button className="rounded-full bg-black px-6 py-3 text-white">
                  Discover project
                </button>
              </Link>
            </div>
            <div className="absolute bottom-0 right-8 flex h-full items-end justify-end">
              <img
                src={"/home/cf/CF_Card_Img.png"}
                alt={"Solutions for a more sustainable fashion industry"}
                className="w-[240px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="surface-tertiary col-span-1 row-span-2 hidden overflow-hidden rounded-2xl sm:flex">
          <img
            src="/home/cf/Snapshot_CF_1.png"
            alt="Snapshot_CF_1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="surface-tertiary col-span-1 row-span-1 hidden overflow-hidden rounded-2xl sm:flex">
          <img
            src="/home/cf/Snapshot_CF_2.png"
            alt="Snapshot_CF_1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="surface-tertiary col-span-1 row-span-1 hidden overflow-hidden rounded-2xl sm:flex">
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
