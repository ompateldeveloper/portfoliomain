import { Suspense, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

import Hero from "./Hero.jsx";
import { gsap } from "gsap";
import CustomCursor from "../assets/lib/Cursor.js";

const Home = ({isLoading}) => {

    let heroRef = useRef();
    

    function animation(){
        let t1 = gsap.timeline()
    

        t1
        .from("#el-1",{
            opacity:0,
            x:100,
            delay:2.5,
            duration:0.5,
            ease:'back.out(1.7)'
        },"+=1")
        .from("#el-2",{
            borderWidth:0,
            opacity:0.5,
            width:229,
            height:1
            
        },"-=0.2")
        .from("#name",{
            opacity:0,
            x:100,
            duration:0.5,
            ease:'back.out(1.7)'
        },"-=0.7")

        .from(".vl",{
            height:0,
            // opacity:0,
            duration:0.3,
        })
        .from(".job-title",{
            opacity:0,
            x:10,
            duration:0.3,
        },"-=0.7")
        .from(".skill-el",{
            opacity:0,
            y:-10,
            duration:0.2,
            stagger:0.1,
        })
        .add(
            ()=>heroRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
        )
        .from("#el-3",{
            height:0,
            duration:2,
        })
        .from("#el-3 .before ",{
            width:0,
            duration:0.5,
        },"-=0.5")
        .from("#el-4 ",{
            opacity:0,
            duration:0.5,
        },"-=1")
    }
    useEffect(() => {
        animation()
    }, []);
    return (

        
        <StyledHome >
            <div id="el-1" ></div>
            <div id="el-2"></div>
            <div id="el-3"  >
                <div className="before"></div>
            </div>
            <div id="el-4">
            </div>
            <div id="name" className="name cursor-hover"  data-lag="0.01">
                Patel, Om

            </div>
            <div className="vl"></div>
            <div className="job-title">
                Full-stack Web developer 
            </div>
            <div className="skills">
                <div className="skill-el">Next Js</div>
                <div className="skill-el">React Js</div>
                <div className="skill-el">Django</div>
                <div className="skill-el">Node JS</div>
                <div className="skill-el">Three JS</div>
            </div>
            <div className="flex" ref={heroRef}>
                <Suspense fallback={null}>
                    <Hero />
                </Suspense>

            </div>
            <div className="footer">
                <div className="hl"></div>
                <a className="my-resume"  download={'OmPatel_resume'} href="./resume.pdf">My Resume</a>
                <a className="hire-me" href="mailto:ompatel.developer@gmail.com">Hire Me</a>
            </div>

        </StyledHome>

    );
}
const StyledHome = styled.div`
margin: 7% 5%;
margin-bottom: 0;
font-family: 'Syncopate';
position: relative;
/* overflow-x: hidden; */
min-height: 100vh;

*{
    /* border: 1px solid lime; */
}
.name{
    background: #1E1E1E;
    width: fit-content;
    padding: 0 8px ;
    font-size: 1.4rem;
    color: var(--white);
    position: relative;
    letter-spacing: 2px; 
    clip-path: polygon(0 0,95% 0,100% 25%,100% 100%,40% 100%,38% 95%, 20% 95%,18% 100%,10% 100%,0% 75% );
}
#el-1{
    width: 40px;
    height: 5px;
    background: #1E1E1E;
    margin:  0 0 10px 0;
    clip-path:polygon(0 0,60% 0,100% 10%, 100% 100%,10% 100%, 0% 60% );
}
#el-2{
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 30px;
    border-right: 2px solid black;
    border-top: 2px solid black;
    
}
#el-3{
    top: 280px;
    position: absolute;
    /* height: 32rem; */
    /* height:calc((70vw * 5) / 7); */
    height: 0;
    height: calc(60vw * (7 / 5));
    width: 1px;
    background: #000;
    left: 0;
}
#el-3 .before{
    content: "";
    position: absolute;
    top: 30px;
    width: 50px;
    height: 1px;
    background: #000;
}
#el-4{
    position: absolute;
    right: 0;
    top: 50px;
    width: 1px;
    background: #000;
    /* border: 1px solid lime; */
}

.vl{
    transform-origin: top left;
    width: 1px;
    height: 40px;
    margin: 20px 0;
    background: var(--black);
}
.job-title{
    font-size: 0.9rem;
    font-weight: bold;
    /* margin: 8px 0; */
    overflow: hidden;
}
.skills{
    margin: 16px 0;
    font-size: 0.8rem;
}
.skills-el{
    transform-origin: top;
}

.footer{
    position: absolute;
    right: 0;
    bottom: 40px;


}
.footer a{
    text-decoration: none;
    font-size: 1rem;
    color: black;
    display: block;
    margin: 5px 0;
}
.footer .hl{
    height: 2px;
    width: 100%;
    background: #000;
    transform: translateY(-10px);

}
.footer .hire-me{

}
.footer .my-resume{

}

@media screen and (max-width:850px){
    /* .footer{
        clip-path: polygon(0 0,20% 0, 23% 80%,47% 80% , 50% 0,100% 0,100% 100%,0 100% );

    }
    .footer span{
        display: none;
    }
    .footer div a{
        padding:0 5px;
        font-size: 0.6rem;
        
    } */

}
@media screen and (max-width:500px){
    .name{
        font-size: 0.9rem;
    }
    #el-1{
        width: 20px;
        height: 3px;
        margin:  0 0 5px 0;
    }
    #el-2{
        display: none;

    }
    #el-3{
        top: 190px;
        height: 100vh;
        height: calc(80vw * (7 / 5));

    }
    .vl{
        height: 30px;
        margin: 10px 0;
    }
    .job-title{
        font-size: 0.7rem;
    }
    .skills{

        font-size: 0.6rem;
    }

    
    .footer{
        bottom: 10px;


    }
    .footer a{
        text-decoration: none;
        font-size: 0.5rem;
        color: black;
        display: block;
        margin: 5px 0;
    }
    .footer .hl{
        height: 2px;
        width: 100%;
        background: #000;
        transform: translateY(-10px);

    }
}


`
export default Home;