import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas en <AppRouter />', () => {

    test('debe mostrar el login si no esta autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Login').length).toBe(2);
    });

    test('debe mostrar el componente de marvel si esta autenticado', () => { 
        
        const contextValue = {
            logged: true,
            user: {
                name: 'Felipe',
                id: 'ABC123'
            }
        }

        render( 
            <MemoryRouter InitialEntries={["/login"]}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        )

       
        expect(screen.getByText('MarvelPage')).toBeTruthy();


     });
});