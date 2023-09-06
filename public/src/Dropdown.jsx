import { useState } from 'react';
function Dropdown() {
  const [selected, setSelected] = useState('Select');
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className='dropdown'
      onMouseLeave={(e) => setIsActive(false)}
      onClick={(e) => setIsActive(!isActive)}
    >
      <div className='dropdown-btn'>
        {selected}
        <div className='icons'>
          <i className='fa fa-times' onClick={() => setSelected('Select')}></i>
          <span
            className='fa fa-caret-down'
            onMouseOver={(e) => setIsActive(true)}
          ></span>
        </div>
      </div>
      {isActive && (
        <div className='dropdown-content'>
          <div onClick={() => setSelected('Yes')} className='dropdown-item'>
            Yes
          </div>
          <div
            className='dropdown-item'
            onClick={() => setSelected('Probably Not')}
          >
            Probably not
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
