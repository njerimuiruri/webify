import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import RightSidebarModal from './RightSideBarModal';


const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isContentBlurred, setContentBlur] = useState(false);

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };
    const openModal = () => {
        setIsModalOpen(true);
        setContentBlur(true); // Apply the blur effect

    };

    const closeModal = () => {
        setIsModalOpen(false);
        setContentBlur(false); // Remove the blur effect

    };



    return (
        <>
            <Topbar />

            <header
                id="header"
                className={`header d-flex align-items-center ${isNavOpen ? 'mobile-nav-active' : ''
                    }`}
            >
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="#" className="logo d-flex align-items-center">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
                        <div>
                            {/* style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} */}
                            <h1 style={{ color: 'black' }}>Webify<span>.</span></h1>
                            {/* <h2 style={{ color: 'black', marginTop: '5px' }}>Devs<span></span></h2> */}
                        </div>
                    </a>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li className="dropdown">
                                <a href="#">
                                    <span>Drop Down</span>
                                    <i className="bi bi-chevron-down"></i>
                                </a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown">
                                        <a href="#">
                                            <span>Deep Drop Down</span>
                                            <i className="bi bi-chevron-right"></i>
                                        </a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact">Contact</a></li>

                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <button
                                className='btn'
                                style={{
                                    backgroundColor: '#df0a0a',
                                    color: 'white',
                                    borderRadius: '20px',
                                    padding: '10px 20px',
                                    transition: 'background-color 0.3s', // Smooth transition on hover
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '900',
                                    fontWeight: 'bold'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#fcd9db';
                                    e.target.style.color = 'black';
                                    e.target.style.fontSize = 'bold'// Change text color to black on hover
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#df0a0a';
                                    e.target.style.color = 'white'; // Restore text color on mouse leave
                                }}
                            >
                                Get Quote
                            </button>

                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   <i
                                className="bi bi-three-dots-vertical"
                                style={{ color: 'black', cursor: 'pointer' }}
                                onClick={openModal}
                            ></i>
                        </ul>
                    </nav>

                    <div className="navbar-icons-card hide-on-fullscreen" style={{ width: '60px', height: '40px' }}>
                        <div className="card " style={{ background: '#fcd9db' }}>
                            <div className="card-body">
                                {!isNavOpen ? (
                                    <i
                                        className="mobile-nav-toggle mobile-nav-show bi bi-list"
                                        style={{ color: 'black' }}
                                        onClick={toggleNavbar}
                                    ></i>
                                ) : (
                                    <i
                                        className="mobile-nav-toggle mobile-nav-hide bi bi-x"
                                        style={{ color: 'black' }}
                                        onClick={toggleNavbar}
                                    ></i>
                                )}
                            </div>

                        </div>
                    </div>

                    <RightSidebarModal isOpen={isModalOpen} onClose={closeModal}>
                    </RightSidebarModal>
                </div>
            </header>
        </>
    );
};

export default Navbar;
