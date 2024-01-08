import { useEffect, useState } from "react"
import Home from "./pages/Home"
import { styled } from "styled-components";
import { gsap } from "gsap";
import TransparentCanvasWithIcosahedron from "./assets/lib/Cursor";


function App() {
	let [isLoading,setIsLoading]  = useState(true);
	let t0 = gsap.timeline();

	useEffect(()=>{
		// let cursor = new TransparentCanvasWithIcosahedron()
		// return()=>{
		// 	cursor.dispose(); 
		// }
	},[])
	useEffect(()=>{
		t0
		.from(".vec-1",{
			// delay:2,
			duration:0.5,
			opacity:0,
			y:-120,
			x:-230,

		})
		.from(".vec-2",{
			delay:1,
			duration:0.5,
			opacity:0,
			y:-120,
			x:230,

		},"-=1.5")
		.from(".vec-3",{
			delay:1,
			duration:0.5,
			opacity:0,
			y:120,
			x:230,

		},"-=1.5")
		.from(".vec-4",{
			delay:1,
			duration:0.5,
			opacity:0,
			y:120,
			x:-230,

		},"-=1.5")
		.from(".loading-progress",{
			left:"-120%",
			duration:2,
			

		})
		// .to(".vec-2",{
		// 	delay:1,
		// 	duration:0.5,
		// 	opacity:0,
		// 	y:350,
		// 	x:-250,

		// },"-=1.5")
		// .to(".vec-4",{
		// 	delay:1,
		// 	duration:0.5,
		// 	opacity:0,
		// 	y:-350,
		// 	x:250,
		// },"-=1.5")
		.add(
			()=>{
				window.scrollTo(0, 0);
			}
		)
		.to(".loading",{
			opacity:0,
			userSelect:"none",
            pointerEvents:"none",
            touchAction:"none",
			
		})
		.add(
			()=>{
				setIsLoading(false);
			}
		)
		
	







	},[])
    return (
      	<>
			<StyledLoading className="loading">
			<div id="canvas-container">

			</div>

			<div className="svg-container">
				<svg width="0%" height="0%" xmlns="http://www.w3.org/2000/svg">
				  	<defs>
				  	  	<clipPath id="myClip">
				  	  	  	<path d="M1 19.001V4.99845L5.06911 1.1687H8.89887V14.9319L5.06911 19.001H1Z" />
				  	  	  	<path d="M11.4121 16.009L1 26.7802V35.3971H30.5609L37.622 28.336V19.001H32.7151L24.8163 26.7802H18.3536L23.8588 20.5568V8.82821L27.0902 5.83621V1.1687H19.7897L11.4121 9.42661V16.009Z" />
				  	  	  	<path d="M51.7438 0.689941H60.4804L56.4113 8.22977H53.4193L51.7438 10.6234V24.2669L55.3341 27.1392H72.4484L76.0387 23.4291V18.4026L65.866 8.22977H59.4033L63.3527 0.689941H71.1319L79.9882 9.30689V29.4131L73.7648 35.2774H51.7438L45.7598 29.4131V6.55425L51.7438 0.689941Z" />
				  	  	  	<path d="M91.478 13.8547L88.127 17.6845V34.679H100.574V22.352L113.858 8.94785V0.689941H104.762L102.489 3.20322V5.23777L93.3929 13.8547H91.478Z" />
				  	  	  	<path d="M106.677 25.703V19.5993L118.645 7.75105H124.629V10.6234L122.834 12.1792V18.4026L124.629 20.4371V28.5753L118.645 35.1577H112.661V28.5753L116.611 24.9849V22.8307H115.175L112.661 25.703H106.677Z" />
				  	  	  	<path d="M136.479 14.9319V1.1687H141.385L156.226 16.8468V35.5168H141.385L136.479 30.7296V24.6259H142.941L144.856 26.4211H147.728V23.3095H144.856L136.479 14.9319Z" />
				  	  	  	<path d="M148.446 5.11813V1.1687H162.449L173.101 11.8202V27.2589L165.082 35.5168H158.978V29.5328L164.244 24.1472V20.7962L162.449 19.36V13.7351L155.508 6.67397H150.002L148.446 5.11813Z" />
				  	  	  	<path d="M182.129 9.18721V0.689941H188.592L203.193 14.4531H207.022L218.751 25.9424V35.038H209.775L184.403 9.18721H182.129Z" />
				  	  	  	<path d="M197.687 4.63937V0.689941H205.706V9.18721H201.637L197.687 4.63937Z" />
				  	  	  	<path d="M225.779 0.689941V25.1046L235.713 34.5593H246.604V30.2509L234.875 18.7616L234.396 14.4531H235.713L240.261 19.0009H244.33L249.835 25.1046V28.8147L253.545 32.5248V34.5593H262.521V27.1392L246.604 11.9398V7.27233L239.423 0.689941H225.779Z" />
				  	  	  	<path d="M254.383 15.8893V0.689941H258.093L262.521 4.04098V20.0781H258.093L254.383 15.8893Z" />
				  	  	  	<path d="M273.498 16.727V6.55425H276.849L287.62 18.0435H292.407L300.546 26.1817L301.982 24.7456L293.365 15.7696V10.025H299.349L310 20.7961V25.5833L301.383 34.5593H291.689L273.498 16.727Z" />
				  	  	  	<path d="M282.833 3.68194V0.689941H302.7L308.205 6.55425V9.06753H302.7L301.982 8.22977H287.62L282.833 3.68194Z" />
				  	  	  	<path d="M273.498 34.5593V26.1817H278.166L282.833 30.6099V34.5593H273.498Z" />
				  	  	</clipPath>
				  	</defs>
				</svg>
				<svg width="311" height="37" viewBox="0 0 311 37" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path strokeWidth={"2"} d="M1 19.001V4.99845L5.06911 1.1687H8.89887V14.9319L5.06911 19.001H1Z" stroke="black"/>
					<path strokeWidth={"2"} d="M11.4121 16.009L1 26.7802V35.3971H30.5609L37.622 28.336V19.001H32.7151L24.8163 26.7802H18.3536L23.8588 20.5568V8.82821L27.0902 5.83621V1.1687H19.7897L11.4121 9.42661V16.009Z" stroke="black"/>
					<path strokeWidth={"2"} d="M51.7438 0.689941H60.4804L56.4113 8.22977H53.4193L51.7438 10.6234V24.2669L55.3341 27.1392H72.4484L76.0387 23.4291V18.4026L65.866 8.22977H59.4033L63.3527 0.689941H71.1319L79.9882 9.30689V29.4131L73.7648 35.2774H51.7438L45.7598 29.4131V6.55425L51.7438 0.689941Z" stroke="black"/>
					<path strokeWidth={"2"} d="M91.478 13.8547L88.127 17.6845V34.679H100.574V22.352L113.858 8.94785V0.689941H104.762L102.489 3.20322V5.23777L93.3929 13.8547H91.478Z" stroke="black"/>
					<path strokeWidth={"2"} d="M106.677 25.703V19.5993L118.645 7.75105H124.629V10.6234L122.834 12.1792V18.4026L124.629 20.4371V28.5753L118.645 35.1577H112.661V28.5753L116.611 24.9849V22.8307H115.175L112.661 25.703H106.677Z" stroke="black"/>
					<path strokeWidth={"2"} d="M136.479 14.9319V1.1687H141.385L156.226 16.8468V35.5168H141.385L136.479 30.7296V24.6259H142.941L144.856 26.4211H147.728V23.3095H144.856L136.479 14.9319Z" stroke="black"/>
					<path strokeWidth={"2"} d="M148.446 5.11813V1.1687H162.449L173.101 11.8202V27.2589L165.082 35.5168H158.978V29.5328L164.244 24.1472V20.7962L162.449 19.36V13.7351L155.508 6.67397H150.002L148.446 5.11813Z" stroke="black"/>
					<path strokeWidth={"2"} d="M182.129 9.18721V0.689941H188.592L203.193 14.4531H207.022L218.751 25.9424V35.038H209.775L184.403 9.18721H182.129Z" stroke="black"/>
					<path strokeWidth={"2"} d="M197.687 4.63937V0.689941H205.706V9.18721H201.637L197.687 4.63937Z" stroke="black"/>
					<path strokeWidth={"2"} d="M225.779 0.689941V25.1046L235.713 34.5593H246.604V30.2509L234.875 18.7616L234.396 14.4531H235.713L240.261 19.0009H244.33L249.835 25.1046V28.8147L253.545 32.5248V34.5593H262.521V27.1392L246.604 11.9398V7.27233L239.423 0.689941H225.779Z" stroke="black"/>
					<path strokeWidth={"2"} d="M254.383 15.8893V0.689941H258.093L262.521 4.04098V20.0781H258.093L254.383 15.8893Z" stroke="black"/>
					<path strokeWidth={"2"} d="M273.498 16.727V6.55425H276.849L287.62 18.0435H292.407L300.546 26.1817L301.982 24.7456L293.365 15.7696V10.025H299.349L310 20.7961V25.5833L301.383 34.5593H291.689L273.498 16.727Z" stroke="black"/>
					<path strokeWidth={"2"} d="M282.833 3.68194V0.689941H302.7L308.205 6.55425V9.06753H302.7L301.982 8.22977H287.62L282.833 3.68194Z" stroke="black"/>
					<path strokeWidth={"2"} d="M273.498 34.5593V26.1817H278.166L282.833 30.6099V34.5593H273.498Z" stroke="black"/>
				</svg>

				<div className="loading-progress"></div>
			</div>
			<div className="vec-container">

				<div className="vec vec-1"></div>
				<div className="vec vec-2"></div>
				<div className="vec vec-3"></div>
				<div className="vec vec-4"></div>

			</div>



			</StyledLoading>
      	  	<Home isLoading={isLoading} t0={t0} />
      	</>
    )
}

