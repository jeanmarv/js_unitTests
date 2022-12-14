const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof productDetails(), 'object', 'o retorno nao é um array.');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2, 'o array nao possui exatamente 2 itens');
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails()[0], 'object', 'o item retornado nao é um objeto');
    assert.strictEqual(typeof productDetails()[1], 'object', 'o item retornado nao é um objeto');
    // Teste que os dois objetos são diferentes entre si
    assert.notStrictEqual(productDetails()[0], productDetails()[1], 'os parametros passados são iguais');
    // Teste que os dois productIds terminam com 123.
    assert.strictEqual(productDetails()[0].details.productId.endsWith('123'), true, 'final dos produtos nao termina em 123');
    assert.strictEqual(productDetails()[1].details.productId.endsWith('123'), true, 'final dos produtos nao termina em 123');
  });
});
