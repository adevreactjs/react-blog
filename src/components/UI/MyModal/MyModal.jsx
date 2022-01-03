import React from 'react';
import cl from './MyModal.module.css';

export const MyModal = ({ children, visible, setVisible }) => {

    const rootClasses = [cl.myModal]
    if (visible) {
        rootClasses.push(cl.active)
    }

  return (
    <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
      <div className={cl.myModalContent} onClick={e=> e.stopPropagation()}>
          {children}
          </div>
    </div>
  );
};
