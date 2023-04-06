import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const Foods = () => {
    const Foods = useLoaderData();
    return (
        <div className='md:grid grid-cols-3 gap-3 md:gap-8 mt-6 mx-3 md:mx-12'>
            {
                Foods.categories.map((food) => <Food
                 key={food.idCategory}
                food={food}
                ></Food>)
            }
        </div>
    );
};

export default Foods;