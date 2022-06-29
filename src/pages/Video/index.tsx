import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'

const Video = () => {
    return (
        <div className="video">
            <ReactPlayer controls playing url='./video.mp4' className="main" />
            <div className="tel">
                <a style={{ margin: "auto" }} href="https://t.me/BabylonSwap">Join us On Telegram</a>
            </div>
        </div>
    );
}

export default Video;