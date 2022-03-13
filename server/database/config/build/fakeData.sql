BEGIN;

INSERT INTO users (name, email, password) VALUES 
  ('Zaher', 'zaher@gmail.com', '$2a$10$QmQwQQVfeH6vxIzGloNKR.mfLivCmgWVovqZf3L5T/aF52sk8NQxy'),
  ('Ahmed', 'ahmed@gmail.com', '$2a$10$7R0YVQyoq2lEE4sjkUvKD.VIipWvtoyAa4wbOR0TY/CQ5b97pLAvu'),
  ('Ola', 'ola@gmail.com', '$2a$10$m4YJ0j0pfhr8IRvtfhjn7.rJ1h0mHj/aD3aaEKlXj43SU40So69u.');

INSERT INTO posts (user_id, title, content, votes) VALUES 
  (1, 'Post 1', 'This is the first post', 0),
  (1, 'Post 2', 'This is the second post', 0),
  (1, 'Post 3', 'This is the third post', 0),
  (2, 'Post 4', 'This is the fourth post', 0),
  (2, 'Post 5', 'This is the fifth post', 0),
  (2, 'Post 6', 'This is the sixth post', 0),
  (3, 'Post 7', 'This is the seventh post', 0),
  (3, 'Post 8', 'This is the eighth post', 0),
  (3, 'Post 9', 'This is the ninth post', 0);

INSERT INTO comments (user_id, post_id, content) VALUES 
  (1, 1, 'This is the first comment'),
  (1, 2, 'This is the second comment'),
  (1, 3, 'This is the third comment'),
  (2, 4, 'This is the fourth comment'),
  (2, 5, 'This is the fifth comment'),
  (2, 6, 'This is the sixth comment'),
  (3, 7, 'This is the seventh comment'),
  (3, 8, 'This is the eighth comment'),
  (3, 9, 'This is the ninth comment');

COMMIT;