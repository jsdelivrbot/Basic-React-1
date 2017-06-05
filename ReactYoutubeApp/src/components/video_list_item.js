import React from 'react';

const VideoListItem = ({video,list}) =>{

    const imgUrl=video.snippet.thumbnails.default.url;
    
    return(<div className="video-item">
                <li onClick={() => list(video)} className="list-group-item">
                    <div className="video-list media">
                        <div className="media-left">
                            <img className="media-object" src={imgUrl}/>
                        </div>
                        <div className="media-body">
                            <div className="media-heading">{video.snippet.title}</div>
                        </div>
                    </div>
                </li>
            </div>
          );
    
    
}

export default VideoListItem;