import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { AppRouter } from "../../../src/router/AppRouter";
import { Navbar } from "../../../src/ui";

   
const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", ()=> ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: ()=> mockedUseNavigate,
}))


describe('Pruebas sobre el componente Navbar', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Felipon',
            id: 'ABC123'
        },
        logout: jest.fn()
    }


    

    beforeEach( ()=> jest.clearAllMocks() )

    test('debe aparece el nombre del usuario', () => {

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getByText('Felipon')).toBeTruthy();

    });

    test('debe llamarse el logout y navigate cuando se hace click en el boton de logout', () => {

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const logout = screen.getByRole('button');
        
        fireEvent.click(logout);

        expect(contextValue.logout).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});


    });


})