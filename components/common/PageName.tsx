export const PageName: React.FC<{
  label: string;
}> = ({ label }) => (
  <p
    style={{ lineHeight: "normal" }}
    className="text-[#0a0a0a] text-[32px] font-semibold font-poppins"
  >
    {label}
  </p>
);
