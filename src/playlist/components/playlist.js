import React from 'react'
import Media from "./media";
import './playlist.css';

function PlayList(props) {
    return(
        <div className="Playlist">
            {
                props.playlist.map((item)=>{
                    return <Media
                        openModal={props.handleOpenModal}
                        {...item}
                        key={item.id}/>
                })
            }

        </div>
    )
}

export default PlayList;