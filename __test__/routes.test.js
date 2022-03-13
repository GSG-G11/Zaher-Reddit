const request = require('supertest');
const app = require('../server/app');
const buildDB = require('../server/database/config/build/build');
const dbConnection = require('../server/database/config/connections');
const {
  successSignup,
  invalidUsername,
  invalidPassword,
  takenUsername,
  takenEmail,
  successLogin,
  unverifiedUsername,
  notExistUsername,
  unverifiedPassword,
  incorrectPassword,
} = require('../server/utils');

beforeAll(buildDB);
afterEach(buildDB);
afterAll(() => dbConnection.end());

describe('GET /', () => {
  it('should return 200 OK and Content-Type /html/', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.ok).toBe(true);
        return done();
      });
  });
});

describe('GET /login', () => {
  it('should return 200 OK and Content-Type /html/', (done) => {
    request(app)
      .get('/login')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.ok).toBe(true);
        return done();
      });
  });
});

describe('GET /signup', () => {
  it('should return 200 OK and Content-Type /html/', (done) => {
    request(app)
      .get('/signup')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.ok).toBe(true);
        return done();
      });
  });
});

describe('POST /signup', () => {
  it('should return 201 Created and Content-Type /json/', (done) => {
    request(app)
      .post('/api/v1/signup')
      .send(successSignup)
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('User added successfully');
        return done();
      });
  });

  it('should return 400 Bad Request and Content-Type /json/', (done) => {
    request(app)
      .post('/api/v1/signup')
      .send(invalidUsername)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Username must contain only letters or numbers');
        return done();
      });
  });

  it('should return 409 Conflict and Content-Type /json/', (done) => {
    request(app)
      .post('/api/v1/signup')
      .send(takenUsername)
      .expect(409)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('The username you entered is taken');
        return done();
      });
  });

  it('should return 409 Conflict and Content-Type /json/', (done) => {
    request(app)
      .post('/api/v1/signup')
      .send(takenEmail)
      .expect(409)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('The email you entered is taken');
        return done();
      });
  });

  it('should return 400 Bad Request and Content-Type /json/', (done) => {
    request(app)
      .post('/api/v1/signup')
      .send(invalidPassword)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Password length must be between 6 and 33 characters');
        return done();
      });
  });
});

describe('POST /login', () => {
  it('should return 201 Created and Content-Type /json/', (done) => {
    request(app)
      .post('/api/v1/login')
      .send(successLogin)
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Token added successfully');
        return done();
      });
  });

  it('should return 400 Bad Request and Content-Type /json/', (done) => {
    request(app)
      .post('/api/v1/login')
      .send(unverifiedUsername)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Username must contain only letters or numbers');
        return done();
      });
  });

  it('should return 400 Bad Request and Content-Type /json/', (done) => {
    request(app)
      .post('/api/v1/login')
      .send(unverifiedPassword)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Password length must be between 6 and 33 characters');
        return done();
      });
  });

  it('should return 400 Bad Request and Content-Type /json/', (done) => {
    request(app)
      .post('/api/v1/login')
      .send(notExistUsername)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('User named alex does not exist');
        return done();
      });
  });

  it('should return 400 Bad Request and Content-Type /json/', (done) => {
    request(app)
      .post('/api/v1/login')
      .send(incorrectPassword)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Invalid Password');
        return done();
      });
  });
});
