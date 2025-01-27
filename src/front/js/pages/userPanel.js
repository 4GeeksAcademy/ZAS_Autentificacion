import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const UserPanel = () => {
    const { store } = useContext(Context);
    const { data, actions, setStore } = useContext(Context);

   
    

    const user = store.user || { name: "Guest" };


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                <video
						loop
						muted
						autoPlay
						src="https://scontent-iad3-1.cdninstagram.com/o1/v/t16/f2/m82/AQPaTer6hVyK_1uRlIAYpPu-Q1216a70nKK5rX-_cdJ2rWt7Yrp4DhLXzmUw7dabzvP3iijnOBPTzH1SbJOlOKUKuAxzG_-xBsyQpjY.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=105&vs=3795337130696340_676545047&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9BMjQ4RjlFRUMyQTI0QjI3QzE1QzUyOTE4NTRERjQ4NV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dPVUV2UnBhZW9kT19HTUJBQ2dxVFgzMzRSRlNicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJo73gL2qrdI%2FFQIoAkMzLBdAZoEOVgQYkxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYC-E1Fkskb-29rJfeL-dWhQWlE3J2-QGfx6KUT789rD7Q&oe=679859EA&_nc_sid=1d576d"
						type="video/mp4"
						className="video-background"
					>
					</video>
                    
                    <h1 className="centered-text-panel">♥</h1>
                    <h1 className="welcomeUser">Welcome {user.name}</h1>
                    
                </div>
            </div>
        </div>
    );
}