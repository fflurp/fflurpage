import React from "react";

const Home = () => {
  return (
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
  );
};

export default Home;
