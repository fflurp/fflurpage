import Layout from "components/Layout";
import Link from "next/link";

type CardProps = {
  title?: string;
  link: string;
  image: string;
};

const CardBlogPost: React.FC<CardProps> = ({ title, link, image }) => {
  return (
    <div className="w-full flex-1 rounded-lg border-4 border-gray-900">
      <Link href={link}>
        <a>
          <div className="flex h-80 overflow-hidden rounded-tl-3xl rounded-tr-3xl">
            <img src={image} className="w-full object-cover" alt={title} />
          </div>
          <div className="flex h-[168px] w-full flex-col justify-between overflow-hidden rounded-bl-3xl rounded-br-3xl border-t-4 border-gray-900 bg-[#FAFBFF]/50 py-6 px-4">
            <div className="flex flex-col">
              {title ? <span className="h3 mb-4 text-sm">{title}</span> : null}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

const Blog = () => {
  return (
    <Layout>
      <div className="mt-16 mb-20">
        <h1 className="mb-6 font-title-bold text-5xl leading-[56px]">Blog</h1>
      </div>
      <div className="mb-80">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <CardBlogPost
            title={
              "Product illustration 101: How to build a scalable product illustration system"
            }
            link={"/blog/how-to-build-a-scalable-illustration-system"}
            image={"/Blog/Illustration-system/Banniere.png"}
            tags={[
              { text: "UI Design", variant: "primary" },
              { text: "Asset creation", variant: "secondary" },
            ]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
