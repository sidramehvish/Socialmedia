import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../Store/Post_List_Store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    addPost(userId, postTitle, postBody, reactions, tags);

    // userIdElement.current.value = "";
    // postTitleElement.current.value = "";
    // postBodyElement.current.value = "";
    // reactionsElement.current.value = "";
    // tagsElement.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div class="mb-3">
        <label htmlFor="Userid" class="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          class="form-control"
          ref={userIdElement}
          id="title"
          placeholder="Your User id"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label htmlFor="title" class="form-label">
          Post Title
        </label>
        <input
          type="text"
          class="form-control"
          ref={postTitleElement}
          id="title"
          placeholder="How are you feeling today..."
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label htmlFor="content" class="form-label">
          Post Content
        </label>
        <textarea
          rows={4}
          type="text"
          ref={postBodyElement}
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Tell us more about it"
        />
      </div>
      <div class="mb-3">
        <label htmlFor="title" class="form-label">
          No.of Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          class="form-control"
          id="title"
          placeholder="How many people reacted to this post"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label htmlFor="title" class="form-label">
          Enter Your Hashtags Here
        </label>
        <input
          type="text"
          class="form-control"
          ref={tagsElement}
          id="title"
          placeholder="Please Enter Tags Using Space"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        POST
      </button>
    </form>
  );
};
export default CreatePost;
