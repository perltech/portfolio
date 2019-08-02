import React from 'react';

export default function TitleText({announcement, guestName, showGuestName}) {
    return (
        <React.Fragment>
            {/* <h1>{announcement && showGuestName
                ? announcement
                : ''
                } {guestName && showGuestName
                    ? guestName
                    : ''}</h1> */}
            {showGuestName && announcement ? <h1>{announcement}, {guestName}</h1> : ''}
        </React.Fragment>
    )
}