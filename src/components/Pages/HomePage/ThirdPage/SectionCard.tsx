import React from 'react';

const SectionCard = ({ title, desc }: { title: string, desc: string }) => {
    return (
      <div className='sec'>
          <div className='inner-wrapper'>
              <p className='show-title'>{title}</p>
              <p className='hide-desc'>{desc}</p>
          </div>
      </div>
    );
};

export default SectionCard;