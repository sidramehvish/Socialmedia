import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../Store/Post_List_Store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div class="card post-card" style={{ width: "30rem" }}>
      <img
        src="https://images.pexels.com/photos/209807/pexels-photo-209807.jpeg?cs=srgb&dl=pexels-pixabay-209807.jpg&fm=jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => {
            deletePost(post.id);
          }}
        >
          <AiFillDelete />
        </span>
        <p class="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div class="alert alert-primary" role="alert">
          This post have {post.reactions} Reactions...
        </div>
      </div>
    </div>
  );
};
export default Post;
