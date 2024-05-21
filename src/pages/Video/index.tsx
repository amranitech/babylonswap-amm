import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'

const Video = () => {
    return (
        <script src="https://askelliebots.blob.core.windows.net/askelliefiles/widget-integration-233.js"></script>
        <div className="video">
            <ReactPlayer controls playing url='./video.mp4' className="main" />
            <div className="tel">
                <a className="tel-btn" href="https://t.me/BabylonSwap">Join us On Telegram</a>
            </div>
        </div>
    );
}

export default Video;
