import { gsap } from 'gsap';
import React, { useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Route, Routes } from 'react-router-dom';
import arrow from '../../Assets/Images/arrow-icon.png';
import i18n from '../../i18n';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/HomePage/Home';
import './SideMenu.scss';

const SideMenu = () => {
    const [selected, setSelected] = useState<'ko' | 'en'>('ko');
    const [showItemBrochure, setShowItemBrochure] = useState<boolean>(false);
    const [showItemProposal, setShowItemProposal] = useState<boolean>(false);
    const { t } = useTranslation();

    const [closeSideMenu, setCloseSideMenu] = useState<boolean>();

    const handleChangeLanguage = (lang: 'ko' | 'en') => {
        if (lang === 'ko') {
            i18n.changeLanguage('ko');
            setSelected(lang);
        } else {
            i18n.changeLanguage(lang);
            setSelected(lang);
        }
    };

    const handleClickBrochure = () => {
        setShowItemProposal(false);
        setShowItemBrochure(!showItemBrochure);
    };
    const handleClickProposal = () => {
        setShowItemBrochure(false);
        setShowItemProposal(!showItemProposal);
    };
    const handleClickHome = () => {
        setCloseSideMenu(false);
        setShowItemProposal(false);
        setShowItemBrochure(false);
    }


    useLayoutEffect(() => {
        const brochureList = document.querySelectorAll('.brochure-list');
        const item1 = document.querySelectorAll('.item-1');
        const item2 = document.querySelectorAll('.item-2');
        const item3 = document.querySelectorAll('.item-3');
        const item4 = document.querySelectorAll('.item-4');
        const item5 = document.querySelectorAll('.item-5');
    
        const revealAnim = () => {
            const TLFade = gsap.timeline({
               
            });

            TLFade.fromTo(item1, {y: '-100%', opacity: 0}, {y: '0%', opacity: 1, duration: 0.1})
            TLFade.fromTo(item2, {y: '-100%', opacity: 0, delay:-0.1}, {y: '0%', opacity: 1, duration: 0.1})
            TLFade.fromTo(item3, {y: '-100%', opacity: 0, delay:-0.2}, {y: '0%', opacity: 1, duration: 0.1})
            TLFade.fromTo(item4, {y: '-100%', opacity: 0, delay:-0.3}, {y: '0%', opacity: 1, duration: 0.1})
            TLFade.fromTo(item5, {y: '-100%', opacity: 0, delay:-0.4}, {y: '0%', opacity: 1, duration: 0.1})
        
        };

        revealAnim();
    }, [showItemBrochure, showItemProposal]);
 

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
            <div className="side-menu-container">
                <nav role="navigation">
                    <div id="side-menu-toggle">
                        <input type="checkbox" checked={closeSideMenu} onClick={() => setCloseSideMenu((prev) => !prev)} />
                        <div className="side-menu-container-change-lang-wrapper">
                            <div className={`change-lang en ${selected === 'en' ? 'select' : ''}`} onClick={() => handleChangeLanguage('en')}>
                                EN
                            </div>
                            <div className={`change-lang ko ${selected === 'ko' ? 'select' : ''}`} onClick={() => handleChangeLanguage('ko')}>
                                KR
                            </div>
                        </div>

                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <div className="side-menu-container-change-lang-menu">
                                <div
                                    className={`side-menu-container-change-lang-menu-item ko ${selected === 'en' ? 'select' : ''}`}
                                    onClick={() => handleChangeLanguage('en')}
                                >
                                    EN
                                </div>
                                <div
                                    className={`side-menu-container-change-lang-menu-item ko ${selected === 'ko' ? 'select' : ''}`}
                                    onClick={() => handleChangeLanguage('ko')}
                                >
                                    KR
                                </div>
                            </div>
                            <NavLink className="list" to="/" onClick={() => handleClickHome()}>
                                <li>Home</li>
                            </NavLink>
                            <div className="list" onClick={() => handleClickBrochure()}>
                                <li className={`${showItemBrochure ? 'choose' : ''}`}>Brochure</li>
                                <ul className={`brochure-list ${showItemBrochure ? '' : 'disable'}`}>
                                    <li className="brochure-item item-1">
                                        <p>Download-1</p> <img src={arrow} alt=""></img>
                                    </li>
                                    <li className="brochure-item item-2">
                                        <p>Download-2</p> <img src={arrow} alt=""></img>
                                    </li>
                                    <li className="brochure-item item-3">
                                        <p>Download-3</p> <img src={arrow} alt=""></img>
                                    </li>
                                    <li className="brochure-item item-4">
                                        <p>Download-4</p> <img src={arrow} alt=""></img>
                                    </li>
                                    <li className="brochure-item item-5">
                                        <p>Download-5</p> <img src={arrow} alt=""></img>
                                    </li>
                                </ul>
                            </div>
                            <div className="list" onClick={() => handleClickProposal()}>
                                <li className={`${showItemProposal ? 'choose' : ''}`}>Proposal</li>
                                <ul className={`proposal-list ${showItemProposal ? '' : 'disable'}`}>
                                    <li className="proposal-item item-1">
                                        <p>Download-1</p> <img src={arrow} alt=""></img>
                                    </li>
                                    <li className="proposal-item item-2">
                                        <p>Download-2</p> <img src={arrow} alt=""></img>
                                    </li>
                                    <li className="proposal-item item-3">
                                        <p>Download-3</p> <img src={arrow} alt=""></img>
                                    </li>
                                </ul>
                            </div>
                            <NavLink className="list" to="/contact" onClick={() => handleClickHome()}>
                                <li>Contact</li>
                            </NavLink>
                            <div className="info-wrapper">
                                <p id="address">
                                    {t('address')}
                                    <br />
                                    Tel 02. 851. 2662/ Fax 02. 851. 2662
                                </p>
                                <p className="link">
                                    <a
                                        href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6611743669755!2d127.0209823151663!3d37.51590877980742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e9253866e9%3A0xc7c3669311c4500c!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrhbztmITrj5kg64-E7IKw64yA66GcOOq4uCAxNy0xMCAxRg!5e0!3m2!1sko!2skr!4v1574831755695!5m2!1sko!2skr"
                                        target="blank"
                                    >
                                        View Map
                                    </a>
                                </p>
                                <br />
                                <p>Company.</p>
                                <p className="link">
                                    <a href="mailto:support@taejin.co.kr" title="">
                                        support@taejin.co.kr
                                    </a>
                                </p>
                                <br />
                                <p>Technical support</p>
                                <p className="link">
                                    <a href="mailto:support@taejin.co.kr" title="">
                                        support@taejin.co.kr
                                    </a>
                                </p>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default SideMenu;
