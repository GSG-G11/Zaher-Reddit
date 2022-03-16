BEGIN;

INSERT INTO users (name, email, password) VALUES 
  ('Zaher', 'zaher@gmail.com', '$2a$10$QmQwQQVfeH6vxIzGloNKR.mfLivCmgWVovqZf3L5T/aF52sk8NQxy'),
  ('Ahmed', 'ahmed@gmail.com', '$2a$10$7R0YVQyoq2lEE4sjkUvKD.VIipWvtoyAa4wbOR0TY/CQ5b97pLAvu'),
  ('Ola', 'ola@gmail.com', '$2a$10$m4YJ0j0pfhr8IRvtfhjn7.rJ1h0mHj/aD3aaEKlXj43SU40So69u.');

INSERT INTO posts (user_id, title, content) VALUES 
  (1, 'Post 1', 'This is the first post'),
  (1, 'Post 2', 'This is the second post'),
  (1, 'Post 3', 'This is the third post'),
  (2, 'Post 4', 'This is the fourth post'),
  (2, 'Post 5', 'This is the fifth post'),
  (2, 'Post 6', 'This is the sixth post'),
  (3, 'Post 7', 'This is the seventh post'),
  (3, 'Post 8', 'This is the eighth post'),
  (3, 'Post 9', 'This is the ninth post');

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

INSERT INTO votes (post_id, user_id, type) VALUES
  (1, 1, 'up'),
  (1, 2, 'up'),
  (1, 3, 'down'),
  (2, 1, 'up'),
  (2, 2, 'down'),
  (2, 3, 'down'),
  (3, 1, 'up'),
  (3, 2, 'up'),
  (3, 3, 'up'),
  (4, 1, 'up'),
  (4, 2, 'up'),
  (4, 3, 'up'),
  (5, 1, 'up'),
  (5, 2, 'down'),
  (5, 3, 'up'),
  (6, 1, 'up'),
  (6, 2, 'up'),
  (6, 3, 'up'),
  (7, 1, 'up'),
  (7, 2, 'up'),
  (7, 3, 'up'),
  (8, 1, 'down'),
  (8, 2, 'down'),
  (8, 3, 'down'),
  (9, 1, 'up'),
  (9, 2, 'up'),
  (9, 3, 'up');

COMMIT;