import React from 'react'
import instagram from '/instagram.svg'
import github from '/gitHub.svg'
import tiktok from '/tiktok.svg'
import artStation from '/artStation.svg'


function Card(){

    return(
        <>
        <div className="Card" >
            <h1 className="mainFont" >Hi I'm Jaali [J-Ali]</h1>
            <div className="overflowWrapper">
            <div>I'm a </div> <div className="titles" >Web Developer
            <p id="DA" >Digital Artist</p>
            <p id="CM">Coffee Maker</p> 
            <p id="AE" >Anime Enthuiast</p>
            <p id="WD" >Comicbook Nerd</p>
            </div>
            </div>
            <div className="mainFont hi" >Come say hi</div>
            <div className="iconWrapper" >
            <a href="https://www.instagram.com/artful_speaks/" ><img className="icons" src={instagram} alt="instagram img" /></a>
            <a href="https://www.tiktok.com/@draco_jaali"><img className="icons" src={tiktok} alt="github img" /></a>
            <a href="https://github.com/jmasteremerald"><img className="icons" src={github} alt="" /></a>
            <a href="https://www.artstation.com/jaali"><img id="artstation" className="icons" src={artStation} alt="" /></a>
            </div>
        </div>
        </>
    )
}
export default Card
