import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <div className="flex w-full max-w-[360px] flex-col p-10">
        <div className="flex-1">
          <div className="h-36 w-36 bg-red-500" />
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
      <main className="flex-auto overflow-auto">{children}</main>
    </div>
  );
};

const Home = () => {
  return (
    <Layout>
      <div className="flex auto-rows-[minmax(405px,_auto)] flex-col gap-5 md:grid">
        <div className="row-span-2 bg-neutral-300">1</div>
        <div className="bg-neutral-300 ">2</div>
        <div className="bg-neutral-300 ">3</div>
        <div className=" bg-neutral-300">4</div>
        <div className="bg-neutral-300">5</div>
        <div className="row-start-3 bg-neutral-300">6</div>
        <div className="row-start-3 bg-neutral-300">7</div>
        <div className="row-start-3 bg-neutral-300">8</div>
        <div className="col-span-2 row-start-4 bg-neutral-300">9</div>
        <div className="bg-neutral-300">10</div>
      </div>
    </Layout>
  );
};

export default Home;
