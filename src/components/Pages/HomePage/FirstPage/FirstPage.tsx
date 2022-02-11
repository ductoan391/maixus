import React, { useEffect, useRef, useState } from 'react';
import './firstPage.scss';
import BG from '../../../../Assets/Images/banner-01-kr.png';
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";
import { useLocation } from 'react-router-dom';

interface TranslateProps {
    subTitle: string;
    note: string
}

function FirstPage() {
    const { t } = useTranslation();
    const dataList = t("first", { returnObjects: true }) as TranslateProps;
    const location = useLocation();

    return (
        <div className='first-page'>
            <div className="first-container">
                <div className='inner-content'>
                    <div className='background-container'>
                        <img className='back' src={BG} alt="" />
                    </div>
                    {
                        i18n.language === "ko" ? (
                            <div className='content-container ko'>
                                <p className='title-page-one'>MAX I & US</p>
                                <p className='subTitle'>맥시우스는 시스템반도체를 자체 개발하여 고성능 <br />
                                    서버용 컴퓨터를 제조 판매하는 회사입니다. <br />
                                    우리는 고객에게 최고의 장비와 솔루션을 <br />
                                    제공합니다.</p>
                                <p className='note-page-one'>{dataList.note}</p>
                            </div>
                        ) : (
                            <div className='content-container en'>
                                <p className='title-page-one'>MAX I & US</p>
                                <p className='subTitle'>Maxius is a company that develops its own system <br />
                                    semiconductors and manufactures and sells <br />
                                    computers for high-performance servers. We <br />
                                    supply equipment and solutions to clients in <br />
                                    various cutting edge fields.</p>
                                <p className='note-page-one'>{dataList.note}</p>
                            </div>
                        )
                    }
                </div>





            </div>
        </div>

    )
}

export default FirstPage;