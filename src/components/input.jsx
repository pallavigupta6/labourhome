const Input = ({ label, id, className, containerClassName, ...rest }) => {
  return (
    <div className={`mb-4 ${containerClassName}`}>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <input
        id={id}
        className={` ${className} mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        {...rest}
      />
    </div>
  );
};

export default Input;
