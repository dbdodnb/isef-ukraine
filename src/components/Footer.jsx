import React from "react";

function Footer() {

    return(
        <div className="padding">
            <div className="footer">
                <div className="footer__element">
                    <p className="heading">Всеукраїнський конкурс ISEF Ukraine</p>
                    <p className="footer__text text">Слідкуй за нами в <a className="text" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/isef.ukraine">Instagram</a>!</p>
                </div>
                <div className="footer__element">
                    <p className="heading">Контакти</p>
                    <p className="footer__text text">м. Київ, Кловський узвіз, 8</p>
                    <p className="footer__text text"><a className="text" href="mailto:isef-ukraine@man.gov.ua">isef-ukraine@man.gov.ua</a></p>
                    <p className="footer__text text"><a className="text" href="callto:+380444830032">+38(044) 483 00 32</a></p>
                    <p style={{
                        fontSize: '12px',
                        opacity: '0.8'
                    }} className="footer__text text">*Найкращим методом звʼязку є електронна пошта</p>
                </div>
                <div className="footer__element">
                    <p className="heading">Організатор в Україні</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://man.gov.ua" className="footer__logo"></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;