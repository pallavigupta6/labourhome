import logo from './logo.png';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isUlVisible, setIsUlVisible] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setIsUlVisible(!isUlVisible); // Toggle the visibility of the <ul> element
  };

  return (
    <aside className='flex h-full w-80 flex-col justify-between border-e bg-white rounded-xl'>
      <div className='px-4 py-6'>
        <span className='grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600'>
          <img src={logo} alt='Logo' />
        </span>
        <div className='' style={{ display: 'grid', paddingLeft: '166px', marginTop: '-2rem' }}>
          <button onClick={toggleSidebar} className='p-2 text-gray-700'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        {isUlVisible && (
          <ul className='mt-6 space-y-1'>
            <li>
              <a
                href='#'
                className='block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700'
              >
                Form
              </a>
            </li>

            <li>
              <a
                href='#'
                className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              >
                Roles & Permission
              </a>
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
