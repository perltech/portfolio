import React from 'react';

export default function GuestName({handleInputChange}) {
    return (
        <React.Fragment>
            <label htmlFor="guestName">Please Enter Your Name Here:
            </label>
            <input
                type="text"
                name="guestName"
                onChange={handleInputChange}
                aria-label="guestName"/>
        </React.Fragment>

    )
}