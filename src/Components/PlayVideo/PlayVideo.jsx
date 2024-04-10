import React from "react";
import dislike from "../../assets/dislike.png";
import jack from "../../assets/jack.png";
import like from "../../assets/like.png";
import save from "../../assets/save.png";
import share from "../../assets/share.png";
import user_profile from "../../assets/user_profile.jpg";
import video1 from "../../assets/video.mp4";
import "./PlayVideo.css";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} alt="" controls autoPlay muted />
      <h3>Best Youtube Channel to learn web development</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />2
            <span>
              <img src={share} alt="" />
              Share
            </span>
            <span>
              <img src={save} alt="" />
              Save
            </span>
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>PewDiePie</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning East</p>
        <p>Subscribe PewDiePie to Watch more tutorials on web development</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Akram Bakram <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication facilities of interconnected networks using
              standardized communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Akram Bakram <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication facilities of interconnected networks using
              standardized communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Akram Bakram <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication facilities of interconnected networks using
              standardized communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Akram Bakram <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication facilities of interconnected networks using
              standardized communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Akram Bakram <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication facilities of interconnected networks using
              standardized communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Akram Bakram <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication facilities of interconnected networks using
              standardized communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Akram Bakram <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication facilities of interconnected networks using
              standardized communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
