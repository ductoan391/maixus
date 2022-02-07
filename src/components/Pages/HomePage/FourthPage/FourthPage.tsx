import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./fourthPage.scss"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
gsap.registerPlugin(ScrollTrigger);

function FourthPage() {
    return (
        <div className="fourth-page">
           <h1> Page fourth </h1>
        </div>

    );
}

export default FourthPage;
