import { useState, useEffect } from 'react';
import Input from '../input';

const MultiSelect = ({ options, label, value, onChange }) => {
  const [internalValue, setInternalValue] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const selectedOptions = value !== undefined ? value : internalValue;
  const handleCheckboxChange = (value) => {
    const newValue = selectedOptions.includes(value)
      ? selectedOptions.filter((item) => item !== value)
      : [...selectedOptions, value];

    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  useEffect(() => {
    if (!value) {
      return;
    }
    setInternalValue(value);
  }, [value]);

  return (
    <div className='mb-4'>
      <label className='block text-sm font-medium text-gray-700'>{label}</label>
      <div className='w-full'>
        <Input
          readonly
          value={selectedOptions.join(', ')}
          onClick={() => setShowOptions(!showOptions)}
        />
        {showOptions && (
          <div className='border rounded-md p-2 max-w-md bg-white'>
            {options.map((option) => (
              <div key={option.value} className='flex items-center mb-2'>
                <input
                  type='checkbox'
                  id={option.value}
                  value={option.value}
                  onChange={() => handleCheckboxChange(option.value)}
                  checked={selectedOptions.includes(option.value)}
                  className='h-4 w-4 text-blue-600 border-gray-300 rounded'
                />
                <label htmlFor={option.value} className='ml-2 text-sm text-gray-700'>
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelect;
