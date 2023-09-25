import React from 'react';

const RightSidebarModal = ({ isOpen, onClose }) => {
    return (
        <div className={`right-sidebar-modal ${isOpen ? 'open' : ''}`}>
            {/* Your modal content goes here */}
            <div className="modal-content">
                {/* Content */}

                {/* <button onClick={onClose}>Close</button> */}
                <i className="bi bi-x" onClick={onClose} style={{ position: 'absolute', top: '10px', left: '10px' }}
                ></i>
                <h1>Hello everyone</h1>


            </div>
        </div>
    );
};

export default RightSidebarModal;
