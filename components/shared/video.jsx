// components/VideoPlayer.js
import React from 'react'

const VideoPlayer = () => {
    return (
        <div className="  w-full h-screen ">
            <video
                className="w-full h-full object-cover"
                src="/appbanner.mp4"
                title="Video player"
                autoPlay
                loop
                muted
            />
        </div>
    )
}

export default VideoPlayer
