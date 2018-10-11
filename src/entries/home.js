import React from 'react';
import {render} from 'react-dom';
//import PlayList from "./src/playlist/components/playlist";
//import Media from "./src/playlist/components/media";
import data from '../../src/api.json'
import Home from "../pages/containers/home";



const app = document.getElementById('home-container')

//ReactDOM.render(que voy a renderizar, donde lo haré):
//const holaMundo = <h1>hola mundo12fdf</h1>;
//render(<PlayList type="video" title="Que es responsive Design?" author="Miguel Triana" image="./images/covers/responsive.jpg"/>,app);
render(<Home data={data}/>, app)