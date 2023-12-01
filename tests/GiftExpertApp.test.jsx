import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GiftExpertApp';
import { useFetchGifts } from '../src/hooks/useFetchGifts';


     /** TODO:
      * 1. Escribir en el imput
      * 2. Mandar el formulario
      * 3. SnapShot
      * 4. Que pasa si manda la misma cagegoría.
      * 5. Que sucede en el HTML
      */
describe('Pruebas del componente: <GifExpertApp />', () => { 


    const inputValue = 'Ricardo Arjona';

    test('Prueba inicial', () => { 

        /* NO ESTÁN TERMINADAS LAS PRUEBAS */
        render(<GifExpertApp/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: ''}});
        fireEvent.submit(form);

        const {  result } = renderHook( () => useFetchGifts('Ricardo Arjona'))
        const {images, isLoading} = result.current;


        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);


        screen.debug()  
        
     })


 })