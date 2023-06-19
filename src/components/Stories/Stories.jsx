import "./index.css";
import Story from "../Story";

const Stories = ({ stories, user }) => {
  return (
    <div className="Stories">
      <ul className="Stories__List">
        {stories &&
          stories.map((story) => (
            <li className="Stories__Item" key={story.id}>
              <Story story={story} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Stories;
