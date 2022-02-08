import React, { useEffect } from 'react';
import './secondPage.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SecondPage() {
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
            <p className='text'>1. <span className="text-yellow">자 체 생 산</span> 기 기 제 조 업 체</p>
            <p className='text'>2 .자 체 생 산 시 스 템 기 기 탑 재</p>
            <p className='text'><span className="text-yellow">고성능 서버</span> 생산 판매</p>
            <p className='text'>3. HPS기반 운영 블록체인 IDC 구축 </p>
            <p className='text'>4. 블록체인 <span className="text-yellow">IPFS</span> 관련 솔루션 구축</p>
        </div>
    </div>;
}

export default SecondPage;
