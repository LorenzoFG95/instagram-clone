import { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Camera from "./components/Camera/Camera";
import Messages from "./components/Messages";
import { storiesData } from "./mocks/stories";
import { userData } from "./mocks/user";
import { postData } from "./mocks/posts";
import "./App.css";

function App() {
  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postData);

  const [section, setSection] = useState("home");
  const [camera, setCamera] = useState(false);

  useEffect(() => {
    fetch("https://api.npoint.io/c59d0538fafba6432ffe")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  useEffect(() => {
    fetch("https://api.npoint.io/3cdebc31afd672c20853")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);
  useEffect(() => {
    fetch("https://api.npoint.io/18db3690f8518d4265af")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const onSectionRender = () => {
    switch (section) {
      case "home":
        return (
          <>
            <Stories user={user} stories={stories} />
            <Posts posts={posts} />
          </>
        );
      case "camera":
        return <Camera camera={camera} setCamera={setCamera} />;
      case "tv":
        return <h1>TVVVVV</h1>;
      case "messages":
        return <Messages />;
    }
  };

  return (
    <>
      <TopBar setSection={setSection} setCamera={setCamera} />
      {onSectionRender()}
    </>
  );
}

export default App;
