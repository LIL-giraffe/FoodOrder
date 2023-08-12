import React from 'react'
import classes from '../styles/AvailableMeals.module.css'
import Cards from './Cards';
import MealItem from './MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const data = DUMMY_MEALS.map(meals => <MealItem key={meals.id} name={meals.name} description={meals.description} price={meals.price} />);
    return (
        <section className={classes.meals} >
            <Cards>
                <ul>
                    {data}
                </ul>
            </Cards>
        </section>
    )
}

export default AvailableMeals