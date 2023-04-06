import React from 'react';

const Food = ({food}) => {
    console.log(food);

    return (
        <div className='bg-slate-100 drop-shadow-lg p-5'>
            <img className='text-center' src={food.strCategoryThumb} alt="" />
            <div className='flex justify-between items-center'>
            <div>
            <p className='font-bold text-2xl'> {food.strCategory}</p>
            <p className='font-bold text-2xl mt-2'>Id: {food.idCategory}</p>
            </div>
            <div>
                <button className='bg-orange-600 hover:bg-orange-800 text-white font-bold text-lg rounded-xl py-2 px-6'>Details</button>
            </div>
            </div>
        </div>
    );
};

export default Food;