import { Layout } from "components/Layout";

const gallery = [
  "projet2-2.png",
  "projet2-3.png",
  "projet2-4.png",
  "projet2-5.png",
  "projet2-6.png",
  "projet2-7.png",
];

const Label = () => {
  return <div className="rounded-lg bg-neutral-50 py-2 px-4">2023 - Now</div>;
};

const ClearFashionPage = () => {
  return (
    <Layout>
      <div>
        <span>crème de la crème</span>
        <h1 className="pt-3">
          Matching top-tier freelancers with company needs
        </h1>
        <div className="mb-10 flex gap-4 pt-6">
          <Label />
          <Label />
          <Label />
          <Label />
          <Label />
        </div>
        <p className="pb-10">
          Amongst all the freelancing platforms, crème de la crème is probably
          the most selective. With a focus on digital skills in the product,
          tech, marketing and data fields, one of the main difference with its
          competitors is that freelancers that join the community are
          “hand-picked” by the team after their application. On the other hand,
          companies get full care and support from their assigned business
          manager to source the best freelancers out there.
        </p>
        <p>
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
      <div className="pb-8 pt-40">
        <img
          src={`/Project/Projet2/projet2-1.png`}
          className="h-[500px] w-full rounded-lg object-cover"
        />
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {gallery.map((img, index) => {
          return (
            <div key={index} className="flex overflow-hidden rounded-lg">
              <img
                src={`/Project/Projet2/${img}`}
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default ClearFashionPage;
