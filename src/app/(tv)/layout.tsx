import React from 'react';

const TVLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <header>TV Header</header>
            <main>{children}</main>
        </div>
    );
};

export default TVLayout;