type ChipProps = {
  children: string;
};

export const Chip: React.FC<ChipProps> = ({ children }) => {
  return (
    <div className="text-primary surface-tertiary border-primary rounded-lg border py-2 px-4">
      {children}
    </div>
  );
};
