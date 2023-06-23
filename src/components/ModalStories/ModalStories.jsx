import "./index.css";
import React from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function ModalStories({ stories, isOpen, closeModal, index }) {
  const [start, setStart] = useState(false);
  useEffect(() => {
    setStart(index);
  }, [index]);
  return (
    <div className={`${isOpen ? "open" : ""} ModalStories`}>
      <div className="ModalStories__Close" onClick={() => closeModal()}>
        X
      </div>

      <Swiper initialSlide={index} spaceBetween={0}>
        {stories &&
          stories?.map((userStories) => (
            <SwiperSlide key={userStories?.id}>
              <div className="ModalStories__User">
                <div className="ModalStories__User__Image">
                  <img src={userStories?.userImage} alt="" />
                </div>
                <div className="ModalStories__UserName">
                  {userStories?.username}
                </div>
              </div>
              <Swiper
                modules={[Pagination]}
                pagination={{
                  type: "progressbar",
                }}
              >
                {userStories?.stories?.map((story) => (
                  <SwiperSlide key={story?.id}>
                    {story?.type === "image" ? (
                      <img src={story?.src}></img>
                    ) : (
                      <video
                        src={story?.src}
                        playsInline
                        muted
                        autoPlay
                        loop
                      ></video>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default ModalStories;
