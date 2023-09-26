import React from 'react';

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className='flex space-x-2'>
            <img style={{borderRadius: '0px 200px 200px 200px'}} className='w-[120px]' src={image} alt="" />
            <div>
                <p className='uppercase text-xl'>{name}</p>
                <p className='text-base'>{recipe}</p>
            </div>
            <p className='text-xl text-yellow-500'>{price}</p>
        </div>
    );
};

export default MenuItem;