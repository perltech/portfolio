import React from 'react';

export default function TitleText({announcement, guestName}) {
    return (
        <React.Fragment>
            <h1>{announcement}{guestName
                    ? `, ${guestName}!`
                    : ''}</h1>
        </React.Fragment>
    )
}