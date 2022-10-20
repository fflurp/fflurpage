import Layout from "components/Layout";
import CTAMail from "components/CTAMail";
import Card from "components/Card";

const Blog = () => {
  return (
    <Layout>
      <div className="mt-16 mb-20">
        <h1 className="mb-6 font-title-bold text-5xl leading-[56px]">Blog</h1>
      </div>
      <div className="mb-20">
        <div className="grid gap-8 md:grid-cols-3">
          <Card
            description={
              "Product illustration 101: How to build a scalable product illustration system"
            }
            link={"/blog/how-to-build-a-scalable-illustration-system"}
            image={"/Blog/Illustration-system/Banniere.png"}
            tags={[
              { text: "UI Design", variant: "primary" },
              { text: "Asset creation", variant: "secondary" }]}
          />
        </div>
      </div>
      <CTAMail />
    </Layout>
  );
};

export default Blog;
