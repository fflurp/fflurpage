import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex w-full max-w-[540px] justify-between rounded-full border border-neutral-200 py-4 px-10">
      <div className="inline-flex items-center">
        <Link href="/">Fflur page</Link>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/">
          <span className="cursor-pointer rounded-full bg-neutral-200 px-4 py-1">
            Work
          </span>
        </Link>
        <Link href="/blog">
          <span className="cursor-pointer rounded-full py-1">ressources</span>
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
          <h2 className="pt-10 pb-4">
            I’m Fflur — Product and System Designer based in Paris
          </h2>
          <p>
            After graduating from HETIC tech school, I worked on various
            products for companies such as Clear Fashion and crème de la crème.
            I’m particularly into design systems and also enjoy crafting product
            illustrations on my spare time.{" "}
          </p>
          <div className="pt-10">Contact me</div>
        </div>
        <div>linkedin</div>
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
