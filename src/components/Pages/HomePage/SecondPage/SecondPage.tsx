import React, { useEffect } from 'react';
import './secondPage.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next';
import i18n from '../../../../i18n';


gsap.registerPlugin(ScrollTrigger);

function SecondPage() {
    const { t } = useTranslation();
    const dataList = t("second", { returnObjects: true }) as any;


    useEffect(() => {
        const text = document.querySelectorAll("text");
        const textArea = document.querySelectorAll(".text-area");
        const animation = () => {
            const TLFade = gsap.timeline({
                scrollTrigger: {
                    trigger: ".second-container",
                    start: "top top+=50",
                    end: "bottom bottom-=50",
                    toggleActions: "restart reverse restart reverse",
                    markers: false,
                }
            });
            TLFade.from(text, {
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
                })
        };

        animation();
    }, [])
    return <div className='second-container'>
        <div className="text-area">
            <p className='text'>{dataList.number1} <span className="text-yellow">{dataList.textYellow1}</span> <span className="text">{dataList.textWhite1}</span> </p>
            <p className='text'>{dataList.number2} <span className="text">{dataList.textWhite2}</span></p>
            <p className="text-yellow">{dataList.textYellow2} <span className="text">{dataList.textWhite3}</span></p>
            <p className='text'>{dataList.number3} <span className="text">{dataList.textWhite4}</span> <span className="text-yellow">{dataList.textYellow3}</span>  </p>
            <p className='text'>{dataList.number4} <span className="text">{dataList.textWhite6}</span> <span className="text-yellow">{dataList.textYellow4}</span> <span className="text">{dataList.textWhite7}</span>  </p>
        </div>
    </div>;
}

export default SecondPage;
