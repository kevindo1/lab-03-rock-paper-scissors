// IMPORT MODULES under test here:
import { doesUserWin } from '../rps.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('testing doesUserWin', (expect) => {
    const actual = doesUserWin('rock', 'scissors');
    const expected = true;

    expect.equal(actual, expected, 'should be a win');
});

test('testing doesUserWin', (expect) => {
    const actual = doesUserWin('rock', 'paper');
    const expected = false;

    expect.equal(actual, expected, 'should be a loss');
});

test('testing doesUserWin', (expect) => {
    const actual = doesUserWin('paper', 'scissors');
    const expected = false;

    expect.equal(actual, expected, 'should be a loss');
});

test('testing doesUserWin', (expect) => {
    const actual = doesUserWin('paper', 'rock');
    const expected = true;

    expect.equal(actual, expected, 'should be a win');
});

test('testing doesUserWin', (expect) => {
    const actual = doesUserWin('scissors', 'rock');
    const expected = false;

    expect.equal(actual, expected, 'should be a loss');
});

test('testing doesUserWin', (expect) => {
    const actual = doesUserWin('scissors', 'paper');
    const expected = true;

    expect.equal(actual, expected, 'should be a win');
});

test('testing doesUserWin', (expect) => {
    const actual = doesUserWin('paper', 'paper');
    const expected = 'draw';

    expect.equal(actual, expected, 'should be a win');
});

test('testing doesUserWin', (expect) => {
    const actual = doesUserWin('rock', 'rock');
    const expected = 'draw';

    expect.equal(actual, expected, 'should be a win');
});

test('testing doesUserWin', (expect) => {
    const actual = doesUserWin('scissors', 'scissors');
    const expected = 'draw';

    expect.equal(actual, expected, 'should be a win');
});


