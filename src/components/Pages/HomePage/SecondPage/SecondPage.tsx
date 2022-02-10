import React, { useLayoutEffect, useState } from 'react';
import './secondPage.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../i18n';
import { useLocation } from 'react-router-dom';
import { clamp } from 'gsap-trial/src/all';

gsap.registerPlugin(ScrollTrigger);

function SecondPage() {
    const { t } = useTranslation();
    const dataList = t('second', { returnObjects: true }) as any;

    const [language, setLanguage] = useState(i18n.language);
    const location = useLocation();

    return (
        <div className="second-container">
          
            <div className="second-page-container">
                <div className="second-page-text-area">
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
        </div>
    );
}

export default SecondPage;