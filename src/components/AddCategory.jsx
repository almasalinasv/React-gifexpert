import { useState } from 'react';
import { GifExpertApp } from '../GifExpertApp';

export const AddCategory = ({onNewCategory}) => {
 
const  [inputValue, setinputValue] = useState('');

const onInputChange = (event) => {  
   setinputValue(event.target.value);

}
const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
   // setCategories(categ => [...categ, inputValue]);
   onNewCategory(inputValue.trim());
    setinputValue('');
}
    return(
      <form onSubmit={(event) => onSubmit(event)}> 
        <input 
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange = {(event) => onInputChange(event)}
       />
       </form>
    )
} 