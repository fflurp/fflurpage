import Link from "next/link";
import Image from "next/image";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-screen-lg px-8 mx-auto">
      <header className="py-6">
        <nav className="w-full flex justify-between items-center">
          <Link href="/">
            <a>
              <div className="flex items-center">
                <div className="w-8 mr-4">
                  <Image src="/home/Icon.png" width="182" height="266" />
                </div>
                <span className="uppercase font-bold">Fflur page</span>
              </div>
            </a>
          </Link>
          <div>
            <Link href="/product-design">
              <a className="mr-10">Product Design</a>
            </Link>{" "}
            <Link href="/illustrations">
              <a className="mr-10">Illustration</a>
            </Link>
            <a target="_blank" rel="noreferrer" className="">
              Blog posts
            </a>
          </div>
        </nav>
      </header>
      {children}
      <footer className="flex justify-between mb-10">
        <div>© Fflur Page {new Date().getFullYear()}</div>
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

export default Layout;
