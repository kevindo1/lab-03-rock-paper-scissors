// IMPORT MODULES under test here:
import { getComputerSelected, doesUserWin } from '../rps.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('testing doesUserWin', (expect) => {
    const userSelected = 'rock';
    const getComputerSelected = 'scissors';
    
    const actual = doesUserWin(userSelected, getComputerSelected);
    const expected = true;

    expect.equal(actual, expected, 'should be a win');
});

