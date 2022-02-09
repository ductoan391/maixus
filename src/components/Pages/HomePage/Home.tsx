import React from 'react';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/all';
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import ThirdPage from './ThirdPage/ThirdPage';
import FourthPage from './FourthPage/FourthPage';
import FiifthPage from './FifthPage/FiifthPage';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const Home = () => {
    const anchors = ['#firstPage', '#secondPage', '#thirdPage', '#fourthPage', '#fifthPage'];

    return (
        <ReactFullpage
            anchors={anchors}
            navigation
            navigationTooltips={anchors}
            scrollingSpeed={700}
            afterLoad={(origin,destination,direction) => {
                switch (destination.index) {
                    case 2: 
                    gsap.from(".title_first", {
                        autoAlpha: 0,
                        y: 420,
                        duration: 0.7,
                        ease: "power4.out",
                      });
                      gsap.from(".page-three-content", {
                        autoAlpha: 0,
                      });
                      gsap.from(".title_second", {
                        autoAlpha: 0,
                        y: -420,
                        duration: 0.7,
                        ease: "power4.out",
                        delay: 0.3,
                      });
                      gsap.from(".title_third", {
                        autoAlpha: 0,
                        y: 420,
                        duration: 0.7,
                        ease: "power4.out",
                        delay: 0.6,
                      });
                      gsap.from(".title_fourth", {
                        autoAlpha: 0,
                        y: -420,
                        duration: 0.7,
                        ease: "power4.out",
                        delay: 0.9,
                      });
                      break;
                }
            }}
            onLeave={(origin, destination, direction) => {
                switch (destination.index) {
                    case 1: 
                    gsap.to(".title_first", { visibility: "hidden" });
      gsap.to(".title_second", { visibility: "hidden" });
      gsap.to(".title_third", { visibility: "hidden" });
      gsap.to(".title_fourth", { visibility: "hidden" });
      gsap.to(".page-three-content", { visibility: "hidden" });
      break;
      case 3: 
      gsap.to(".title_first", { visibility: "hidden" });
      gsap.to(".title_second", { visibility: "hidden" });
      gsap.to(".title_third", { visibility: "hidden" });
      gsap.to(".title_fourth", { visibility: "hidden" });
      gsap.to(".page-three-content", { visibility: "hidden" });
      break;
                }
             }}
            render={() => {
                return (
                    <>
                        <div className="section">
                            <FirstPage></FirstPage>
                        </div>
                        <div className="section">
                            <SecondPage></SecondPage>
                        </div>
                        <div className="section">
                            <ThirdPage></ThirdPage>
                        </div>
                        <div className="section">
                            <FourthPage></FourthPage>
                        </div>
                        <div className="section">
                            <FiifthPage></FiifthPage>
                        </div>
                    </>
                );
            }}
        />
    );
};

export default Home;
