import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./fourthPage.scss"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

function FourthPage() {
    const location = useLocation()
    const { t } = useTranslation();
    const data = t('fourth', { returnObjects: true }) as any;
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                }
            }
        ]
    };
    useEffect(() => {
        const logo = document.querySelector('.logo');
        const title = document.querySelector('.fourth-title');
        const navItems = document.querySelectorAll('.list-story');
        const animation = () => {
            const TLFade = gsap.timeline({
                scrollTrigger: {
                    start: "top top+=50",
                    end: "bottom bottom-=50",
                    toggleActions: "restart reverse restart reverse",

                }
            });
            TLFade.from(logo, {
                y: -1000,
                duration: 0.8,
                ease: "power2.out",
            }, "-=0.1")
                .from(title, {
                    y: -1000,
                    duration: 1.3,
                    ease: "power2.out",
                })
                .from(navItems, {
                    x: -2020,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power2.out",
                })
        }
        if (location.hash === '#fourthPage') {

            animation();
        }
        return
    }, [location.hash === '#fourthPage']);
    const renderData = data.story.map((val: any) => (
        <div className={"item-story item-" + (val.title)} key={val.id}>
            <p className={"title title" + (val.title)}>{val.title}</p>

            <div className="item-box">
                {
                    val.children.map((child: any) => (
                        <div className="item-box-item" key={child.id}>
                            <h2>{child.title}</h2>
                            <p>{child.type}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    ))
    return (
        <div className="fourth-page">
            <div className='logo'>
                <h3>maxius</h3>
            </div>
            <div className='fourth-container'>
                <h1 className="fourth-title">story</h1>
                <div className="list-story">
                    <Slider {...settings}>
                        {renderData}
                    </Slider>
                </div>
            </div>
        </div>

    );
}

export default FourthPage;
