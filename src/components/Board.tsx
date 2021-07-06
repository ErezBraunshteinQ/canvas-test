import React from 'react';
import DrawingBoard from "./DrawingBoard";
import './Board.css';
import config from './../config/config.json';
// import img from '../res/images/1.png';


export const Board: React.FC = () => {

    let imagesUrls: string[] = [];


    // get the history object for this drawing board  
    try {

        // imagesUrls.push(config[1].image_url);
        // imagesUrls.push(config[2].image_url);
    }
    catch (ex) {

        console.debug(`Falied to get images urls from the config file`);
    }


    return (
        <div className="board-Grid">
            {
                config.images.map((imageKey, index) => (
                    <DrawingBoard index={index} imageUrl={imageKey.image_url} />
                ))
            }
            {/* <DrawingBoard index={1} imageUrl={img} />
            <DrawingBoard index={2} imageUrl="../res/images/sensor.png" />
            <DrawingBoard index={3} imageUrl="./res/images/3.jfif" />
            <DrawingBoard index={4} imageUrl="./res/images/4.jfif" />
            <DrawingBoard index={5} imageUrl="./res/images/5.jfif" />
            <DrawingBoard index={6} imageUrl="./res/images/6.jfif" /> */}

        </div>
    );

};

