import Link from "next/link";
import Image from "next/image";
import React, { forwardRef } from "react";

interface LayoutProps {
  children: React.ReactNode;
  hero?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, hero }) => {
  return (
    <div className="fp-background-cream fp-text-black">
      <header className="mx-auto max-w-screen-xl py-6 px-8">
        <nav className="flex w-full items-center justify-between">
          <Link href="/">
            <a>
              <div className="flex items-center">
                <span className="text7">fflur page</span>
              </div>
            </a>
          </Link>
          <div>
            <Link href="/blog">
              <LinkFP className="text4 sm:mr-10">Blog posts{"  ✍️"}</LinkFP>
            </Link>
          </div>
        </nav>
      </header>
      {hero ? <div className="flex h-[222px] md:h-[444px]">{hero}</div> : null}
      <main className="mx-auto max-w-screen-xl px-4 md:px-8">{children}</main>
      <footer className="relative">
        <div className="z-10 mx-auto flex max-w-screen-xl justify-between px-8">
          <div className="z-10 mb-10 font-title">
            © fflur page {new Date().getFullYear()}
          </div>
          <div className="mb-10 flex gap-4">
            <a
              href="https://www.linkedin.com/in/fflurpage/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/Linkedin.png" width={24} height={24} />
            </a>
            <a
              href="https://twitter.com/fflurpage"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/Twitter.png" width={24} height={24} />
            </a>
            <a
              href="https://dribbble.com/fflurpage"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/Dribbble.png" width={24} height={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

type LinkFPProps = {
  children: React.ReactNode;
  href?: string;
  className: string;
} & React.ComponentPropsWithRef<"a">;

// eslint-disable-next-line react/display-name
const LinkFP = forwardRef<HTMLAnchorElement, LinkFPProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={`${className}
          cursor-pointer
          bg-gradient-to-r from-neutral-800 to-neutral-600
          bg-[length:0px_1px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_1px]`}
        {...props}
      >
        {children}
      </a>
    );
  }
);

export default Layout;
