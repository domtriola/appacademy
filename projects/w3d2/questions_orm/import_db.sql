DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

DROP TABLE IF EXISTS questions;
CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT,
  user_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS question_follows;
CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER
);

DROP TABLE IF EXISTS replies;
CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  parent_id INTEGER,
  user_id INTEGER NOT NULL,
  body TEXT,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (parent_id) REFERENCES replies(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS question_likes;
CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER
);

INSERT INTO
  users (fname, lname)
VALUES
  ('Dominick', 'Triola'),
  ('Tom', 'Ogasawara');

INSERT INTO
  questions (title, body, user_id)
VALUES
  ('Does this work?', NULL, (SELECT id FROM users WHERE fname = 'Dominick')),
  ('Why is the sky blue?', 'What''s the science behind it', (SELECT id FROM users WHERE fname = 'Tom')),
  ('Question 3?', 'Question 3 body', (SELECT id FROM users WHERE fname = 'Tom')),
  ('Question 4?', 'Question 4 body', (SELECT id FROM users WHERE fname = 'Dominick'));

INSERT INTO
  replies (question_id, parent_id, user_id, body)
VALUES
  ((SELECT id FROM questions WHERE title = 'Does this work?'),
   NULL, (SELECT id FROM users WHERE fname = 'Tom'), 'Hopefully??'),
  ((SELECT id FROM questions WHERE title = 'Question 3?'),
   NULL, (SELECT id FROM users WHERE fname = 'Tom'), 'Question 3 answer 1');

INSERT INTO
  replies (question_id, parent_id, user_id, body)
VALUES
  ((SELECT id FROM questions WHERE title = 'Question 3?'),
   (SELECT id FROM replies WHERE body = 'Question 3 answer 1'),
   (SELECT id FROM users WHERE fname = 'Dominick'), 'Question 3 answer 2');

INSERT INTO
  question_follows (user_id, question_id)
VALUES
  ((SELECT id FROM users WHERE fname = 'Dominick'),
   (SELECT id FROM questions WHERE title = 'Does this work?')),
  ((SELECT id FROM users WHERE fname = 'Tom'),
   (SELECT id FROM questions WHERE title = 'Does this work?')),
  ((SELECT id FROM users WHERE fname = 'Dominick'),
   (SELECT id FROM questions WHERE title = 'Question 3?'));

INSERT INTO
  question_likes (user_id, question_id)
VALUES
  ((SELECT id FROM users WHERE fname = 'Tom'),
   (SELECT id FROM questions WHERE title = 'Does this work?')),
  ((SELECT id FROM users WHERE fname = 'Dominick'),
   (SELECT id FROM questions WHERE title = 'Does this work?')),
  ((SELECT id FROM users WHERE fname = 'Dominick'),
   (SELECT id FROM questions WHERE title = 'Question 3?'));
