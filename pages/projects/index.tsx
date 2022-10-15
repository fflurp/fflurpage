import Layout from "components/Layout";
import CTAMail from "components/CTAMail";
import Card from "components/Card";

const Work = () => {
  return (
    <Layout>
      <div className="mt-16 mb-20">
        <h1 className="mb-6 font-title-bold text-5xl">Projects</h1>
        <p className="text-xl">
          I work on user interface design, visual content creation and online
          branding. Check out the projects I’ve worked on so far! 👀
        </p>
      </div>
      <div className="mb-20">
        <div className="grid gap-8 md:grid-cols-3">
          <Card
            title={"Clear Fashion"}
            description={"Clear Fashion"}
            link={"/projects/clear-fashion-product"}
            image={"/cf/ProductDesign_banner.png"}
            tags={[
              { text: "UI Design", variant: "primary" },
              { text: "Illustration", variant: "secondary" },
              { text: "Branding", variant: "tertiary" },
              { text: "Product Design", variant: "primary" },
            ]}
          />
          <Card
            title={"Clear Fashion"}
            description={"Clear Fashion"}
            link={"/works"}
            image={"/cf/ProductDesign_banner.png"}
            tags={[
              { text: "UI Design", variant: "primary" },
              { text: "Illustration", variant: "secondary" },
            ]}
          />
          <Card
            title={"Clear Fashion"}
            description={"Clear Fashion"}
            link={"/works"}
            image={"/cf/ProductDesign_banner.png"}
            tags={[
              { text: "UI Design", variant: "primary" },
              { text: "Illustration", variant: "secondary" },
            ]}
          />
          <Card
            title={"Clear Fashion"}
            description={"Clear Fashion"}
            link={"/works"}
            image={"/cf/ProductDesign_banner.png"}
            tags={[
              { text: "UI Design", variant: "primary" },
              { text: "Illustration", variant: "secondary" },
            ]}
          />
          <Card
            title={"Clear Fashion"}
            description={"Clear Fashion"}
            link={"/works"}
            image={"/cf/ProductDesign_banner.png"}
            tags={[
              { text: "UI Design", variant: "primary" },
              { text: "Illustration", variant: "secondary" },
            ]}
          />
        </div>
      </div>
      <CTAMail />
    </Layout>
  );
};

export default Work;
