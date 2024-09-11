const Sidebar = () => {
  return (
    <aside className='flex h-full w-80 flex-col justify-between border-e bg-white rounded-xl'>
      <div className='px-4 py-6'>
        <span className='grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600'>
          Logo
        </span>

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
      </div>
    </aside>
  );
};

export default Sidebar;
