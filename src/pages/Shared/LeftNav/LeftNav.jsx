import React, { useEffect, useState } from 'react';
import ActiveLink from '../../../activeLink/ActiveLink';
import Cards from './Cards';
import './LeftNav.css';


const LeftNav = () => {
    const [categories, setCategories] = useState ([]);

    useEffect ( () => {
        fetch ('http://localhost:5000/categories')
            .then (res => res.json())
            .then (data => setCategories(data))
            .catch (error => console.error(error))
    }, [] )

    return (
        <div>
            <h4 className='p-4'>All Category</h4>
            <div>
                {
                    categories.map (category => 
                    <p key={category.id} id="act">
                        <ActiveLink to={`/category/${category.id}`}>
                            {category.name}
                        </ActiveLink>
                    </p>)
                }
            </div>
            <Cards></Cards>
        </div>
    );
};

export default LeftNav;