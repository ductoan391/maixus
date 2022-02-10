import { useEffect } from 'react';
import './fifthPage.scss';
import { gsap } from "gsap";
import { RightOutlined } from '@ant-design/icons'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);
function FiifthPage() {
    const location = useLocation()
    // useEffect(() => {
    //     const titleName = document.querySelectorAll(".fifth-name");
    //     const titleAnim = document.querySelectorAll(".title-anima");
    //     const contact = document.querySelectorAll(".fifth-contact");
    //     const learnMore = document.querySelectorAll(".fifth-learn-more");
    //     const animation = () => {
    //         const TLFade = gsap.timeline({
    //             scrollTrigger: {
    //                 start: "top top+=50",
    //                 end: "bottom bottom-=50",
    //                 toggleActions: "restart reverse restart reverse",
    //                 markers: false,
    //             }
    //         });
    //         TLFade.from(titleName, {
    //             x: 420,
    //             duration: 0.6,
    //             ease: "power2.out",
    //         }, "-=0.1")
    //             .from(titleAnim, {
    //                 autoAlpha: 0,
    //                 x: 420,
    //                 duration: 0.6,
    //                 ease: "power2.out",
    //             })
    //             .from(contact, {
    //                 autoAlpha: 0,
    //                 y: -50,
    //                 duration: 0.5,
    //                 ease: "power2.out",
    //             })
    //             .from(learnMore, {
    //                 autoAlpha: 0,
    //                 x: 200,
    //                 duration: 0.5,
    //                 ease: "power2.out",
    //             })

    //     };

    //     if (location.hash === "#fifthPage") {

    //         animation();
    //     }
    //     return
    // }, [location.hash === '#fifthPage']);
    return (
        <div className='fifth-container'>
        
            <div className="fifth-wrapper">
                <div className="block-item">
                    <h3 className="fifth-name">Company.</h3>
                    <div className="email">
                        <a href="mailto:support@taejin.co.kr">
                            <p className="fifth-contact">support@taejin.co.kr</p>
                            <div className="mail-icon">
                                <p>✉</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="block-item">
                    <h3 className="fifth-name">Warranty.</h3>
                    <div className="email">
                        <a href="#">
                            <p className="fifth-contact">Learn more <RightOutlined /></p>
                        </a>
                    </div>
                </div>
                <div className="block-item">
                    <h3 className="fifth-name">Technical support.</h3>
                    <div className="fifth-contact">
                        <a href="#">
                            <p className="fifth-learn-more">Learn more <RightOutlined /></p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FiifthPage;
