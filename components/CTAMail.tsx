const Button: React.FC<{ children: string }> = ({ children }) => {
  return (
    <button
      className="fp-background-black rounded-lg py-3 px-10 font-title font-bold leading-6 text-white transition-all
hover:bg-[#3a3d50]"
    >
      {children}
    </button>
  );
};

const CTAMail = () => {
  return (
    <section className="pt-40 pb-80 text-center md:py-80">
      <div>
        <h2 className="mb-6 font-title-bold text-3xl">
          Need some dazzling digital assets or interfaces?
        </h2>
        <a href="mailto:fflur.page@gmail.com">
          <Button>{`Get in touch 📡`}</Button>
        </a>
      </div>
    </section>
  );
};

export default CTAMail;
