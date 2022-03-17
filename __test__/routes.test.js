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
  validPost,
  emptyTitle,
  tooShortTitle,
  tooLongContent,
} = require('../server/utils');

beforeAll(buildDB);
afterEach(buildDB);
afterAll(() => dbConnection.end());

describe('GET /not-found', () => {
  it('should return 404 Not Found, and Content-Type /json/', (done) => {
    request(app)
      .get('/not-found')
      .expect(404)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.ok).toBe(false);
        return done();
      });
  });
});

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

describe('DELETE /logout', () => {
  it('should return 205 Reset Content and Content-Type /json/', (done) => {
    request(app)
      .delete('/api/v1/logout')
      .set({ Cookie: 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ3MjU0Mzc2fQ.RGoRKpo82KCtuKjSBUAR8pP-G0x04ymrd2bl7S29h8s' })
      .expect(205)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Logged out successfully');
        return done();
      });
  });

  it('should return 401 Unauthorized and Content-Type /json/ when no cookies passed', (done) => {
    request(app)
      .delete('/api/v1/logout')
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Unauthorized');
        return done();
      });
  });

  it('should return 401 Unauthorized and Content-Type /json/ when passed invalid access token', (done) => {
    request(app)
      .delete('/api/v1/logout')
      .set({ Cookie: 'access_token=yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ3MjU0Mzc2fQ.RGoRKpo82KCtuKjSBUAR8pP-G0x04ymrd2bl7S29h8s' })
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('invalid token');
        return done();
      });
  });
});

describe('GET /user', () => {
  it('should return 200 OK and Content-Type /json/', (done) => {
    request(app)
      .get('/api/v1/user')
      .set({ Cookie: 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ3MjU0Mzc2fQ.RGoRKpo82KCtuKjSBUAR8pP-G0x04ymrd2bl7S29h8s' })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('User found');
        return done();
      });
  });
});

describe('GET /posts', () => {
  it('should return 200 OK and Content-Type /json/', (done) => {
    request(app)
      .get('/api/v1/posts')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Successfully retrieved all posts');
        return done();
      });
  });
});

describe('GET /users/:id', () => {
  it('should return 200 OK and Content-Type /html/', (done) => {
    request(app)
      .get('/users/1')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.ok).toBe(true);
        return done();
      });
  });
});

describe('GET /user-posts/:id', () => {
  it('should return 200 OK and Content-Type /json/', (done) => {
    request(app)
      .get('/api/v1/user-posts/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Success');
        return done();
      });
  });
});

describe('GET /user/:id', () => {
  it('should return 200 OK and Content-Type /json/', (done) => {
    expect.assertions(2);
    request(app)
      .get('/api/v1/user/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('User found');
        expect(res.body.name).toBe('Zaher');
        return done();
      });
  });
});

describe('POST /post', () => {
  it('should return 201 Created and Content-Type /json/', (done) => {
    expect.assertions(3);
    request(app)
      .post('/api/v1/post')
      .set({ Cookie: 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ3MjU0Mzc2fQ.RGoRKpo82KCtuKjSBUAR8pP-G0x04ymrd2bl7S29h8s' })
      .send(validPost)
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(201);
        expect(res.body.message).toBe('Post Added');
        expect(res.body.post).toEqual({
          id: 10,
          user_id: 1,
          title: 'Great Work',
          content: 'I love your website',
        });
        return done(err);
      });
  });

  it('should return 400 Bad Request and Content-Type /json/', (done) => {
    expect.assertions(2);
    request(app)
      .post('/api/v1/post')
      .set({ Cookie: 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ3MjU0Mzc2fQ.RGoRKpo82KCtuKjSBUAR8pP-G0x04ymrd2bl7S29h8s' })
      .send(emptyTitle)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(400);
        expect(res.body.message).toBe('"title" is not allowed to be empty');
        return done(err);
      });
  });

  it('should return 400 Bad Request and Content-Type /json/', (done) => {
    expect.assertions(2);
    request(app)
      .post('/api/v1/post')
      .set({ Cookie: 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ3MjU0Mzc2fQ.RGoRKpo82KCtuKjSBUAR8pP-G0x04ymrd2bl7S29h8s' })
      .send(tooShortTitle)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(400);
        expect(res.body.message).toBe('Title should contains at least 3 character');
        return done(err);
      });
  });

  it('should return 400 Bad Request and Content-Type /json/', (done) => {
    expect.assertions(2);
    request(app)
      .post('/api/v1/post')
      .set({ Cookie: 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ3MjU0Mzc2fQ.RGoRKpo82KCtuKjSBUAR8pP-G0x04ymrd2bl7S29h8s' })
      .send(tooLongContent)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(400);
        expect(res.body.message).toBe('Content can contain maximum 250 characters');
        return done(err);
      });
  });

  it('should return 401 Unauthorized and Content-Type /json/', (done) => {
    expect.assertions(2);
    request(app)
      .post('/api/v1/post')
      .send(validPost)
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(401);
        expect(res.body.message).toBe('Unauthorized');
        return done(err);
      });
  });
});

