const casex = require('../build/casex.js');

describe('casex', () => {
  it('outputs expected values', () => {
    const matches = {
      name: 'johndoe',
      'na-Me': 'john-Doe',
      'na-mE': 'john-dOE',
      'nA-me': 'jOHN-doe',
      'NA-ME': 'JOHN-DOE',
      na_me: 'john_doe',
      na$me: 'john$doe',
      'na me': 'john doe',
      'na - me': 'john - doe',
      'na - $ 0001 name abc me': 'john - $ 0001 name abc doe',
      naMe: 'johnDoe',
      NaMe: 'JohnDoe',
      Name: 'Johndoe',
      'Na me': 'John doe',
      'Na Me': 'John Doe'
    };

    const inputs = ['john doe', 'johnDoe', 'john-doe', 'john_doe'];

    const matchKeys = Object.keys(matches);

    inputs.forEach(input => {
      matchKeys.forEach(pattern => {
        expect(casex(input, pattern)).toEqual(matches[pattern]);
      });
    });

    expect.assertions(matchKeys.length * inputs.length);
  });

  it('doesnt brake with an empty string', () => {
    expect(casex('', 'name')).toEqual('');
  });

  it('works with individual capital letters', () => {
    expect(casex('JohnDOE', 'caSe')).toEqual('johnDOE');
  });

  it('does not remove numbers', () => {
    expect(casex('I_99-am.John1Doe2', 'Ca Se')).toEqual('I 99 Am. John1 Doe2');
  });

  it('does not remove symbols', () => {
    const symbols = ['?', '!', '$', '#', '`', '¿', '¡', '(', ')', '[', ']', '{', '}', '.', ',', '/', '\\'];
    symbols.forEach(symbol => {
      expect(casex(`john${symbol} doe`, 'caSe')).toEqual(`john${symbol}Doe`);
    });
  });

  it('does not remove emojis', () => {
    expect(casex('🙂john 🙂 doe 🙂', 'caSe')).toEqual(`🙂john🙂Doe🙂`);
  });

  it('can receive a simple custom regex', () => {
    expect(casex('john.doe and jane.doe', 'ca se', '.')).toEqual('john doe and jane doe');
  });

  it('can receive a complex custom regex', () => {
    expect(casex('john.doe,and-jane doe', 'ca Se', '.,-')).toEqual('john Doe And Jane doe');
  });
});
