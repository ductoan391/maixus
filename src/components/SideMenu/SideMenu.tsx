import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../Pages/HomePage/Home';
import './SideMenu.scss';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const SideMenu = () => {
    const [selected, setSelected] = React.useState<'ko' | 'en'>('ko');
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

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>

            <div className="side-menu-container">
                <nav role="navigation">
                    <div id="side-menu-toggle">
                        <input type="checkbox" checked={closeSideMenu} onClick={() => setCloseSideMenu((prev) => !prev)} />
                        <div className="side-menu-container-change-lang-wrapper">
                            <div className={`change-lang ko ${selected === 'ko' ? 'select' : ''}`} onClick={() => handleChangeLanguage('ko')}>
                                KR
                            </div>
                            <div className={`change-lang en ${selected === 'en' ? 'select' : ''}`} onClick={() => handleChangeLanguage('en')}>
                                EN
                            </div>
                        </div>

                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <div className="side-menu-container-change-lang-menu">
                                <div
                                    className={`side-menu-container-change-lang-menu-item ko ${selected === 'ko' ? 'select' : ''}`}
                                    onClick={() => handleChangeLanguage('ko')}
                                >
                                    KR
                                </div>
                                <div
                                    className={`side-menu-container-change-lang-menu-item ko ${selected === 'en' ? 'select' : ''}`}
                                    onClick={() => handleChangeLanguage('en')}
                                >
                                    EN
                                </div>
                            </div>
                            <NavLink className="list" to="/" onClick={() => setCloseSideMenu(false)}>
                                <li>Home</li>
                            </NavLink>
                            <NavLink className="list" to="/works" onClick={() => setCloseSideMenu(false)}>
                                <li>Works</li>
                            </NavLink>
                            <NavLink className="list" to="/teams" onClick={() => setCloseSideMenu(false)}>
                                <li>Teams</li>
                            </NavLink>
                            <NavLink className="list" to="/contact" onClick={() => setCloseSideMenu(false)}>
                                <li>Contact</li>
                            </NavLink>
                            <div className="info-wrapper">
                                <p id="address">
                                    {t('address')}
                                    <br />
                                    Tel 02. 543. 4983 / Fax 02. 6280. 4079
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
                                <p>Work with us.</p>
                                <p className="link">
                                    <a href="mailto:loocreative@playlooc.com" title="">
                                        loocreative@playlooc.com
                                    </a>
                                </p>
                                <br />
                                <p>Recruiting</p>
                                <p className="link">
                                    <a href="mailto:loocreative@playlooc.com" title="">
                                        loocreative@playlooc.com
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