describe('GET /votes/:id', () => {
  it('should return 200 OK and Content-Type /json/', (done) => {
    expect.assertions(3);
    request(app)
      .get('/api/v1/votes/8')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(200);
        expect(res.body.message).toBe('success');
        expect(res.body.info.votes).toBe('-3');
        return done();
      });
  });
});

describe('GET /comments/:postId', () => {
  it('should return 200 OK and Content-Type /json/', (done) => {
    expect.assertions(3);
    request(app)
      .get('/api/v1/comments/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(200);
        expect(res.body.message).toBe('success');
        expect(res.body.comments).toEqual([
          {
            id: 1,
            user_id: 1,
            post_id: 1,
            content: 'This is the first comment',
          },
        ]);
        return done();
      });
  });
});

describe('POST /comment', () => {
  it('should return 201 Created and Content-Type /json/', (done) => {
    expect.assertions(3);
    request(app)
      .post('/api/v1/comment')
      .set({ Cookie: 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ3MjU0Mzc2fQ.RGoRKpo82KCtuKjSBUAR8pP-G0x04ymrd2bl7S29h8s' })
      .send({ content: 'content test', postId: 1 })
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(201);
        expect(res.body.message).toBe('Comment added successfully');
        expect(res.body.comment).toEqual({
          id: 10,
          user_id: 1,
          post_id: 1,
          content: 'content test',
        });
        return done();
      });
  });

  it('should return 401 Unauthorized and Content-Type /json/', (done) => {
    expect.assertions(2);
    request(app)
      .post('/api/v1/comment')
      .set({ Cookie: 'access_token=yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ3MjU0Mzc2fQ.RGoRKpo82KCtuKjSBUAR8pP-G0x04ymrd2bl7S29h8s' })
      .send({ content: 'content test', postId: 1 })
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(401);
        expect(res.body.message).toBe('invalid token');
        return done();
      });
  });

  it('should return 401 Unauthorized and Content-Type /json/', (done) => {
    expect.assertions(2);
    request(app)
      .post('/api/v1/comment')
      .send({ content: 'content test', postId: 1 })
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(401);
        expect(res.body.message).toBe('Unauthorized');
        return done();
      });
  });
});

describe('DELETE /post/:postId', () => {
  it('should return 200 OK and Content-Type /json/', (done) => {
    expect.assertions(3);
    request(app)
      .delete('/api/v1/post/1')
      .set({ Cookie: 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ3MjU0Mzc2fQ.RGoRKpo82KCtuKjSBUAR8pP-G0x04ymrd2bl7S29h8s' })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(200);
        expect(res.body.message).toBe('Post Deleted Successfully');
        expect(res.body.post).toEqual({
          id: 1,
          user_id: 1,
          content: 'This is the first post',
          title: 'Post 1',
        });
        return done();
      });
  });

  it('should return 401 Unauthorized and Content-Type /json/', (done) => {
    expect.assertions(2);
    request(app)
      .delete('/api/v1/post/1')
      .send({ postId: 1 })
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(401);
        expect(res.body.message).toBe('Unauthorized');
        return done();
      });
  });

  it('should return 401 Unauthorized and Content-Type /json/', (done) => {
    expect.assertions(2);
    request(app)
      .delete('/api/v1/post/1')
      .set({ Cookie: 'access_token=yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ3MjU0Mzc2fQ.RGoRKpo82KCtuKjSBUAR8pP-G0x04ymrd2bl7S29h8s' })
      .send({ postId: 1 })
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(401);
        expect(res.body.message).toBe('invalid token');
        return done();
      });
  });
});

describe('DELETE /comment/:commentId', () => {
  it('should return 200 OK and Content-Type /json/', (done) => {
    expect.assertions(3);
    request(app)
      .delete('/api/v1/comment/1')
      .set({ Cookie: 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ3MjU0Mzc2fQ.RGoRKpo82KCtuKjSBUAR8pP-G0x04ymrd2bl7S29h8s' })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(200);
        expect(res.body.message).toBe('Comment Successfully Deleted');
        expect(res.body.comment).toEqual({
          id: 1,
          user_id: 1,
          post_id: 1,
          content: 'This is the first comment',
        });
        return done();
      });
  });

  it('should return 401 Unauthorized and Content-Type /json/', (done) => {
    expect.assertions(2);
    request(app)
      .delete('/api/v1/comment/1')
      .send({ postId: 1 })
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(401);
        expect(res.body.message).toBe('Unauthorized');
        return done();
      });
  });

  it('should return 401 Unauthorized and Content-Type /json/', (done) => {
    expect.assertions(2);
    request(app)
      .delete('/api/v1/comment/1')
      .set({ Cookie: 'access_token=yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ3MjU0Mzc2fQ.RGoRKpo82KCtuKjSBUAR8pP-G0x04ymrd2bl7S29h8s' })
      .send({ postId: 1 })
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(401);
        expect(res.body.message).toBe('invalid token');
        return done();
      });
  });
});
