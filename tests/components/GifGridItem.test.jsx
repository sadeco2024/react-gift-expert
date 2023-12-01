import { render,screen } from "@testing-library/react";
import { GifGridItem } from "../../src/componentes/GifGridItem";


describe('Pruebas <GifGridItem/>', () => { 
      
    const url = 'http://sadeco.mx/';
    const title='Página de Sadeco';
 
    test('debe hacer match con el snapshot', () => { 

        const {container} = render( <GifGridItem title={title} url={url}  />);
        expect(container).toMatchSnapshot();

       })

       test('Debe mostrar la imagen con el URL y el ALT indicado.', () => { 
            const {container} = render( <GifGridItem title={title} url={url}  />);
            // screen.debug();

            // expect(screen.getByRole('img').src).toBe(url);
            // expect(screen.getByRole('img').alt).toBe(title);

            const {src,alt} = screen.getByRole('img');
            expect(src).toBe(url);
            expect(alt).toBe(title);

        })

 })