import React from 'react';

const Header = (props) => {
    const {children} = props
    return (
        <div>
            <h1 className='text-center my-4 text-2xl font-semibold'>Ai Universe Hub</h1>
            <div className='text-center my-5 '>
            <button className='btn btn-info'>{children}</button>

            </div>
        </div>
    );
};

export default Header;