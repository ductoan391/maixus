import React, { useRef, useEffect } from 'react';
import BG from '../../../../Assets/Images/banner-03.png'
import './thirdPage.scss'
import { gsap } from 'gsap';
import SectionCard from "./SectionCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger)

function ThirdPage() {
    const { t } = useTranslation();
    const dataList = t("third", { returnObjects: true }) as any;
    // @ts-ignore
    let app: HTMLDivElement | null = useRef(null);
    // @ts-ignore
    let section: HTMLDivElement | null = useRef(null);

    useEffect(() => {
        const motionSection = section?.children[0];
        const designSection = section?.children[1];
        const developSection = section?.children[2];
        const cultureSection = section?.children[3];

        const revealAnim = () => {
            const TLFade = gsap.timeline({
                scrollTrigger: {
                    trigger: '.third-page',

                    toggleActions: 'restart reverse restart reverse',
                    markers: false
                },
            })
            gsap.to(app, 0, { css: { visibility: 'visible' } })

            // @ts-ignore
            TLFade.from(motionSection, {
                autoAlpha: 0,
                y: -220,
                duration: .5,
                ease: "power3.out",
            })// @ts-ignore
                .from(designSection, {
                    autoAlpha: 0,
                    y: 220,
                    duration: .5,
                    ease: "power3.out",
                })// @ts-ignore
                .from(developSection, {
                    autoAlpha: 0,
                    y: -220,
                    duration: .5,
                    ease: "power3.out",
                })// @ts-ignore
                .from(cultureSection, {
                    autoAlpha: 0,
                    y: 220,
                    duration: .5,
                    ease: "power3.out",
                })
        }
        revealAnim();
    }, []);

    return (
        <div className='third-page' ref={el => app = el}>
            <div className="third-page-container">
                <img className='image-background' src={BG} alt="" />
                <div className='black-back black'>
                    <div className='contents'>
                        <div className='inner-contents'>
                            <div className='third_'>
                                <div className='over-section-third' ref={el => section = el}>
                                    {
                                        dataList.desc.map((item: any) => (
                                            <SectionCard key={item.id} title={item.title} desc={item.content} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdPage;