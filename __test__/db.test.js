const buildDB = require('../server/database/config/build/build');
const dbConnection = require('../server/database/config/connections');

const {
  createNewUser,
  checkUsernameExistsQuery,
  checkEmailExistsQuery,
} = require('../server/database/queries');

beforeAll(buildDB);
afterEach(buildDB);
afterAll(() => dbConnection.end());

describe('Test suits for signup queries', () => {
  it('should create a new user', async () => {
    const data = await createNewUser({
      username: 'Zain',
      email: 'zain@gmail.com',
      password: '123456',
    });
    expect(data.rows[0].id).toBe(4);
  });

  it('should return 0 if the username is available', async () => {
    const data = await checkUsernameExistsQuery('Zain');
    expect(data.rows[0].bit).toBe('0');
  });

  it('should return 1 if the username is NOT available', async () => {
    const data = await checkUsernameExistsQuery('Zaher');
    expect(data.rows[0].bit).toBe('1');
  });

  it('should return 0 if the email is available', async () => {
    const data = await checkEmailExistsQuery('zain@gmail.com');
    expect(data.rows[0].bit).toBe('0');
  });

  it('should return 1 if the email is NOT available', async () => {
    const data = await checkEmailExistsQuery('zaher@gmail.com');
    expect(data.rows[0].bit).toBe('1');
  });
});
