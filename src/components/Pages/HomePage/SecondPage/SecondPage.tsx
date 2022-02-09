import React, { useLayoutEffect, useState } from 'react';
import './secondPage.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../i18n';
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function SecondPage() {
    const { t } = useTranslation();
    const dataList = t('second', { returnObjects: true }) as any;

    const [language, setLanguage] = useState(i18n.language);
    const location = useLocation();

    useLayoutEffect(() => {
        const textArea = document.querySelectorAll('.text-area');
        const firstContent = document.querySelectorAll(".first_content");
        const animation = () => {
            const TLFade = gsap.timeline({
                scrollTrigger: {
                    start: "top top+=50",
                    end: "bottom bottom-=50",
                    toggleActions: "restart reverse restart reverse",
                    markers: false,
                }
            });
            TLFade.from(firstContent, {
                autoAlpha: 0,
                y: -50,
                stagger: 0.1,
                duration: 0.5,
                ease: "power2.out",
            }, "-=0.1")
                .from(textArea, {
                    x: -3000,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power2.out",
                });
        };
        if (location.hash === "#secondPage") {
            animation();
            setLanguage(i18n.language);
        }
        return
    }, [i18n.language, location.hash === '#secondPage']);


    return (
        <div className="second-container">
            <div className="first_content">
                <p>MAXIUS</p>
            </div>
            <div className="text-area">
                {language === 'ko' ? (
                    <>
                        <p className="text" style={{ lineHeight: "1.18" }}>
                            {dataList.number1} <span className="text-yellow">{dataList.textYellow1}</span>{' '}
                            <span className="text">{dataList.textWhite1}</span>{' '}
                        </p>
                        <p className="text" style={{ lineHeight: "1.18" }}>
                            {dataList.number2} <span className="text">{dataList.textWhite2}</span>
                        </p>
                        <p className="text-yellow" style={{ lineHeight: "1.18" }}>
                            {dataList.textYellow2} <span className="text">{dataList.textWhite3}</span>
                        </p>
                        <p className="text" style={{ lineHeight: "1.18" }}>
                            {dataList.number3} <span className="text">{dataList.textWhite4}</span>{' '}
                            <span className="text-yellow">{dataList.textYellow3}</span>{' '}
                        </p>
                        <p className="text" style={{ lineHeight: "1.18" }}>
                            {dataList.number4} <span className="text">{dataList.textWhite6}</span>{' '}
                            <span className="text-yellow" style={{ lineHeight: "1.18" }}>{dataList.textYellow4}</span> <span className="text">{dataList.textWhite7}</span>{' '}
                        </p>
                    </>
                ) : (
                    <>
                        <p className="text" style={{ display: 'inline' }}>
                            {dataList.number1} <span className="text-yellow">{dataList.textYellow1}</span>{' '}
                            <span className="text">{dataList.textWhite1}</span>{' '}
                        </p>
                        <p className="text" style={{ display: 'inline' }}>
                            {dataList.number2} <span className="text">{dataList.textWhite21}</span>{' '}
                            <span className="text-yellow">{dataList.textYellow21}</span>
                            <span className="text">{dataList.textWhite22}</span>
                            <span className="text-yellow">{dataList.textYellow22}</span>
                            <span className="text">{dataList.textWhite23}</span>{' '}
                            <span className="text-yellow">{dataList.textYellow23}</span>
                            <span className="text">{dataList.textWhite24}</span>
                        </p>
                        <p className="text" style={{ display: 'inline' }}>
                            {dataList.number3} <span className="text">{dataList.textWhite31}</span>{' '}
                            <span className="text-yellow">{dataList.textYellow3}</span> <span className="text">{dataList.textWhite32}</span>
                        </p>
                        <p className="text" style={{ display: 'inline' }}>
                            {dataList.number4} <span className="text">{dataList.textWhite4}</span>{' '}
                            <span className="text-yellow">{dataList.textYellow4}</span>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

export default SecondPage;
