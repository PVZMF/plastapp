import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FaList } from 'react-icons/fa';

import Sidebar from './sidebar';
import MobileMenu from './mobileMenu';

import style from './profile.module.css'

const Profile = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div className={style.profile}>
        <div className={style.sidebarSection}>
          <Sidebar menu={menu} setMenu={setMenu} />
        </div>

        {!menu ?
          <button className={style.open} onClick={() => setMenu(true)}><FaList /></button>
          :
          <MobileMenu menu={menu} setMenu={setMenu} />
        }
        <div className={style.bodyProfile}>
            <Outlet />
        </div>
    </div>
  )
}

export default Profile