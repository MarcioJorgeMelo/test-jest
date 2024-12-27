import { fireEvent, render, screen } from "@testing-library/react";
import { User } from ".";

describe("User component", () => {

    it("should check if the name is not displayed when component is mounted", () => {

        render(<User />);

        const message = screen.queryByText("Usuário online: Márcio Jorge");

        expect(message).not.toBeInTheDocument();

    })

    it("should test if the value typed in the input is correct", () => {

        render(<User />);

        const inputElement = screen.getByPlaceholderText("Digite seu nome");
        fireEvent.change(inputElement, { target: { value: "Márcio Jorge" } });

        expect(inputElement).toHaveValue("Márcio Jorge");

    })

    it("should display the name after typing in the input and click on the button", () => {

        render(<User />);

        const input = screen.getByPlaceholderText("Digite seu nome");
        const button = screen.getByRole("button", { name: "Cadastrar" });

        fireEvent.change(input, { target: { value: "Márcio Jorge" } })
        fireEvent.click(button);

        const message = screen.getByText("Usuário online: Márcio Jorge");

        expect(message).toBeInTheDocument();

    })

})

export default {};