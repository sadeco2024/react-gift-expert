
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/componentes/AddCategory';

describe('Pruebas en <AddCategory />', () => { 

    test('Debe cambiar el valor de la caja de texto', () => { 
        
        const {container} = render(<AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, {target: {value: 'Saitama'}});
        expect(input.value).toBe('Saitama')
        
     })

     test('debe llamar onNewCategory, si el input tiene un valor', () => { 
        const inputValue = 'Ricardo Arjona';

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe(''); // Es un string vacio después de la búsqueda.
        expect(onNewCategory).toHaveBeenCalled(); // solo si ha sido llamada.
        expect(onNewCategory).toHaveBeenCalledTimes(1);  // ha sido llamada tantas veces
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        
      })    


      test('No debe de llamar el onNewCategory si elinput está vacio', () => { 

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory} />);

        const form = screen.getByRole('form');

        
        fireEvent.submit(form);
        // screen.debug();

        expect(onNewCategory).not.toHaveBeenCalled(); // solo si ha sido llamada.
        expect(onNewCategory).toHaveBeenCalledTimes(0);  // ha sido llamada tantas veces

        

       })

 })