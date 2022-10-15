import Layout from "components/Layout";
import CTAMail from "components/CTAMail";
import Card from "components/Card";

const Blog = () => {
  return (
    <Layout>
      <div className="mt-16 mb-20">
        <h1 className="mb-6 font-title-bold text-5xl">Blog</h1>
        <p className="text-xl">
          Sharing my thoughts about UI best practices, digital content creation
          and online branding
        </p>
      </div>
      <div className="mb-20">
        <div className="grid gap-8 md:grid-cols-3">
          <Card
            description={
              "Product illustration 101: How to build a scalable product illustration system"
            }
            link={"/blog/how-to-build-a-scalable-illustration-system"}
            image={"/Blog/Illustration-system/Banniere.png"}
            tags={[{ text: "UI Design", variant: "primary" }]}
          />
        </div>
      </div>
      <CTAMail />
    </Layout>
  );
};

export default Blog;
