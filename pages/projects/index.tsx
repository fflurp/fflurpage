import Layout from "components/Layout";
import CTAMail from "components/CTAMail";
import Card from "components/Card";

const Work = () => {
  return (
    <Layout>
      <div className="mt-16 mb-20">
        <h1 className="mb-6 font-title-bold text-5xl leading-[56px]">
          Projects
        </h1>
        <p className="text-xl">
          I work on user interface design, visual content creation and online
          branding.
        </p>
        <p className="text-xl">
          Check out the projects I’ve worked on so far! 👀
        </p>
      </div>
      <div className="mb-20">
        <div className="grid gap-8 md:grid-cols-3">
          <Card
            title="CLEAR FASHION"
            description={"Mobile, web app and widget design "}
            link={"/projects/clear-fashion-product"}
            image={"/Project/CF-UI/Banniere/CF_UI_BANNER-2.png"}
            tags={[{ text: "UI Design", variant: "primary" }]}
          />
          <Card
            title="CLEAR FASHION"
            description={"Illustation set for Clear Fashion’s mobile app "}
            link={"/projects/clear-fashion-illustration"}
            image={"/Project/CF-illu/Banniere/CF_illu_BANNER-2.png"}
            tags={[
              { text: "Content creation", variant: "secondary" },
              { text: "UI Design", variant: "primary" },
            ]}
          />
          <Card
            title="DELPHEE"
            description={"Social media branding and illustrations"}
            link={"/projects/delphee"}
            image={"/Project/Delphee/Banniere/Delphee_BANNER-2.png"}
            tags={[
              { text: "Content creation", variant: "secondary" },
              { text: "Online branding", variant: "tertiary" },
            ]}
          />
          <Card
            title="FFLUR PAGE"
            description={
              "Fun 90’s themed illustration set for personal branding"
            }
            link={"/projects/fflur-page"}
            image={"/Project/Fflur/Banniere/Fflur_BANNER-2.png"}
            tags={[
              { text: "Content creation", variant: "secondary" },
              { text: "Online branding", variant: "tertiary" },
              { text: "UI Design", variant: "primary" },
            ]}
          />
        </div>
      </div>
      <CTAMail />
    </Layout>
  );
};

export default Work;
