import { taskFirst, getLast, taskNext } from './0-constants.js';

describe('taskFirst', () => {
    test('returns a string', () => {
        expect(typeof taskFirst()).toBe('string');
    });
});

describe('getLast', () => {
    test('returns a string', () => {
        expect(typeof getLast()).toBe('string');
    });
});

describe('taskNext', () => {
    test('returns a string', () => {
        expect(typeof taskNext()).toBe('string');
    });
});
