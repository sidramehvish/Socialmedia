const Post = () => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        src="https://images.pexels.com/photos/209807/pexels-photo-209807.jpeg?cs=srgb&dl=pexels-pixabay-209807.jpg&fm=jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default Post;
