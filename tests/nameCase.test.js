const casex = require('../build');

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
});
