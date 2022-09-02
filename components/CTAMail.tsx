const Button: React.FC<{ children: string }> = ({ children }) => {
  return (
    <button className="bg-neutral-900 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};

const CTAMail = () => {
  return (
    <section className="text-center py-80">
      <div>
        <h2 className="text-2xl mb-2">Need an impactful design?</h2>
        <p className="mb-2">{`I'd be happy to help.`}</p>
        <a href="mailto:fflur.page@gmail.com">
          <Button>{`Let's talk`}</Button>
        </a>
      </div>
    </section>
  );
};

export default CTAMail;
