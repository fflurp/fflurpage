import Link from "next/link";
import Image from "next/image";
import React, { forwardRef } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-xl px-8">
      <header className="py-6">
        <nav className="flex w-full items-center justify-between">
          <Link href="/">
            <a>
              <div className="flex items-center">
                <div className="mr-4 w-8">
                  <Image src="/home/Icon.png" width="182" height="266" />
                </div>
                <span className="hidden font-title-bold text-sm uppercase sm:block">
                  Fflur page
                </span>
              </div>
            </a>
          </Link>
          <div>
            <Link href="/product-design">
              <LinkFP className="mr-10 font-title text-sm">
                Product Design
              </LinkFP>
            </Link>{" "}
            <Link href="/illustrations">
              <LinkFP className="mr-10 font-title text-sm">Illustration</LinkFP>
            </Link>
            <LinkFP
              href="https://medium.com/@fflurpage"
              target="_blank"
              rel="noreferrer"
              className="font-title text-sm"
            >
              Blog posts{"  ✍️"}
            </LinkFP>
          </div>
        </nav>
      </header>
      {children}
      <footer className="mb-10 flex justify-between">
        <div className="font-title">
          © Fflur Page {new Date().getFullYear()}
        </div>
        <div className="flex gap-4">
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
