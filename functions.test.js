const axios = require('axios');
const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');
const nameCheck = () => console.log('Checking Name....');

describe('Checking Names', () => {
    beforeEach(() => nameCheck());
  
    test('User is Jeff', () => {
      const user = 'Jeff';
      expect(user).toBe('Jeff');
    });
  
    test('User is Karen', () => {
      const user = 'Karen';
      expect(user).toBe('Karen');
    });
  });
  

// toBe
test('Add 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

// toBe
test('Add 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

// toStrictEqual or toEqual
test('User shoud be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({ 
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

// Less than and greater than
test('Shold be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})

// working with async data

// Promice
test('Promice: User fetcged name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham')
    })
})

// Async Await
test('Async Func: User fetcged name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham')

})