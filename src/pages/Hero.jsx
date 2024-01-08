import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import SceneInit from "../assets/lib/SceneInit";
import Morpher from "../assets/lib/Morpher";
import { gsap } from "gsap";


const Hero = () => {
    
    
    
    const animation = () =>{
        gsap.to(".hero-el",{
            opacity:1,
            y:0,
            stagger:0.2,
            duration:1,
        })
    }
    useEffect(()=>{
        const timeout =setTimeout(animation,6000);
        // animation();
        return()=>{
            timeout.clearTimeout()
        }
    },[])
    useEffect(()=>{
        const sceneInit = new SceneInit(".hero-el");
        return()=>{
            sceneInit.dispose()
        }
    },[])
    useEffect(() => {
        // Define the initial and final clip-path arrays
        const initialArray = [
          { x: 10.2, y: 22.2 },
          { x: 83.2, y: 0 },
          { x: 83.2, y: 8.7 },
          { x: 68.8, y: 12.8 },
          { x: 68.8, y: 17.1 },
          { x: 54.9, y: 21.0 },
          { x: 54.9, y: 25.6 },
          { x: 20.6, y: 35.6 },
          { x: 10.2, y: 30.6 }
        ];
    
        const finalArray = [
          { x: 0, y: 0 },
          { x: 100, y: 0 },
          { x: 100, y: 100 },
          { x: 100, y: 100 },
          { x: 100, y: 100 },
          { x: 100, y: 100 },
          { x: 100, y: 100 },
          { x: 0, y: 100 },
          { x: 0, y: 100 }
        ];
    
        const morpher = new Morpher();
    
        // morpher.clickFromTo(".hero-el-2", initialArray, finalArray, 100);

      }, []);
    return (
        <StyledHero>
            <div className="hero">
                <div className="hero-el hero-el-1 ">
                </div>
                <div  className="hero-el hero-el-2 ">
                    {/* <span>About Me</span> */}

                </div>
                <div className="hero-el hero-el-3 ">
                    {/* <span>Skills</span> */}
                </div>
                <div className="hero-el hero-el-4 ">
                    <span>
                        <img src="./projects_shadow.svg" alt="" id="projects-shadow" />
                        <img src="./projects.svg" alt="" id="projects" />
                    </span>
                </div>
                <div className="hero-el hero-el-5"></div>
                <div className="hero-el hero-el-6"></div>
            </div>
        </StyledHero>
    );
}
const StyledHero = styled.div`

.hero{
    width: 70%;
    margin: 0 auto;
    min-height: 65vh;
    aspect-ratio: 5/8;
    max-height: fit-content;
    position: relative;
    overflow: hidden;
}

@media screen and (max-width:500px){
    .hero{
        width: 90%;
    }
    .hero-el-3 span{
        font-size: calc(80vw / 11);
    }
}
.hero-el canvas{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.hero-el{
    width: 100%;
    /* height: 100%; */
    top: 0;
    aspect-ratio: 5/8;
    position: absolute;
    overflow: hidden;
    z-index: 1;
    opacity: 0;
    transform: translateY(200px);

}
.hero-el-1{
    clip-path:polygon(10.2% 12.5%, 35.9% 4.6%,35.9% 13.1%, 10.2% 21%);
    background: #9f872e;
    background: #e1e1e1;
    /* background-image: radial-gradient(#000 .1px, transparent .1px);
    background-size: 3px 3px; */
}

.hero-el-2{
    background: #0759a5;
    background: #1E1E1E;
    /* background: #000; */

    clip-path:polygon(
        10.2% 22.2%,
        83.2% 0,
        83.2% 8.7%,
        66.8% 13.6%,
        66.8% 17.2%,
        47.9% 23.0%,
        47.9% 27.7%,
        20.6% 35.6%,
        10.2% 30.6%);
    clip-path:polygon(
        10.2% 22.2%,
        83.2% 0,
        83.2% 8.7%,
        68.8% 12.8%,
        68.8% 17.1%,
        54.9% 21.0%,
        54.9% 25.6%,
        20.6% 35.6%,
        10.2% 30.6%);
}
.hero-el-3{
    background: #122141;
    background: #1E1E1E;
    /* background: #000; */
    clip-path:polygon(
        0 43.8%,
        88.1% 17.1%,
        88.1% 25.6%,
        100% 21.8%,
        100% 32.6%,
        78% 39.3%,
        86.2% 43.5%,
        25.6% 61.7%,
        17.2% 57.7%,
        7.9% 60.5%,
        7.9% 52.7%,
        24.6% 47.1%,
        24.2% 46.7%,
 
        0% 54.8%
    ); 
}

.hero-el-4 span{
    width: 100%;
    position: absolute;
    text-align: center;
    transform-origin:center ;
    transform: skewY(-24deg);
    display: flex;
    align-items: center;
    justify-content: center;
    top: 65%;
    font-size: calc(60vw / 11);
}
.hero-el-4:hover span #projects-shadow{
    opacity: 1;
    scale: 1;
}
.hero-el-4 span #projects-shadow{
    position: absolute;
    width: 80%;
    opacity: 0;
    scale: 0.5;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);

}
.hero-el-4 span #projects{
    width: 50%;
    position: absolute;
    opacity: 0.8;
}
.hero-el-4:hover span #projects{
    opacity: 1;

}

.hero-el-4{
    background: #040607;
    background: #1E1E1E;
    background: #c3c3c3;
    /* background: #000; */
    /* filter: invert(75%); */
    /* background-image: radial-gradient(#000 .1px, transparent .1px);
    background-size: 3px 3px; */
    clip-path:polygon(
        10.2% 67.5%,
        82.9% 45.4%,
        82.9% 53.8%,
        91.8% 58.2%,
        51.0% 71.0%,
        51.0% 71.8%,
        71.7% 65.2%,
        71.7% 69.2%,
        24.7% 83.3%,
        24.7% 77.8%,
        30.6% 76.0%,
        23.7% 72.4%,
        35.6% 68.6%,
        35.6% 68.0%,
 
        10.2% 76.0%
    );
    /* clip-path: polygon(0 0, 0 100% , 100% 100%, 100% 0); */
}
.hero-el-5{
    background: #0759a5;
    background: #1E1E1E;
    clip-path:polygon(
        10.2% 90.1%,
        83.2% 68.0%,
        83.2% 76.6%,

 
        10.2% 98.7%
    );
}
.hero-el-6{
    background: #9f872e;
    background: #e1e1e1;
    /* background-image: radial-gradient(#000 .1px, transparent .1px);
    background-size: 3px 3px; */
    clip-path:polygon(
        39.3% 91.2%,
        83.2% 78.1%,
        83.2% 86.5%,
 
        39.3% 99.7%
    );
}
` 


export default Hero;