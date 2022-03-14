const buildDB = require('../server/database/config/build/build');
const dbConnection = require('../server/database/config/connections');

const {
  createNewUser,
  checkUsernameExistsQuery,
  checkEmailExistsQuery,
  checkUsernameQuery,
  getUsernameQuery,
} = require('../server/database/queries');

beforeAll(buildDB);
afterEach(buildDB);
afterAll(() => dbConnection.end());

describe('Test suits for signup queries', () => {
  it('should create a new user', async () => {
    const { rows } = await createNewUser({
      username: 'Zain',
      email: 'zain@gmail.com',
      password: '123456',
    });
    expect(rows[0].id).toBe(4);
  });

  it('should return 0 if the username is available', async () => {
    const { rows } = await checkUsernameExistsQuery('Zain');
    expect(rows[0].bit).toBe('0');
  });

  it('should return 1 if the username is NOT available', async () => {
    const { rows } = await checkUsernameExistsQuery('Zaher');
    expect(rows[0].bit).toBe('1');
  });

  it('should return 0 if the email is available', async () => {
    const { rows } = await checkEmailExistsQuery('zain@gmail.com');
    expect(rows[0].bit).toBe('0');
  });

  it('should return 1 if the email is NOT available', async () => {
    const { rows } = await checkEmailExistsQuery('zaher@gmail.com');
    expect(rows[0].bit).toBe('1');
  });
});

describe('Test suites for login queries', () => {
  it('should return username data for existed usernames', async () => {
    const { rows } = await checkUsernameQuery('Zaher');
    expect(rows[0]).toEqual({
      id: 1,
      name: 'Zaher',
      email: 'zaher@gmail.com',
      password: '$2a$10$QmQwQQVfeH6vxIzGloNKR.mfLivCmgWVovqZf3L5T/aF52sk8NQxy',
    });
  });

  it('should return an empty array not existed usernames', async () => {
    const { rows } = await checkUsernameQuery('ibrahim');
    expect(rows.length).toBe(0);
  });
});

describe('Test suites for user queries', () => {
  it('should return username data for existed usernames', async () => {
    const userId = 1;
    const { rows } = await getUsernameQuery(userId);
    expect(rows[0].name).toBe('Zaher');
  });
});
