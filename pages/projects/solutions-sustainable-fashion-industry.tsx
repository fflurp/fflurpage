import { Chip } from "components/Chip";
import { Layout } from "components/Layout";
import ArrowLeftIcon from "components/icons/arrow-left";
import CalendarIcon from "components/icons/calendar";
import ComponentIcon from "components/icons/component";
import TagIcon from "components/icons/tag";
import UserOneIcon from "components/icons/user-1";
import Link from "next/link";

const gallery = [
  "projet2-2.png",
  "projet2-3.png",
  "projet2-4.png",
  "projet2-5.png",
  "projet2-6.png",
  "projet2-7.png",
];

const ClearFashionPage = () => {
  return (
    <Layout>
      <div>
        <button className="mb-6 flex">
          <Link href="/">
            <ArrowLeftIcon />
          </Link>
        </button>
        <span className="text-label text-secondary">CLEAR FASHION</span>
        <h1 className="h1 text-primary pt-3 ">
          Solutions for a more sustainable fashion industry
        </h1>
        <div className="mb-10 flex flex-wrap gap-4 pt-6">
          <Chip>
            <CalendarIcon />
            <span className="ml-2">2020 - 2022</span>
          </Chip>
          <Chip>
            <TagIcon />
            <span className="ml-2">B2B, Consumer app</span>
          </Chip>
          <Chip>
            <ComponentIcon />
            <span className="ml-2">Design System Foundations</span>
          </Chip>
          <Chip>
            <UserOneIcon />
            <span className="ml-2">Solo Designer</span>
          </Chip>
        </div>
        <p className="text-primary pb-10">
          Clear Fashion’s core product targets consumers trying to make more
          sustainable shopping decisions. With the mobile app, users are able to
          get a clear understanding of the environmental impact of a piece of
          clothing, anywhere and at any time. Each feature was designed to adapt
          to different stages of the shopping experience. On the other side,
          Clear Fashion offers B2B digital solutions to help fashion brands
          collect data from their supply chain and get a full understanding of
          its strengths and flaws.
        </p>
        <p className="text-primary">
          I joined the team as the founding designer and dabbled for the first
          time with a design system built from scratch. I worked mainly on the
          consumer mobile app at first, designing key features such as
          evaluation pages, brand discovery search, product scan and favorite
          list. The number of registered users increased from 100K to 300K since
          the launch of the MVP. To reach Clear Fashion’s economical goals, I
          also focused on B2B solutions such as the product evaluation form and
          widgets displayed on brand websites.
        </p>
      </div>
      <div className="flex flex-col space-y-5 pb-8 pt-40">
        <img
          src="/projects/CF/CF_1.png"
          className="h-[500px] w-full rounded-lg object-cover"
        />
        <div className="flex flex-col space-y-5 xl:flex-row xl:space-x-5 xl:space-y-0">
          <div className="w-full flex-1 xl:w-1/2">
            <img
              src="/projects/CF/CF_2.png"
              className="h-[500px] w-full rounded-lg object-cover"
            />
          </div>
          <div className="w-full flex-1 xl:w-1/2">
            <img
              src="/projects/CF/CF_3.png"
              className="h-[500px] w-full rounded-lg object-cover"
            />
          </div>
        </div>
        <img
          src="/projects/CF/CF_4.png"
          className="h-[500px] w-full rounded-lg object-cover"
        />
        <div className="flex flex-col space-y-5 xl:flex-row xl:space-x-5 xl:space-y-0">
          <div className="w-full flex-1 xl:w-1/2">
            <img
              src="/projects/CF/CF_5.png"
              className="h-[500px] w-full rounded-lg object-cover"
            />
          </div>
          <div className="w-full flex-1 xl:w-1/2">
            <img
              src="/projects/CF/CF_6.png"
              className="h-[500px] w-full rounded-lg object-cover"
            />
          </div>
        </div>
        <img
          src="/projects/CF/CF_7.png"
          className="h-[500px] w-full rounded-lg object-cover"
        />
      </div>
    </Layout>
  );
};

export default ClearFashionPage;
