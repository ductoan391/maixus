import React, { useEffect } from 'react';
import './secondPage.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SecondPage() {
    useEffect(() => {
        const firstContent = document.querySelectorAll(".first_content");
        const secondContent = document.querySelectorAll(".second_content");
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
            TLFade.from(firstContent, {
                autoAlpha: 0,
                y: -50,
                stagger: 0.1,
                duration: 0.5,
                ease: "power2.out",
            }, "-=0.1")
                .from(secondContent, {
                    x: -3000,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power2.out",
                })
        };

        animation();
    }, [])
    return <div className='second-container'>
        <div className="first_content">
            <p>LOOCREATIVE</p>
            <p>PHILOSOPHY</p>
        </div>
        <div className="second_content">
            <p>Dreams come true</p>
            <p>Without that possibility,</p>
            <p>Nature would not incite</p>
            <p>us to have them.</p>
        </div>

    </div>;
}

export default SecondPage;
