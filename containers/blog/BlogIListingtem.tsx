import { LinkWrapper, Tag } from "@/components/common";
import { IBlogListingData } from "@/interface/blog";
import { colorMap } from "@/utils/colormap";
import getFormattedDate from "@/utils/utils";

interface IBlogListingItemProps {
  blogItem: IBlogListingData;
}

const BlogListingItem: React.FC<IBlogListingItemProps> = ({ blogItem }) => {
  const { id, title, slug, description, date, modified, tags, read } = blogItem;
  const formattedDate = getFormattedDate(date);

  return (
    <div className="flex flex-col gap-2 p-4 rounded-lg border-2">
      <LinkWrapper href={`/blog/${slug}`}>{title}</LinkWrapper>
      <p className="text-sm">
        {formattedDate} - {read}
      </p>
      <p className="heading4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <Tag
            label={tag}
            tagProps={{
              style: {
                backgroundColor: colorMap["full-time"],
              },
            }}
            key={`exp-${tag}-tag-${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogListingItem;
