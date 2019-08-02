import React from 'react';

export default function TitleText({announcement, guestName, showGuestName}) {
    return (
        <React.Fragment>
            {showGuestName && announcement ? <h1>{announcement}, {guestName}</h1> : ''}
        </React.Fragment>
    )
}