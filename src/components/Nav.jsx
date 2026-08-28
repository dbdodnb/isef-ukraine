import React from "react";

function Nav() {

    return (
        <div className="padding">
            <div id="main" className="nav">
                <div className="logo">
                    <a href="#main" className="nav__logo"></a>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="">Головна</a></li>
                        <li><a href="">Категорії</a></li>
                        <li><a href="">Учасникам</a></li>
                        <li><a href="">Результати</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav;