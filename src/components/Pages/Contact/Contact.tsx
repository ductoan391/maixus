import React from 'react';
import './contact.scss'
import MapPage from './MapPage';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t, i18n } = useTranslation()

    return (
        <div className='contact_container'>
            <h1 className='title'>Contact us</h1>

            <div className="wrap_content">
                <div className="map">
                    <MapPage />
                </div>
                <div className="address">
                    <div className="address_one">
                        <p>{t("address2")}</p>
                        <p><span> Tel 02. 851. 2662/ Fax 02. 851. 2662</span></p>
                    </div>
                    <div className="address_two">
                        <div className="mail_one">
                            <p className='text1'>Work with us</p>
                            <p className='text2'>loocreative@playlooc.com</p>
                        </div>
                        <div className="mail_two">
                            <p className='text3'>Careers</p>
                            <p className='text4'>loocreative@playlooc.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact;
