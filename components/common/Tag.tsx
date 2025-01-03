export const Tag: React.FC<{
  label: string;
  tagProps?: any;
}> = ({ label, tagProps }) => (
  <p
    className="text-black text-[12px] mt-1 rounded-[20px] max-w-max px-3 font-medium"
    aria-label={`tag-${label}`}
    {...tagProps}
  >
    {label}
  </p>
);
