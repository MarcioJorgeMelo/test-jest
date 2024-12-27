import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


import App from './App';

function sum(n1: number, n2: number) {
    return n1 + n2;
}  

function media(n1: number, n2: number): string {
    const resultado = (n1 + n2) / 2;
    return resultado >= 7 ? "Aprovado" : "Exame";
}

describe("First test app component", () => {

    it("should adds 5 + 2 to equal 7", () => {
        expect(sum(5, 2)).toBe(7);
    })

    it("should calculate the average and return exame", () => {
        expect(media(5, 6)).toBe("Exame");
    })

})

describe("App component", () => {
    
    it("should render app component", () => {
        render(<App />)
        
        const headerTitle = screen.getByTestId("header");
        expect(headerTitle).toHaveTextContent("Sujeito programador");
    })

    it("should heading h1 have correct text", () => {
        render(<App />)
        const titleElements = screen.getAllByRole("heading", { level: 1 });

        titleElements.map((element) => {
            expect(element).toHaveTextContent("Sujeito programador");
        })
    })

    it("should change message on button click", () => {
        render(<App />);

        const buttonElement = screen.getByText("Alterar mensagem");
        fireEvent.click(buttonElement);
        screen.getByText("Estudando teste com reactJS");

        const oldMessage = screen.queryByText("Bem vindo ao projeto");
        expect(oldMessage).not.toBeInTheDocument();
    })

})

export default {}