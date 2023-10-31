const {somar} = require('./calculadora')

describe('Teste da calculadora', () => {
    test('Deveria somar dois números ', () => {
        expect(somar(2,3)).toBe(5)
        expect(somar(-1,-1)).toBe(-2)
        expect(somar(2.5,2.25)).toBe(4.75)
        expect(somar(10,0)).toBe(10)
    });
});

