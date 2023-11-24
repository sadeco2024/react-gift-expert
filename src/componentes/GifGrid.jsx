

import { GifGridItem } from "./GifGridItem";
import { useFetchGifts } from "../hooks/useFetchGifts";


export const GifGrid = ({categoria}) => {
    
  const {images, isLoading} = useFetchGifts(categoria) ;

  return (
    <>
        <h4>{categoria}</h4>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
          { 
            images.map(( image) => (
             <GifGridItem
              key={image.id}
              { ...image}
             />
          ))}
          
        </div>
        {/* <h5>{counter}</h5>
        <button onClick={() => setCounter(counter + +1) }>+1</button> */}
    </>
  )
}
