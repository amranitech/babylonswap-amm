import React from "react";
import "./main.css";
import { ReactVideoPlayer } from 'video-player-for-react'
import 'video-player-for-react/dist/index.css'
import { Link } from "react-router-dom";

const Video = () => {
    return (
        <div className="video">
            <ReactVideoPlayer
                width='928px'
                url="./video.mp4"
                type='video/mp4'
            />
            <a href="https://t.me/BabylonSwap">Telegram</a>
        </div>
    );
}

export default Video;