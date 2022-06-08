import React, { useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import CreateIcon from "@mui/icons-material/Create";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
function Feed() {
  const [posts, setPosts] = useState([]);
  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#7085F9" />
          <InputOption
            Icon={SubscriptionsIcon}
            title="Videos"
            color="#E7A33E"
          />
          <InputOption Icon={EventNoteIcon} title="Events" color="#C0CBC0" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Post */}
      {posts.map((post) => {
        <Post />;
      })}
      <Post name="Sana Iqbal" description="This is test" message="Wow great!" />
    </div>
  );
}

export default Feed;
