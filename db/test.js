-- -- -
--Globals
-- -- -

--SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
--SET FOREIGN_KEY_CHECKS = 0;

-- -- -
--Table 'users'
  --
  -- -- -

  DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id`
  INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `email`
  VARCHAR NULL DEFAULT NULL,
  `password`
  VARCHAR NULL DEFAULT NULL,
  `username`
  VARCHAR NULL DEFAULT NULL,
  `total_reward`
  INTEGER NULL DEFAULT NULL,
  PRIMARY KEY(`id`)
);

-- -- -
--Table 'questions'
  --
  -- -- -

  DROP TABLE IF EXISTS `questions`;

CREATE TABLE `questions` (
  `id`
  INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `title`
  VARCHAR NULL DEFAULT NULL,
  `body`
  VARCHAR NULL DEFAULT NULL,
  `created`
  DATE NULL DEFAULT NULL,
  `reward`
  INTEGER NULL DEFAULT NULL,
  `good`
  INTEGER NULL DEFAULT NULL,
  `view`
  INTEGER NULL DEFAULT NULL,
  `id_users`
  INTEGER NULL DEFAULT NULL,
  PRIMARY KEY(`id`)
);

-- -- -
--Table 'answers'
  --
  -- -- -

  DROP TABLE IF EXISTS `answers`;

CREATE TABLE `answers` (
  `id`
  INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `body`
  VARCHAR NULL DEFAULT NULL,
  `created`
  DATE NULL DEFAULT NULL,
  `id_users`
  INTEGER NULL DEFAULT NULL,
  `id_child_answers`
  INTEGER NULL DEFAULT NULL,
  `id_questions`
  INTEGER NULL DEFAULT NULL,
  PRIMARY KEY(`id`)
);

-- -- -
--Table 'child_answers'
  --
  -- -- -

  DROP TABLE IF EXISTS `child_answers`;

CREATE TABLE `child_answers` (
  `id`
  INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `body`
  VARCHAR NULL DEFAULT NULL,
  `created`
  DATE NULL DEFAULT NULL,
  `id_users`
  INTEGER NULL DEFAULT NULL,
  PRIMARY KEY(`id`)
);

-- -- -
--Table 'posts'
  --
  -- -- -

  DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id`
  INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `title`
  VARCHAR NULL DEFAULT NULL,
  `body`
  VARCHAR NULL DEFAULT NULL,
  `created`
  DATE NULL DEFAULT NULL,
  `view`
  INTEGER NULL DEFAULT NULL,
  `id_users`
  INTEGER NULL DEFAULT NULL,
  PRIMARY KEY(`id`)
);

-- -- -
--Table 'replies'
  --
  -- -- -

  DROP TABLE IF EXISTS `replies`;

CREATE TABLE `replies` (
  `id`
  INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `body`
  VARCHAR NULL DEFAULT NULL,
  `created`
  DATE NULL DEFAULT NULL,
  `id_posts`
  INTEGER NULL DEFAULT NULL,
  `id_users`
  INTEGER NULL DEFAULT NULL,
  `id_child_replies`
  INTEGER NULL DEFAULT NULL,
  PRIMARY KEY(`id`)
);

-- -- -
--Table 'child_replies'
  --
  -- -- -

  DROP TABLE IF EXISTS `child_replies`;

CREATE TABLE `child_replies` (
  `id`
  INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `body`
  VARCHAR NULL DEFAULT NULL,
  `created`
  DATE NULL DEFAULT NULL,
  `id_users`
  INTEGER NULL DEFAULT NULL,
  PRIMARY KEY(`id`)
);

-- -- -
--Table 'q_user'
  --
  -- -- -

  DROP TABLE IF EXISTS `q_user`;

CREATE TABLE `q_user` (
  `id`
  INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_users`
  INTEGER NULL DEFAULT NULL,
  `id_questions`
  INTEGER NULL DEFAULT NULL,
  `good`
  INTEGER NULL DEFAULT NULL,
  PRIMARY KEY(`id`)
);

-- -- -
--Foreign Keys
-- -- -

ALTER TABLE `questions`
ADD FOREIGN KEY(id_users) REFERENCES `users` (`id`);
ALTER TABLE `answers`
ADD FOREIGN KEY(id_users) REFERENCES `users` (`id`);
ALTER TABLE `answers`
ADD FOREIGN KEY(id_child_answers) REFERENCES `child_answers` (`id`);
ALTER TABLE `answers`
ADD FOREIGN KEY(id_questions) REFERENCES `questions` (`id`);
ALTER TABLE `child_answers`
ADD FOREIGN KEY(id_users) REFERENCES `users` (`id`);
ALTER TABLE `posts`
ADD FOREIGN KEY(id_users) REFERENCES `users` (`id`);
ALTER TABLE `replies`
ADD FOREIGN KEY(id_posts) REFERENCES `posts` (`id`);
ALTER TABLE `replies`
ADD FOREIGN KEY(id_users) REFERENCES `users` (`id`);
ALTER TABLE `replies`
ADD FOREIGN KEY(id_child_replies) REFERENCES `child_replies` (`id`);
ALTER TABLE `child_replies`
ADD FOREIGN KEY(id_users) REFERENCES `users` (`id`);
ALTER TABLE `q_user`
ADD FOREIGN KEY(id_users) REFERENCES `users` (`id`);
ALTER TABLE `q_user`
ADD FOREIGN KEY(id_questions) REFERENCES `questions` (`id`);

-- -- -
--Table Properties
-- -- -

--ALTER TABLE `users`
ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_bin;
--ALTER TABLE `questions`
ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_bin;
--ALTER TABLE `answers`
ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_bin;
--ALTER TABLE `child_answers`
ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_bin;
--ALTER TABLE `posts`
ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_bin;
--ALTER TABLE `replies`
ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_bin;
--ALTER TABLE `child_replies`
ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_bin;
--ALTER TABLE `q_user`
ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_bin;

-- -- -
--Test Data
-- -- -

--INSERT INTO `users` (`id`, `email`, `password`, `username`, `total_reward`) VALUES
  --('', '', '', '', '');
--INSERT INTO `questions` (`id`, `title`, `body`, `created`, `reward`, `good`, `view`, `id_users`) VALUES
  --('', '', '', '', '', '', '', '');
--INSERT INTO `answers` (`id`, `body`, `created`, `id_users`, `id_child_answers`, `id_questions`) VALUES
  --('', '', '', '', '', '');
--INSERT INTO `child_answers` (`id`, `body`, `created`, `id_users`) VALUES
  --('', '', '', '');
--INSERT INTO `posts` (`id`, `title`, `body`, `created`, `view`, `id_users`) VALUES
  --('', '', '', '', '', '');
--INSERT INTO `replies` (`id`, `body`, `created`, `id_posts`, `id_users`, `id_child_replies`) VALUES
  --('', '', '', '', '', '');
--INSERT INTO `child_replies` (`id`, `body`, `created`, `id_users`) VALUES
  --('', '', '', '');
--INSERT INTO `q_user` (`id`, `id_users`, `id_questions`, `good`) VALUES
  --('', '', '', '');