// import React from "react"; 

// function Nav() {

//     return (
//         <div className="padding">
//             <div id="main" className="nav">
//                 <div className="logo">
//                     <a href="#main" className="nav__logo"></a>
//                 </div>
//                 <div className="links">
//                     <ul>
//                         <li><a href="">Головна</a></li>
//                         <li><a href="">Категорії</a></li>
//                         <li><a href="">Учасникам</a></li>
//                         <li><a href="">Результати</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Nav;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    // Залиште ваші поточні класи для цих тегів без змін
    <div className="padding">
        <nav className="nav">
            <div className="logo">
                 <a href="/" className="nav__logo"></a>
                 </div>
        <div className="links">
            <ul className="navbar-nav">
          
          {/* Клас для li також залишається вашим (наприклад, nav-item) */}
          <li className="nav-item">
            <NavLink 
              to="/" 
              end
              // Замість "nav-link" підставте ті класи, які зараз вказані у вашому тегу <a>.
              // Клас "active" буде додаватися автоматично, коли сторінка відкрита.
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Головна
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink 
              to="/categories" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Категорії
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink 
              to="/participants" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Учасникам
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink 
              to="/results" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Результати
            </NavLink>
          </li>

        </ul>
        </div>
    </nav>
    </div>
  );
};

export default Nav;