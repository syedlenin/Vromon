import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import logo from '../../Vlogo.png'

export default function Header() {
    const [showBasic, setShowBasic] = useState(false);
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    return (
        <MDBNavbar sticky expand='lg' light bgColor='white'>
            <MDBContainer>
                <MDBNavbarBrand href='#'>

                    <img
                        src={logo}
                        height='80'
                        width='80'
                        alt=''
                        loading='lazy'
                    />

                    Vromon</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='/'>Home</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#pack'>Packages</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#aboutus'>About Us</MDBNavbarLink>
                        </MDBNavbarItem>
                        {/* <MDBNavbarItem>
                            <MDBNavbarLink href='#login'>Login</MDBNavbarLink>
                        </MDBNavbarItem> */}
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/product'>Product Details</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/PackageForm'>Package Form</MDBNavbarLink>
                        </MDBNavbarItem>

                        {
                            isAuthenticated ?(

                            <li>
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out
                        </button>
                        </li>
                            ) : (<li>
                                <button  onClick={() => loginWithRedirect()}>Log In</button>
                           </li>
                                )
                        }

                    </MDBNavbarNav>

                    <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                        <MDBBtn color='primary'>Search</MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}