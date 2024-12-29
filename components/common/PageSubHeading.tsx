export const PageSubHeading: React.FC<{
  description: string;
}> = ({ description }) => (
  <p
    className="text-[#767c75] text-[18px] font-medium font-poppins"
    style={{
      lineHeight: "normal",
    }}
  >
    {description}
  </p>
);
