import { renderHook,waitFor } from '@testing-library/react';
import { useFetchGifts } from '../../src/hooks/useFetchGifts';


useFetchGifts

describe('Pruebas en el hook useFetchGifts', () => { 

    test('debe regresar el estado inicial.', () => { 
        const {  result } = renderHook( () => useFetchGifts('Ricardo Arjona'))
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

     })

     test('Debe de retornar un arreglo de imagenes y el isLoading en false', async() => { 

        const {  result } = renderHook( () => useFetchGifts('Ricardo Arjona'))
        
        await waitFor( () => expect(result.current.images.length).toBeGreaterThan(0) )

        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

        

      })

 })