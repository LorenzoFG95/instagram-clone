import "./index.css";

import Post from "../Post";

const Posts = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts?.map((post) => (
          <li className="post_inlist" key={post?.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
