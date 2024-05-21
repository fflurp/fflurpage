import { Layout } from "components/Layout";
import { Chip } from "components/Chip";
import ArrowLeftIcon from "components/icons/arrow-left";
import Link from "next/link";
import CalendarIcon from "components/icons/calendar";
import TagIcon from "components/icons/tag";
import ComponentIcon from "components/icons/component";
import UserOneIcon from "components/icons/user-1";

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
        <span className="text-label text-secondary">crème de la crème</span>
        <h1 className="h1 text-primary pt-3">
          Matching top-tier freelancers with company needs
        </h1>
        <div className="mb-10 flex gap-4 pt-6">
          <Chip>
            <CalendarIcon />
            <span className="ml-2">2023 - Now</span>
          </Chip>
          <Chip>
            <TagIcon />
            <span className="ml-2">B2B, Saas</span>
          </Chip>
          <Chip>
            <ComponentIcon />
            <span className="ml-2">Multi-platform Design System</span>
          </Chip>
          <Chip>
            <UserOneIcon />
            <span className="ml-2">Solo Designer</span>
          </Chip>
        </div>
        <p className="text-primary pb-10">
          Amongst all the freelancing platforms, crème de la crème is probably
          the most selective. With a focus on digital skills in the product,
          tech, marketing and data fields, one of the main difference with its
          competitors is that freelancers that join the community are
          “hand-picked” by the team after their application. On the other hand,
          companies get full care and support from their assigned business
          manager to source the best freelancers out there.
        </p>
        <p className="text-primary">
          When I joined the product team, there had been no designer for a
          while. Picture a Product Manager, a CTO and 4 fullstack developers
          doing all they possibly can to implement new features from scratch,
          with a 5 years old Sketch file as reference. As a solo designer, I got
          to work on the research and mockup production for all three products :
          the freelancer platform, company platform and sales back-office. In
          addition to that, I tackled the structuration and documentation of a
          multi-platform design system on Figma, using the components developers
          had documented on Storybook overtime as a starting point.{" "}
        </p>
      </div>
      <div className="flex flex-col space-y-5 pb-8 pt-40">
        <img
          src="/projects/Creme/Creme_1.png"
          className="h-[500px] w-full rounded-lg object-cover"
        />
        <img
          src="/projects/Creme/Creme_2.png"
          className="h-[500px] w-full rounded-lg object-cover"
        />
        <img
          src="/projects/Creme/Creme_3.png"
          className="h-[500px] w-full rounded-lg object-cover"
        />
        <div className="flex space-x-5">
          <img
            src="/projects/Creme/Creme_4.png"
            className="h-[500px] w-full rounded-lg object-cover"
          />
          <img
            src="/projects/Creme/Creme_5.png"
            className="h-[500px] w-full rounded-lg object-cover"
          />
        </div>
        <img
          src="/projects/Creme/Creme_6.png"
          className="h-[500px] w-full rounded-lg object-cover"
        />
        <img
          src="/projects/Creme/Creme_7.png"
          className="h-[500px] w-full rounded-lg object-cover"
        />
      </div>
    </Layout>
  );
};

export default ClearFashionPage;
