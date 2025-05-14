ALTER TABLE `location` ADD `user_id` integer NOT NULL REFERENCES user(id);--> statement-breakpoint
ALTER TABLE `locationLog` ADD `user_id` integer NOT NULL REFERENCES user(id);--> statement-breakpoint
ALTER TABLE `locationLogImage` ADD `user_id` integer NOT NULL REFERENCES user(id);