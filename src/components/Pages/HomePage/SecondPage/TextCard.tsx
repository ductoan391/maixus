import React from 'react';

const TextCard = ({ title, desc }: { title: string, desc: string }) => {
    return (
        <div className='sec'>
            <div className='inner-wrapper'>
                <p className='text'>{title} <p className='text-yellow'>{desc}</p></p>
            </div>
        </div>
    );
};

export default TextCard;