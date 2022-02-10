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
        <div className="first-container">
            <img className='background' src={BG} alt="" />
            <div className="logo">
                <h3>maxius</h3>
            </div>
            {
                i18n.language === "ko" ? (
                    <div className='content-container ko'>
                        <p className='title'>MAXI & US</p>
                        <p className='subTitle'>{dataList.subTitle}</p>
                        <p className='note'>{dataList.note}</p>
                    </div>
                ) : (
                    <div className='content-container en'>
                        <p className='title'>MAXI & US</p>
                        <p className='subTitle'>{dataList.subTitle}</p>
                        <p className='note'>{dataList.note}</p>
                    </div>
                )
            }


        </div>
    )
}

export default FirstPage;