const Button: React.FC<{ children: string }> = ({ children }) => {
  return (
    <button className="transition-all font-title bg-neutral-700 hover:bg-neutral-700/75 text-white font-bold py-2 px-10 rounded leading-6">
      {children}
    </button>
  );
};

const CTAMail = () => {
  return (
    <section className="text-center py-80">
      <div>
        <h2 className="text-3xl font-title-bold mb-6">
          Need an impactful design?
        </h2>
        <p className="mb-10">{`I'd be happy to help.`}</p>
        <a href="mailto:fflur.page@gmail.com">
          <Button>{`Let's talk`}</Button>
        </a>
      </div>
    </section>
  );
};

export default CTAMail;
