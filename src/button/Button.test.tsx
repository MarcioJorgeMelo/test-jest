import { render, screen, fireEvent } from "@testing-library/react"
import { Button } from "."

describe("Button component", () => {

    it("should call onclick prop on click", () => {
        const onClick = jest.fn();

        render(<Button onClick={ onClick } disabled={true}>Meu botão</Button>);

        const button = screen.getByText("Meu botão");
        fireEvent.click(button);

        expect(onClick).toHaveBeenCalled();
    })

    it("should render with gray background if disabled", () => {
        
        render(<Button onClick={ () => {} } disabled={true}>Meu botão</Button>);

        const button = screen.getByRole("button", { name: "Meu botão" });

        expect(button).toHaveStyle({ backgroundColor: "#FAFAFA" });

    })

})