import React from 'react';
import './main.module.css';
export default function Main({ children }) {
    return (
        <React.Fragment>
          <main>
            {children}
          </main>
        </React.Fragment>
    )
}