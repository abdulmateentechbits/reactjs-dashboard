import React, { useState } from 'react'
import { UserBody, UserFooter, UserHeader, UserMenuDropdown } from '../../../../styles/dropdown-menu';
import { useDispatch, useSelector } from 'react-redux';
import { StyledBigUserImage, StyledSmallUserImage } from '../../../../styles/common';
import { Link, useNavigate } from 'react-router-dom';
import { setAuthentication } from '../../../../store/reducers/auth';
import { DateTime } from 'luxon';

const UserDropDown = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authentication = useSelector((state: any) => state.auth.authentication);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const navigateToProfile = (event: any) => {
        event.preventDefault();
        setDropdownOpen(false);
        navigate('/profile');
    };
    const logout = () => {
        dispatch(setAuthentication(undefined));
        localStorage.removeItem("authentication");
    }
    return (
        <UserMenuDropdown isOpen={dropdownOpen} hideArrow>
            <StyledSmallUserImage
                slot="head"
                src={authentication.profile.picture}
                fallbackSrc="../../../../../public/img/logo.jpeg"
                alt="User"
                width={25}
                height={25}
                rounded
            />

            <div slot="body">
                <UserHeader className=" bg-primary">
                    <StyledBigUserImage
                        src={authentication.profile.picture}
                        fallbackSrc="../../../../../public/img/logo.jpeg"
                        alt="User"
                        width={90}
                        height={90}
                        rounded
                    />
                    <p>
                        {authentication.profile.email}
                        <small>
                            <span>Member since </span>
                            <span>
                                2024
                            </span>
                        </small>
                    </p>
                </UserHeader>
                <UserBody>
                    <div className="row">
                        <div className="col-4 text-center">
                            <Link to="/">Intrest</Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/">Sales</Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/">Friends</Link>
                        </div>
                    </div>
                </UserBody>
                <UserFooter>
                    <button
                        type="button"
                        className="btn btn-default btn-flat"
                        onClick={navigateToProfile}
                    >
                        mateen.dev
                    </button>
                    <button
                        type="button"
                        className="btn btn-default btn-flat float-right"
                        onClick={logout}
                    >
                        Logout
                    </button>
                </UserFooter>
            </div>

        </UserMenuDropdown>
    )
}

export default UserDropDown