import { types } from "../../src/types/types";

describe('Pruebas en Types.js', () =>{
    test('debe regresar estos types', () => { 
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });
     });
});