import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const words = ["HOLA", "4GEEKS", "ESTE", "EJERCICIO", "ES", "EL", "ULTIMO", "PARA", "ACABAR", "EL", "CURSO", "DE", "FULLSTACK", "DEVELOPER", "MUCHAS", "GRACIAS","GRACIAS!","GRACIAS!!","GRACIAS!!!", ];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 300);

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

	return (

		

			<div className="text-center mt-5">
				<div className="container vid">
					<video
						loop
						muted
						autoPlay
						src="https://scontent-iad3-1.cdninstagram.com/o1/v/t16/f2/m69/AQN3feHdpMuRLc3jlIWXgUKN3nYwFqCfhck2tvK2_tqslc-BG8Z34hD5vfFUzB8kXqoOMDN_Pz5uUIbFj2j0hA02?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNhcm91c2VsX2l0ZW0udW5rbm93bi1DMy43MjAuZGFzaF9iYXNlbGluZV8xX3YxIn0&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=104&vs=1743044673132266_174191921&_nc_vs=HBkcFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRGZBZkJ2OVdZbEtXYXdFQU5aODlhWGxMUjR5YmtZTEFBQUYVAALIAQAoABgAGwGIB3VzZV9vaWwBMRUAACbQ%2FtaQgpikQBUCKAJDMywXQDQAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAde4HAA%3D%3D&ccb=9-4&oh=00_AYDYqjWE6ce_wL5xyJ-0btxMy3LPpQvpyGM4BMUtTU3C-Q&oe=6797E4B8&_nc_sid=1d576d"
						type="video/mp4"
						className="video-background"
					>
					</video>

					<div className="content">
					<h1 className="centered-text">{words[currentWordIndex]}</h1>
					</div>

				</div>
				</div>
			);
};
