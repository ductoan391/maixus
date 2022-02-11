import React, { useLayoutEffect, useState } from 'react';
import './secondPage.scss';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

function SecondPage() {
    const { t, i18n } = useTranslation();
    const dataList = t('second', { returnObjects: true }) as any;
    const location = useLocation();
    return (
        <div className="second-container">

            <div className="second-page-container">
                <div className="second-page-text-area">
                    {i18n.language === 'ko' ? (
                        <>
                            <div className='laguage-ko ko'>
                                <p className="text" style={{ lineHeight: "1.37" }}>
                                    {dataList.number1} <span className="text-yellow">{dataList.textYellow1}</span>{' '}
                                    <span className="text">{dataList.textWhite1}</span>{' '}
                                </p>
                                <p className="text" style={{ lineHeight: "1.37" }}>
                                    {dataList.number2} <span className="text">{dataList.textWhite2}</span>
                                </p>
                                <p className="text-yellow" style={{ lineHeight: "1.37" }}>
                                    {dataList.textYellow2} <span className="text">{dataList.textWhite3}</span>
                                </p>
                                <p className="text" style={{ lineHeight: "1.37" }}>
                                    {dataList.number3} <span className="text">{dataList.textWhite4}</span>{' '}
                                    <span className="text-yellow">{dataList.textYellow3}</span>{' '}
                                </p>
                                <p className="text" style={{ lineHeight: "1.37" }}>
                                    {dataList.number4} <span className="text">{dataList.textWhite6}</span>{' '}
                                    <span className="text-yellow" style={{ lineHeight: "1.37" }}>{dataList.textYellow4}</span> <span className="text">{dataList.textWhite7}</span>{' '}
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className='language-en en '>
                            <p className="text inline-text">
                                {dataList.number1} <span className="text-yellow">{dataList.textYellow1}</span>{' '}
                                <span className="text">{dataList.textWhite1}</span>{' '}
                            </p>
                            <p className="text inline-text">
                                {dataList.number2} <span className="text spacing-one">{dataList.textWhite2}</span>{' '}
                                <span className="text-yellow">{dataList.textYellow2}</span>
                                <span className="text">{dataList.textWhite21}</span>
                                <span className="text-yellow">{dataList.textYellow21}</span>
                                <span className="text">{dataList.textWhite22}</span>{' '}
                                <span className="text-yellow">{dataList.textYellow22}</span>
                                <span className="text spacing-two">{dataList.textWhite24}</span>
                            </p>
                            <p className="text inline-text">
                                {dataList.number3} <span className="text spacing-three">{dataList.textWhite31}</span>{' '}
                                <span className="text-yellow">{dataList.textYellow3}</span> <span className="text spacing-four">{dataList.textWhite32}</span>
                            </p>
                            <p className="text inline-text">
                                {dataList.number4} <span className="text">{dataList.textWhite4}</span>{' '}
                                <span className="text-yellow">{dataList.textYellow4}</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SecondPage;