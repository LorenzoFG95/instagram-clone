import { useState } from "react";
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import { storiesData } from "./mocks/stories";
import { userData } from "./mocks/user";
import { postData } from "./mocks/posts";
import "./App.css";

function App() {
  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postData);

  return (
    <>
      <TopBar />
      <Stories stories={stories} user={user} />
      <Posts posts={posts} />
    </>
  );
}

export default App;
