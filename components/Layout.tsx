import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="border-primary flex w-full max-w-[540px] justify-between rounded-full border py-4 px-10">
      <div className="text-button inline-flex items-center">
        <Link href="/">Fflur page</Link>
      </div>
      <div className="flex items-center gap-2">
        <Link href="/">
          <span
            className={`text-primary cursor-pointer rounded-full py-1 px-4 ${
              router.pathname === "/" ? `surface-tertiary` : ``
            }`}
          >
            Work
          </span>
        </Link>
        <Link href="/blog">
          <span
            className={`text-primary cursor-pointer rounded-full py-1 px-4 ${
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

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <div className="surface-secondary border-primary border-primary flex w-full max-w-[360px] flex-col border-r p-10">
        <div className="flex-1">
          <div className="h-36 w-36 bg-neutral-100" />
          <h2 className="text-secondary h3 pt-10 pb-4">
            I’m Fflur — Product and System Designer based in Paris
          </h2>
          <p className="body-2 text-secondary">
            After graduating from HETIC tech school, I worked on various
            products for companies such as Clear Fashion and crème de la crème.
            I’m particularly into design systems and also enjoy crafting product
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
      <main className="surface-primary flex-auto overflow-auto p-10">
        <div className="flex items-center justify-center pt-5 pb-10">
          <Navigation />
        </div>
        {children}
      </main>
    </div>
  );
};
