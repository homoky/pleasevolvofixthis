type ButtonProps = {
  title: string;
  onClick: () => void;
};

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="bg-[#3E80C3] text-white font-semibold px-4 py-2 rounded"
    >
      {title}
    </button>
  );
};
