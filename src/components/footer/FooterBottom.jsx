import React from 'react'
import { ArrowIcon } from '../../assets/icons'

function FooterBottom() {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="footer-bottom__row">
                    <p className="footer-bottom__title">
                        © 2023 Электронная коммерция.
                    </p>
                    <div className="footer-bottom">
                        <div className='footer-bottom__content'>
                            {/* <img src="/images/footer/usa-logo.png" alt="usa icon" /> */}
                            <p className="footer-bottom__subtitle">Русский</p>
                            {/* <button className='footer-bottom__btn'>
                                <ArrowIcon />
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom