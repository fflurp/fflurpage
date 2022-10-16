const Button: React.FC<{ children: string }> = ({ children }) => {
  return (
    <button className="rounded bg-neutral-700 py-2 px-10 font-title font-bold leading-6 text-white transition-all hover:bg-neutral-600">
      {children}
    </button>
  );
};

const CTAMail = () => {
  return (
    <section className="pt-40 pb-80 text-center md:py-80">
      <div>
        <h2 className="mb-6 font-title-bold text-3xl">
          Want your digital product to stand out?
        </h2>
        <p className="mb-10">{`Make it extra satisfying for your users 🧁`}</p>
        <a href="mailto:fflur.page@gmail.com">
          <Button>{`Let's talk`}</Button>
        </a>
      </div>
    </section>
  );
};

export default CTAMail;
