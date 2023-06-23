import { useState } from "react";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { LikeIcon } from "../../icons";

const Post = ({ post }) => {
  const { isLike } = post;
  const [like, setLike] = useState(isLike);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <article className="Post">
      <div className="PostTop">
        <div className="PostTop__User">
          <div className="User__Image">
            <img
              src={post?.userImage ? post?.userImage : ""}
              alt={post?.userName}
            />
          </div>
          <div className="User__Content">
            <p className="User__Username">{post?.userName}</p>
            <p className="User__Location">{post?.location}</p>
          </div>
        </div>
        <div className="PostTop__Actions"></div>
      </div>
      <div className="PostContent">
        <Swiper pagination={true} modules={[Pagination]}>
          {post?.media?.map((media) => (
            <SwiperSlide key={media?.id}>
              {media?.type === "image" ? (
                <img key={media?.id} src={media?.src} />
              ) : (
                <video src={media?.src} muted playsInline autoPlay loop></video>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="PostActions">
        <div onClick={() => toggleLike()} className="PostActions__Like">
          <LikeIcon fill={like && like ? "#FD1D1D" : "#262626"} />
        </div>
      </div>
    </article>
  );
};

export default Post;
