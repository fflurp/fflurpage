import { Layout } from "components/Layout";
import Link from "next/link";

const ButtonArrowRight = () => {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-mountain-700 px-6 font-medium text-mountain-100">
      <div className="mr-0 w-0 -translate-x-[100%] opacity-0 transition-all duration-200 group-hover:mr-1 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <span>Discover project</span>
    </button>
  );
};

const Home = () => {
  return (
    <Layout>
      <div className="grid h-full grid-cols-2 grid-rows-[540px] gap-5 md:grid-cols-3 md:grid-rows-[320px]">
        <div className="surface-tertiary col-span-1 row-span-2 hidden overflow-hidden rounded-2xl sm:flex">
          <img
            src="/home/creme/Snapshot_Creme_1.png"
            alt="Snapshot_Creme_1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="surface-tertiary order-first col-span-2 row-span-1 overflow-hidden rounded-2xl md:order-none">
          <div className="relative flex h-full">
            <div className="z-10 flex h-0 flex-col items-start justify-between p-6 md:h-full md:p-10">
              <div className="w-full flex-1 lg:w-1/2">
                <div className="flex justify-center md:justify-start">
                  <img
                    src="/home/creme/creme_icon.png"
                    alt="icon"
                    className="h-full w-24 object-fill"
                  />
                </div>
                <h2 className="h2 mt-5 text-center md:text-left">
                  {"Matching top-tier freelancers with company needs"}
                </h2>
              </div>
              <div className="mt-6 flex w-full justify-center md:justify-start">
                <Link
                  href={`/projects/matching-top-tier-freelancers-company-needs`}
                >
                  <div>
                    <ButtonArrowRight />
                  </div>
                </Link>
              </div>
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
        <div className="surface-tertiary col-span-2 row-span-1 h-[540px] rounded-2xl md:h-full">
          <div className="relative flex h-full">
            <div className="z-10 flex h-0 flex-col items-start justify-between p-6 md:h-full md:p-10">
              <div className="w-full flex-1 lg:w-1/2">
                <div className="flex justify-center md:justify-start">
                  <img
                    src="/home/cf/cf_icon.png"
                    alt="icon"
                    className="h-full w-24 object-fill"
                  />
                </div>
                <h2 className="h2 mt-5 text-center md:text-left">
                  {"Solutions for a more sustainable fashion industry"}
                </h2>
              </div>
              <div className="mt-6 flex w-full justify-center md:justify-start">
                <Link href={`/projects/solutions-sustainable-fashion-industry`}>
                  <div>
                    <ButtonArrowRight />
                  </div>
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 flex h-full w-full items-end justify-center md:right-8 md:justify-end">
              <img
                src={"/home/cf/CF_Card_Img.png"}
                alt={"Solutions for a more sustainable fashion industry"}
                className="w-[180px] object-contain md:w-[240px]"
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
        <div />
        <div className="text-primary mb-10 mt-40 hidden text-center xl:flex xl:justify-center">
          © fflur page {new Date().getFullYear()}
        </div>
        <div />
      </div>
    </Layout>
  );
};

export default Home;
