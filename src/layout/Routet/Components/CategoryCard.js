import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CategoryCardSingle from './CategoryCardSingle';

const CategoryCard = () => {
    const categories = useLoaderData(); 
    const {name, img, id} = categories;
    return (
        <div>
            {
                categories.map(c=><CategoryCardSingle key={id} category={c}></CategoryCardSingle>)
            }
        </div>
    );
};

export default CategoryCard;