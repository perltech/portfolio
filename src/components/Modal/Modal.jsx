import React from 'react';

import './modal.module.css';

export default function Modal({handleModal, show, children}) {
    let showHideClassName = show
        ? "modal display-block"
        : "modal display-none";

    return (
        <React.Fragment>
            <div className={showHideClassName}>
                <section className="modal-main">
                    {children}
                    <button onClick={handleModal}>close</button>
                </section>
            </div>
        </React.Fragment>

    );
};
