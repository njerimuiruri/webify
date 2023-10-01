import React from 'react';

const RightSidebarModal = ({ isOpen, onClose }) => {
    const blurClassName = isOpen ? 'blur-background' : '';

    return (
        <>
            <div className={`background ${blurClassName}`}></div>


            <div className={`right-sidebar-modal ${isOpen ? 'open' : ''}`}>
                <div
                    className="modal-content-scrollable "
                    style={{
                        maxHeight: 'calc(100vh - 20px)', // A
                        overflowY: 'auto',
                        padding: '10px',
                    }}
                >
                    <div className="modal-content">

                        <button
                            className="btn btn-danger" // You can use Bootstrap classes for styling
                            onClick={onClose}
                            style={{ cursor: 'pointer', width: '40px' }}
                        >
                            <i className="bi bi-x"></i>
                        </button>


                        <a href="#" className="logo d-flex align-items-center" style={{ marginRight: '120px' }}>
                            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
                            <div>
                                <h1 style={{ color: 'black' }}>Webify<span>.</span></h1>
                            </div>
                        </a>
                        {/* Company Logo */}


                        {/* Company Description */}
                        <h6
                            style={{

                                fontSize: '17px',
                                color: '#788',
                                marginBottom: '10px',
                                lineHeight: '1.8',
                                fontWeight: '500',
                                fontFamily: ' Montserrat, sans-serif',
                                textAlign: 'left'
                            }}>
                            Turning Ideas Into Reality. From websites to apps, we make your vision a reality with expertise and guidance
                        </h6>
                        <br />
                        <h6
                            style=
                            {{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '23px',
                                // fontFamily: 'Gabarito, cursive',
                                fontFamily: 'Open Sans, sans-serif',
                                textAlign: 'left'
                            }}
                        >
                            Get In Touch
                        </h6>

                        <span style={{ textAlign: 'left' }}>
                            <i className="bi bi-telephone-fill" style={{ color: 'red' }}></i>
                            <span style={{ color: 'black' }}> &nbsp;+1 (555) 123-4567</span>
                        </span>
                        <br />


                        <span style={{ textAlign: 'left' }}>
                            <i className="bi bi-envelope" style={{ color: 'red', fontWeight: 'bold' }}></i>
                            <span style={{ color: 'black' }}>&nbsp;   +1 (555) 123-4567</span>
                        </span>
                        <br />
                        <span style={{ textAlign: 'left' }}>
                            <i className="bi bi-geo-alt-fill" style={{ color: 'red', fontWeight: 'bold' }}></i>
                            <span style={{ color: 'black' }}>&nbsp;   +1 (555) 123-4567</span>
                        </span>

                        {/* Additional Content */}
                        {/* Add any additional content here */}
                    </div>
                </div>
            </div >
        </>

    );
};

export default RightSidebarModal;
