
import React from 'react';
import {useState} from 'react';
import { AddCategory, GifGrid } from './components';
export const GifExpertApp =() =>{

    const [categories, SetCategory ] = useState(['Justin Bieber','BTS']);

   const onAddCategory = (newCategory) =>{
    
        if(categories.includes(newCategory)) return;
        SetCategory([newCategory, ...categories]);
    }

    return(
        <>
        <h1>GifExpertApp</h1>
       < AddCategory 
       //setCategories={SetCategory}
     onNewCategory={event => onAddCategory(event) }
       />
       
        <ol>
            {
                categories.map((category) => (
                <GifGrid key = {category} category = {category}/>
                ))
            }
        </ol>
     </>   
    )
}