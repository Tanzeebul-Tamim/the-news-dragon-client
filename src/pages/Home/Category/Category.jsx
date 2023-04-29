import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    console.log(id)
    const categoryNews = useLoaderData();
    return (
        <div>
            {
                id == 0 ?
                <h2 className='mb-4'>Dragon News Home</h2> : 
                <h2 className='mb-4'>Total news in this category : {categoryNews.length}</h2> 
            }
            {
                categoryNews.map (news => <NewsCard news={news} key={news._id}></NewsCard>)
            }
        </div>
    );
};

export default Category;