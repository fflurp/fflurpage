import Link from "next/link";
import { useRouter } from "next/router";
import CopyIcon from "./icons/copy";
import { useState } from "react";
import CheckedIcon from "./icons/checked";
import LinkedinIcon from "./icons/linkedin";
import XIcon from "./icons/x";
import ReadCVIcon from "./icons/readcv";

const linkedinUrl = "https://www.linkedin.com/in/fflurpage";
const readCvUrl = "https://read.cv/fflurp";
const xUrl = "https://twitter.com/fflurpage";

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
const ButtonContactMe = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const email = "fflur.page@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess(true);

      setTimeout(() => {
        setCopySuccess(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <div
      className="border-primary surface-primary flex cursor-pointer rounded border py-2"
      onClick={copyToClipboard}
    >
      <div className="text-button text-secondary px-4">Contact me</div>
      <hr className="border-primary h-6 w-[0.5px] border" />
      <div className="relative ml-4 px-4">
        <div
          className={`absolute inset-0 flex w-[180px] transform items-center transition-all duration-300 ${
            !copySuccess ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <CheckedIcon />
          <span className="body-2 text-secondary pl-2">Copied!</span>
        </div>
        <div
          className={`absolute inset-0 flex w-[180px] transform items-center transition-all duration-300 ${
            !copySuccess ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <CopyIcon />
          <span className="body-2 text-secondary pl-2">Copy e-mail</span>
        </div>
      </div>
    </div>
  );
};

const SideBarDesktop = () => {
  return (
    <div className="surface-secondary border-primary border-primary hidden w-full min-w-[360px] flex-col border-r p-10 xl:flex">
      <div className="flex-1">
        <img src="/Fflur.png" alt="Fflur" className="h-36 w-36" />
        <h2 className="text-secondary h3 pb-4 pt-10">
          I’m Fflur — Product and System Designer based in Paris
        </h2>
        <p className="body-2 text-secondary">
          After graduating from HETIC tech school, I worked on various products
          for companies such as Clear Fashion and crème de la crème. I’m
          particularly into design systems and also enjoy crafting product
          illustrations on my spare time.{" "}
        </p>
        <div className="pt-10 ">
          <ButtonContactMe />
        </div>
      </div>
      <div className="flex gap-2">
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          <LinkedinIcon />
        </a>
        <a href={readCvUrl} target="_blank" rel="noreferrer">
          <XIcon />
        </a>
        <a href={xUrl} target="_blank" rel="noreferrer">
          <ReadCVIcon />
        </a>
      </div>
    </div>
  );
};

const CardMobile = () => {
  return (
    <div className="surface-secondary border-primary border-primary flex w-full flex-col border-r p-10 xl:hidden ">
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
        <div className="pt-10">
          <ButtonContactMe />
        </div>
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
    <div className="flex h-full min-h-screen flex-col xl:flex-row">
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
