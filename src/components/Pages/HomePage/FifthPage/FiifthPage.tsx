import React from 'react';
import './fifthPage.scss';
import { RightOutlined } from '@ant-design/icons'

function FiifthPage() {
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
