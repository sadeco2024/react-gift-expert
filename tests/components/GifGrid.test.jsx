import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/componentes/GifGrid";
import { useFetchGifts } from "../../src/hooks/useFetchGifts";
jest.mock("../../src/hooks/useFetchGifts");

describe("Pruebas en <GifGrid />", () => {
  const category = "Ricardo Arjona";

  // NO FUNCIONA POR EL MOOK
  test("debe mostar el loading inicialmente", () => {
    useFetchGifts.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid categoria={category} />);
    expect(screen.getByText(category));
    expect(screen.getByText("Cargando..."));
    
  });

  test("Deben de mostrar items, cuando se cargan las imágenes mediante el useFerchFigt", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://sadeco.mx/milo.jpg",
      },
      {
        id: "123",
        title: "México",
        url: "https://sadeco.mx/mexico.jpg",
      },
    ];
    useFetchGifts.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GifGrid categoria={category} />);
    expect(screen.getAllByRole('img').length).toBe(2)
    screen.debug();

    
  });
});
