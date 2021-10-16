import { BlogListItemContainer } from "../../styles/BlogListItemContainer";
import { BlogListItem } from "./BlogListItem";

export const BlogList = (props) => {
  const list = props?.list;

  const listItems = list.map((item) => (
    <BlogListItem key={item.id} value={item} />
  ));

  return (
    <BlogListItemContainer>
      <ul className="list pl0">{listItems}</ul>
    </BlogListItemContainer>
  );
};
