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
import onLeave from '../../Animation/onLeave';
import afterLoad from '../../Animation/AfterLoad';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const Home = () => {
    const anchors = ['#firstPage', '#secondPage', '#thirdPage', '#fourthPage', '#fifthPage'];

    return (
        <ReactFullpage
        licenseKey={'263DXXXX-B839XXXX-AE67XXXX-F398XXXX'}
            anchors={anchors}
            navigation={true}
            navigationPosition={'right'}
            scrollingSpeed={700}
            onLeave={onLeave}
            afterLoad={afterLoad}
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