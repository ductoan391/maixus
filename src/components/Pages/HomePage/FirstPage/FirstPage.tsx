import React, { useEffect, useRef, useState } from 'react';
import './firstPage.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BG from '../../../../Assets/Images/banner-01-kr.png';
import {useTranslation} from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

interface TranslateProps {
    subTitle: string;
    note: string
}

function FirstPage() {
    const { t } = useTranslation();
    const dataList = t("first", { returnObjects: true }) as TranslateProps;



    useEffect(() => {
        const title = document.querySelectorAll(".content-container__title");
        const subTitle = document.querySelectorAll(".content-container__subTitle");
        const note = document.querySelectorAll(".content-container__note");
        const animation = () => {
            const TLFade = gsap.timeline({
                scrollTrigger: {
                    trigger: ".first-page",
                    start: "top top+=50",
                    end: "bottom bottom-=50",
                    toggleActions: "restart reverse restart reverse",
                    markers: false,
                }
            });
            TLFade.from(title, {
                x: 820,
                stagger: 0.2,
                duration: 0.6,
                ease: "power2.out",
            }, "-=0.1")
              .from(subTitle, {
                  autoAlpha: 0,
                  y: -220,
                  stagger: 0.1,
                  duration: 0.5,
                  ease: "power2.out",
              })
              .from(note, {
                  autoAlpha: 0,
                  x: 420,
                  stagger: 0.3,
                  duration: 0.9,
                  ease: "power2.out",
              })
        };

        animation();
    }, []);



    return (
        <div className="first-page">
            <img className='background' src={BG} alt="" />
            <div className='content-container'>
                <p className='content-container__title'>MAX I & US</p>
                <p className='content-container__subTitle'>{dataList.subTitle}</p>
                <p className='content-container__note'>{dataList.note}</p>
            </div>
        </div>
    )
}

export default FirstPage;
