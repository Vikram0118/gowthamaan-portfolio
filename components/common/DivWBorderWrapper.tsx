import clsx from "clsx";

export const DivWBorderWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={clsx("border-l-2 border-solid pl-4", className)}
      style={{
        borderImageSlice: 1,
        borderImageSource: "linear-gradient(180deg, #000000 0%, #b2b2b2 100%)",
      }}
    >
      {children}
    </div>
  );
};
