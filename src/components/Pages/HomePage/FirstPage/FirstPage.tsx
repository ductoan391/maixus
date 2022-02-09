import React, { useEffect, useRef, useState } from 'react';
import './firstPage.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BG from '../../../../Assets/Images/banner-01-kr.png';
import {useTranslation} from "react-i18next";
import i18n from "../../../../i18n";
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

interface TranslateProps {
    subTitle: string;
    note: string
}

function FirstPage() {
    const { t } = useTranslation();
    const dataList = t("first", { returnObjects: true }) as TranslateProps;


    const location = useLocation();


    useEffect(() => {
        const logo = document.querySelectorAll(".logo");
        const title = document.querySelectorAll(".title");
        const subTitle = document.querySelectorAll(".subTitle");
        const note = document.querySelectorAll(".note");
        const animation = () => {
            const TLFade = gsap.timeline({
                scrollTrigger: {
                    start: "top top+=50",
                    end: "bottom bottom-=50",
                    toggleActions: "restart reverse restart reverse",
                    markers: false,
                }
            });
            TLFade.from(logo, {
                ease: "elastic.out(8, .8)",
                top: "10%",
                rotate: 0,
                duration: 1.5
            })

            TLFade.from(subTitle, {
                autoAlpha: 0,
                x: -820,
                stagger: 0.1,
                duration: 1.2,
                ease: "power4.out",})

            TLFade.from(title, {
                autoAlpha: 0,
                y: -420,
                stagger: 0.3,
                duration: 0.9,
                ease: "power2.out",
            }, 0.3)
            TLFade.from(note, {
                autoAlpha: 0,
                x: -420,
                stagger: 0.3,
                duration: 0.6,
                ease: "power2.out",
            }, 0.3)

        };

        if(location.hash === "#firstPage") {
        
            animation();
        }
        return
    }, [location.hash === '#firstPage']);



    return (
      <div className="first-container">
          <img className='background' src={BG} alt="" />
          <div className="logo">
              <h3>maxius</h3>
          </div>
          {
              i18n.language === "ko" ? (
                <div className='content-container ko'>
                    <p className='title'>MAXI & US</p>
                    <p className='subTitle'>{dataList.subTitle}</p>
                    <p className='note'>{dataList.note}</p>
                </div>
              ) : (
                <div className='content-container en'>
                    <p className='title'>MAXI & US</p>
                    <p className='subTitle'>{dataList.subTitle}</p>
                    <p className='note'>{dataList.note}</p>
                </div>
              )
          }


      </div>
    )
}

export default FirstPage;