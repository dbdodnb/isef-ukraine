import React from "react";

function Header() {

    return (
        <div className="padding">
            <div className="header">
                <p className="header__heading">Всеукраїнський конкурс ISEF Ukraine</p>
                <p className="header__text">Національний етап Міжнародної науково-технічної виставки Regeneron ISEF, що проходить щорічно у Сполучених Штатах Америки</p>
                <p className="header__text">Організатором Всеукраїнського конкурсу ISEF Ukraine є Національний центр “Мала академія наук України”</p>
                <p className="header__text">Реєстрацію до ознайомчих вебінарів завершено. Очікуйте на початок реєстрації проєктів</p>
                {/* <a href="https://form.jotform.com/262572619941364" className="header__text header__button">Зареєструватися на вебінари ISEF Ukraine</a> */}
            </div>
        </div>
    );
}

export default Header;