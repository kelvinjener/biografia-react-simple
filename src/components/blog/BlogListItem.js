import { BlogListItemContainer } from "../../styles/BlogListItemContainer"
export const BlogListItem = (props) => {
  return (
    <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
      <h2 className="blue">{props.value?.title}</h2>
      <span>{props.value?.text}</span>
    </li>
  );
};
