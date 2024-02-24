import React from 'react'
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { Link, json } from 'react-router-dom';
import MenuItem from '../../../components/menu-item/MenuItem';

export interface IMenuItem {
    name: string;
    icon?: string;
    path?: string;
    children?: Array<IMenuItem>;
  }

  export const MENU: IMenuItem[] = [
    {
      name: "Dashboard",
      icon: 'fas fa-tachometer-alt nav-icon',
      path: '/',
    },
    {
      name: "Settings",
      icon: 'fas fa-wrench nav-icon',
      path: '/blank',
    }
  ];

const MenuSidebar = () => {
    const sidebarSkin = useSelector((state: any) => state.ui.sidebarSkin);
    const authentication = JSON.parse(useSelector((state:any)=>state.auth.authentication));
    console.log("🚀 ~ MenuSidebar ~ authentication:", authentication)

    return (
        <aside className={`main-sidebar elevation-4 ${sidebarSkin}`}>
            <Link to="/" className='brand-link'>
                <Image
                    src='../../../../public/img/logo.jpeg'
                    roundedCircle
                />
                <span className='brand-text font-weight-light' style={{ marginLeft: 10 }}>mateen.dev</span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <Image
                            src='../../../../public/img/logo.jpeg'
                            roundedCircle
                        />
                    </div>
                    <div className="info">
                        <Link to="/profile" className='d-block'>
                            {authentication.profile.email}
                        </Link>
                    </div>
                </div>
                
                {/* nav */}
                <div className="mt-2" style={{overflowY:'hidden'}}>
                    <ul
                     className='nav nav-pills nav-sidebar flex-column'
                     role='menu'
                    >
                    {
                        MENU.map((item)=>(
                            <MenuItem
                              key={item.name + item.path}
                              menuItem={item}
                            />
                        ))
                    }

                    </ul>

                </div>
            </div>

        </aside>
    )
}

export default MenuSidebar
