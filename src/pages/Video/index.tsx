import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'
import Script from 'next/script'

const Video = () => {
    return (
        <div className="video">
               <ReactPlayer controls playing url='./video.mp4' className="main" />
            <div className="tel">
                <a className="tel-btn" href="https://t.me/NabilAmrani">Join us On Telegram</a>
            </div>
        </div>
    );
}

export default Video;
