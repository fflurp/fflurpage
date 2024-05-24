type ChipProps = {
  children: string | React.ReactNode;
};

export const Chip: React.FC<ChipProps> = ({ children }) => {
  return (
    <div className="text-primary surface-tertiary border-primary inline-flex items-center rounded-full border px-4 py-2">
      {children}
    </div>
  );
};
