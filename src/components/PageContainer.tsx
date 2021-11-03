import React from 'react';

const PageContainer: React.FC = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
}

export default PageContainer;