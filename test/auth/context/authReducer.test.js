import { useReducer } from "react";
import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/types/types";

describe('pruebas sobre el archivo de funcion de authReducer', () => {
    // Seteando authReducer para pruebas

    test('Debe retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {});

        expect(state).toEqual({ logged: false });
    });


    test('Debe llamar el login y establecer el user', () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Felipe',
                id: 1
            }
        }
         
        const state = authReducer({logged: true}, action);

        expect(state.user.name).toBe('Felipe');
        expect(state).toEqual({
            logged: true,
            user: action.payload,
        })
    });


    test('debe borrar el name del usuario y establecer logged en false', () => {

        const state = {
            logged: true,
            user: { id: '123', name: 'Juan'}
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer({logged: false}, action);

        expect(newState.user).toBeFalsy();
        expect( newState ).toEqual({ logged: false });

    });
})