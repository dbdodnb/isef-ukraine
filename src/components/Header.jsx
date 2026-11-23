import React from "react";
import { Tiles, Arrow } from "./Icons";

function Header() {

    return (
        <div className="padding">
            <section className="header">
                <div className="header__panel">
                    <p className="header__kicker">Всеукраїнський конкурс</p>
                    <h1 className="header__heading">ISEF Ukraine <span>2027</span></h1>
                    <p className="header__text">Національний етап Міжнародної науково-технічної виставки Regeneron ISEF, що проходить щорічно у Сполучених Штатах Америки</p>
                    <p className="header__text">Організатором Всеукраїнського конкурсу ISEF Ukraine є Національний центр “Мала академія наук України”</p>
                    <p className="header__status">
                        <Arrow className="header__status-icon" />
                        Реєстрацію проєктів до участі в I етапі ISEF Ukraine 2027 завершено
                    </p>
                    {/* <a href="https://form.jotform.com/262572619941364" className="header__button">Зареєструватися на вебінари ISEF Ukraine</a> */}
                    <div className="header__deco"></div>
                </div>
                <div className="header__media">
                    <div className="header__photo"></div>
                    <Tiles count={4} className="header__tiles" />
                </div>
            </section>
        </div>
    );
}

export default Header;