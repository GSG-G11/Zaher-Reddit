const request = require('supertest');
const app = require('../server/app');

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
