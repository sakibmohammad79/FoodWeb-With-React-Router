import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const Foods = () => {
    const Foods = useLoaderData();
    return (
        <div>
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