export default App

let StyledLoading = styled.div`
	position: fixed;
	inset: 0;
	z-index: 9999;
	background: #e7e4e8;

	.svg-container{
		position: absolute;
		width: 311px;
		height: 37px;
		clip-path: url(#myClip); 
		top: calc(50%);
		left:50%;
		transform: translate(-50%,-50%);
		/* background-image: linear-gradient(90deg,black,black); */
		/* background: #000 no-repeat; */
		/* background-position: ; */
	}
	.loading-progress{
		position: absolute;
		top: 0;
		width: 120%;
		transform: skewX(-30deg) translateX(-6px);
		height: 100%;
		background: #000;
	}
	.vec-container{
		position: absolute;
		top: calc(50%);
		left:calc(50% + 15px);
		transform: translate(-50%,-50%);
		width: 100px;
		/* background: #000; */
		height: 10px;
	}
	.vec{
		position: absolute;
		width: 70px;
		height: 1px;
		background: #000;
	}
	.vec-1{
			transform: rotate(45deg) translate(-190px,80px);
	}
	.vec-2{
			transform: rotate(-45deg) translate(190px,80px);
	}
	.vec-3{
			transform: rotate(45deg) translate(190px,-80px);
	}
	.vec-4{
			transform: rotate(-45deg) translate(-190px,-80px);
	}
	

`;