import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-screen-lg px-8 mx-auto">
      <header className="py-6">
        <nav className="w-full flex justify-between">
          <Link href="/">
            <a>Fflur page</a>
          </Link>
          <a>Blog posts</a>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
