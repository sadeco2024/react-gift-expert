import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";


export const useFetchGifts = (category) => {

    const [images, setNewImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await(getGifts(category));
        setNewImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    },[])


  return {
    images: images,
    isLoading: isLoading,
  }
}
