import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="border-primary flex w-full max-w-[540px] justify-between rounded-full border px-10 py-4">
      <div className="text-button inline-flex items-center">
        <Link href="/">Fflur page</Link>
      </div>
      <div className="flex items-center gap-2">
        <Link href="/">
          <span
            className={`text-primary cursor-pointer rounded-full px-4 py-1 ${
              router.pathname === "/" ? `surface-tertiary` : ``
            }`}
          >
            Work
          </span>
        </Link>
        <Link href="/blog">
          <span
            className={`text-primary cursor-pointer rounded-full px-4 py-1 ${
              router.pathname === "/blog" ? `surface-tertiary ` : ``
            }`}
          >
            Blog
          </span>
        </Link>
      </div>
    </nav>
  );
};

const SideBarDesktop = () => {
  return (
    <div className="surface-secondary border-primary border-primary hidden w-full max-w-[360px] flex-col border-r p-10 md:flex">
      <div className="flex-1">
        <div className="h-36 w-36 bg-neutral-100" />
        <h2 className="text-secondary h3 pb-4 pt-10">
          I’m Fflur — Product and System Designer based in Paris
        </h2>
        <p className="body-2 text-secondary">
          After graduating from HETIC tech school, I worked on various products
          for companies such as Clear Fashion and crème de la crème. I’m
          particularly into design systems and also enjoy crafting product
          illustrations on my spare time.{" "}
        </p>
        <div className="pt-10">Contact me</div>
      </div>
      <div className="flex gap-2">
        <span>logo</span>
        <span>logo</span>
        <span>logo</span>
      </div>
    </div>
  );
};

const CardMobile = () => {
  return (
    <div className="surface-secondary border-primary border-primary flex w-full flex-col border-r p-10 md:hidden ">
      <div className="flex-1">
        <div className="h-36 w-36 bg-neutral-100" />
        <h2 className="text-secondary h3 pb-4 pt-10">
          I’m Fflur — Product and System Designer based in Paris
        </h2>
        <p className="body-2 text-secondary">
          After graduating from HETIC tech school, I worked on various products
          for companies such as Clear Fashion and crème de la crème. I’m
          particularly into design systems and also enjoy crafting product
          illustrations on my spare time.{" "}
        </p>
        <div className="pt-10">Contact me</div>
      </div>
      <div className="flex gap-2">
        <span>logo</span>
        <span>logo</span>
        <span>logo</span>
      </div>
    </div>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full min-h-screen flex-col md:flex-row">
      <SideBarDesktop />
      <main className="surface-primary flex-auto overflow-auto p-10">
        {/* <div className="flex items-center justify-center pb-10 pt-5">
          <Navigation />
        </div> */}
        {children}
      </main>
      <CardMobile />
    </div>
  );
};
