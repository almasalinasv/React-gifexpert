import React, {useState, useEffect} from 'react'
import { getGIfs } from '../helpers/GetGIfs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
      const newImages = await getGIfs(category);
      setImages(newImages);
      setIsLoading(false);
    }
    
    useEffect(()=> {
      getImages();
    }, [])

  return {
    images,
    isLoading
  }
}
