import { useState } from 'react';

const Accordion = ({ title, info }) => {
    const [open, setOpen] = useState(false);

    return (

        <div className='bg-white p-2 my-1' >
            <div className='flex flex-row justify-between'>
                <p className='text-black'>{title}</p>
                <button onClick={() => setOpen((prev) => !prev)} className='text-black px-2 border-2 border-black rounded-md hover:bg-gray-300'>+</button>
            </div>
            <div>
                <p className={open ? 'flex text-black' : 'hidden'}>{info}</p>
            </div>
        </div>
    );
};

export default Accordion;
