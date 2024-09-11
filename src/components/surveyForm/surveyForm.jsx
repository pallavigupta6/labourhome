import Dropdown from '../dropdown';
import Input from '../input';
import MultiSelect from '../multiselect/multiselect';
import { genderOptions, indianStates, wishlist } from '../../constants/common';

const SurveyForm = () => {
  return (
    <div className='flex h-full w-full flex-col  border-e bg-white rounded-xl overflow-y-auto p-4'>
      <nav className='bg-white  px-8 py-4 mb-2'>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <a href='/' className='flex items-center'>
            <span className='self-center text-4xl font-medium  whitespace-nowrap text-black'>
              Form
            </span>
          </a>
        </div>
      </nav>
      <form className='bg-gray-100 p-8 rounded'>
        <div className='grid grid-cols-3 gap-4 '>
          <div>
            <Input label='Name' />
          </div>
          <div>
            <Input label='Father Name' />
          </div>
          <div>
            <Input type='number' label='Mobile Number' />
          </div>
          <div>
            <Dropdown label='Gender' options={genderOptions} />
          </div>
          <div className='col-span-2'>
            <Input label='Address' />
          </div>

          <div>
            <Input label='City' />
          </div>
          <div>
            <Dropdown label='State' options={indianStates} />
          </div>
          <div>
            <Input label='Pin code' />
          </div>
          <div>
            <MultiSelect label='Wish list' options={wishlist} />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div className='itemList grid grid-cols-6 gap-2 bg-white p-4'>
            <div className='item col-span-3'>Item List</div>
            <div className='price col-span-2'>Price</div>

            <div className='item col-span-3'>
              <Dropdown className='mb-1' options={wishlist} />
            </div>
            <div className='price col-span-2'>
              <Input containerClassName='mb-1' defaultValue={500} />
            </div>
            <div className='action flex items-center text-3xl ml-3'>+</div>

            <div className='item col-span-3'>
              <Dropdown className='mb-1' options={wishlist} />
            </div>
            <div className='price col-span-2'>
              <Input containerClassName='mb-1' defaultValue={500} />
            </div>
            <div className='action flex items-center text-3xl ml-3'>-</div>

            <div className='item col-span-3'>
              <Dropdown className='mb-1' options={wishlist} />
            </div>
            <div className='price col-span-2'>
              <Input containerClassName='mb-1' defaultValue={500} />
            </div>
            <div className='action flex items-center text-3xl ml-3'>-</div>
          </div>
          <div className='itemDesc bg-white p-4'>
            <div className='items flex gap-2 items-center mb-4'>
              <div className='item p-2 bg-gray-200 rounded text-sm'>Item Name-1</div>
              <div className='item p-2 bg-gray-100 rounded text-sm'>Item Name-1</div>
            </div>
            <div>
              <textarea
                className='resize-none bg-gray-100 block w-full px-3 py-2 border border-gray-300 border-dashed rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                placeholder='Write your message here...'
                rows={5}
              />
              <div className='text-gray-400 text-sm mt-1'>100 max characters</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SurveyForm;
