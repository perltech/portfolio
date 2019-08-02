import React from 'react';

export default function ProgrammerQuotes({quote, showQuote}) {
    const programmer = Object.keys(quote),
        quoteText = Object.values(quote);

    return (
        <React.Fragment>
            {showQuote && quote 
              // TODO: Possibly make sanity logic more robust
                ? <blockquote>
                        <p>{quoteText}</p>
                        <footer>—
                            <cite>{programmer}</cite>
                        </footer>
                    </blockquote>
                : ''
}

        </React.Fragment>
    )
}