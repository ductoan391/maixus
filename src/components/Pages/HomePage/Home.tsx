import React from 'react';
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import ThirdPage from './ThirdPage/ThirdPage';
import FourthPage from './FourthPage/FourthPage';
import FiifthPage from './FifthPage/FiifthPage';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const Home = () => {
  const [destination, setDestination] = useState('');
  // set change URL khen scrolling
  let navigate = useNavigate();
  const [activeUrl, setActiveUrl] = useState<Number>(0);
  const handleUrl = () => {
    switch (activeUrl) {
      case 0:
        navigate("#firstPage");
        break;
      case 1:
        navigate("#secondPage");
        break;
      case 2:
        navigate("#thirdPage");
        break;
      case 3:
        navigate("#fourthPage");
        break;
      case 4:
        navigate("#fifthPage");
        break;
    }
  };
  useEffect(() => {
  
  }, [destination]);

  //set up animation scroll to section


  //variable for array menu_nav
  let array: any[];
  array = Array(5).fill(0);

 

  const anchors = ["#firstPage", "#secondPage", "#thirdPage", "#fourthPage", "#fifthPage"];

    return (
      <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
      scrollingSpeed={700}
      onLeave={(origin, destination, direction) => {

     
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        
        console.log("render prop change", state); // eslint-disable-line no-console
    
     
  
        return (
          <>
          <div className='section'>
          <FirstPage ></FirstPage>
          </div>
          <div className='section'>
          <SecondPage ></SecondPage>
          </div>
          <div className='section'>
          <ThirdPage ></ThirdPage>
          </div>
          <div className='section'>
          <FourthPage ></FourthPage>
          </div>
          <div className='section'>
          <FiifthPage ></FiifthPage>
          </div>
          </>
        );
      }}
    />
    );
};

export default Home;



