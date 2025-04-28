const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

// user not added
test('user not added to userController', () => {
  let user = new User(4578,"Catalina", "catalina@generation.org");
  expect(userController.getUsers()).not.toContain(user);
});

// remove user not added
test('remove user not added in userController', () => {
  let user = new User(6784,"Frank", "frank@generation.org");
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});
  
// find by email

test('findByEmail in userController', () => {
  let user = new User(1234,"Santiago", "santiago@generation.org")
  userController.add(user);
  expect(userController.findByEmail("santiago@generation.org")).toEqual(user);
});

test('findByEmail in userController when is undefined', () => {
  let user = new User(1234,"Santiago", "santiago@generation.org")
  userController.add(user);
  expect(userController.findByEmail("sara@generation.org")).toBeUndefined();
});

// find by id

test('findById in userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org")
  userController.add(user);
  expect(userController.findById(1234)).toEqual(user);
});

test('findById in userController when is undefined', () => {
  let user = new User(1234,"Santiago", "santiago@generation.org")
  userController.add(user);
  expect(userController.findById(5678)).toBeUndefined();
});