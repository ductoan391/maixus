import React, { useRef, useEffect } from 'react';
import BG from '../../../../Assets/Images/third-bg.png'
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
                                    {/*<SectionCard*/}
                                    {/*  title='Motion'*/}
                                    {/*  desc='VFX, 소셜광고 디자인, 아트웍, 게임개발 등 이미지와 디자인 제작에 필요한 모든 것 그리고*/}
                                    {/*  고객이 필요로 하는 기술과 결과물을 제공합니다. 또한 모션그래픽 및 자막, 동적 타이포그래피,*/}
                                    {/*   애니메이션 등 촬영 이미지와 CG를 합성하여 완성도 있는 결과물을 도출합니다.'*/}
                                    {/*/>
                                 */}
                                    {/*<SectionCard*/}
                                    {/*  title='Motion'*/}
                                    {/*  desc='VFX, 소셜광고 디자인, 아트웍, 게임개발 등 이미지와 디자인 제작에 필요한 모든 것 그리고*/}
                                    {/*  고객이 필요로 하는 기술과 결과물을 제공합니다. 또한 모션그래픽 및 자막, 동적 타이포그래피,*/}
                                    {/*   애니메이션 등 촬영 이미지와 CG를 합성하여 완성도 있는 결과물을 도출합니다.'*/}
                                    {/*/>*/}
                                    {/*<SectionCard*/}
                                    {/*  title='Design'*/}
                                    {/*  desc='UI/UX, 브랜드/편집/그래픽/산업디자인 및 뉴미디어, 컴퍼니/브랜드/소셜/마케팅디자인 유지보수 등*/}
                                    {/* 넓은 바운더리와 다양한 경험으로 많은 기업들과 브랜드디자인을 진행하고 있습니다. 고객과 기업의 니즈를*/}
                                    {/* 맞추고 조율하여 최상의 결과물을 도출할 수 있게 합니다.'*/}
                                    {/*/>*/}
                                    {/*<SectionCard*/}
                                    {/*  title='Develop'*/}
                                    {/*  desc='개발영역은 각 단계를 차근히 밟으며 안정적으로 증명을 거쳐 그 다양성과 안정성을 인정받고*/}
                                    {/*있습니다. 트렌디하면서 안정성있는 개발을 위해 언제나 고민하고 노력하는 개발팀은 기업과의 협업 업무부터*/}
                                    {/*자체 플랫폼 개발 등 다양한 업무를 진행합니다.'*/}
                                    {/*/>*/}
                                    {/*<SectionCard*/}
                                    {/*  title='Culture'*/}
                                    {/*  desc='다양한 사람들이 각자 원하는 문화라는 키워드로 소통하고 나누며 참여하는 것이 얼마나 큰 힘이*/}
                                    {/*되는지, 사람을 이어주는 문화사업이 얼마나 많은 행복을 주는지 알고 있습니다. loocreative는 뮤직,*/}
                                    {/*세미나 등 다양한 문화행사를 만들고 함께 나누려 노력합니다.'*/}
                                    {/*/>*/}
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