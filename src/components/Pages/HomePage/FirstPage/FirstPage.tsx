import React, { useEffect, useRef, useState } from 'react';
import './firstPage.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BG from '../../../../Assets/Images/banner-01-kr.png';
import {useTranslation} from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

interface TranslateProps {
    subTitle: string;
    note: string
}

function FirstPage() {
    const { t } = useTranslation();
    const dataList = t("first", { returnObjects: true }) as TranslateProps;
    return (
        <div className="first-page">
            <img className='background' src={BG} alt="" />
            <div className='content'>
                <p className='content__title'>MAX I & US</p>
                <p className='content__subTitle'>{dataList.subTitle}</p>
                <p className='content__note'>{dataList.note}</p>
            </div>
        </div>
    )
}

export default FirstPage;
