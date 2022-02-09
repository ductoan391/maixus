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
            onLeave={(origin, destination, direction) => { }}
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
