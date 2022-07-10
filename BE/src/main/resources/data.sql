-- Milestone
insert into milestone(title, description, due_date, created_at, updated_at)
values ('마일스톤1', '코카콜라 마일스톤1', '2022-08-20', '2020-01-12 00:00:01', '2020-02-12 00:00:01');

insert into milestone(title, description, due_date, created_at, updated_at)
values ('마일스톤2', '머핀 마일스톤2', '2022-05-20', '2020-01-12 00:00:01', '2020-02-12 00:00:01');

insert into milestone(title, description, due_date, created_at, updated_at)
values ('마일스톤3', '루니 마일스톤3', '2022-06-20', '2020-01-12 00:00:01', '2020-02-12 00:00:01');

insert into milestone(title, description, due_date, created_at, updated_at)
values ('마일스톤4', '나단 마일스톤4', '2022-08-25', '2020-01-12 00:00:01', '2020-02-12 00:00:01');

insert into milestone(title, description, due_date, created_at, updated_at)
values ('마일스톤5', 'team-30 마일스톤5', '2022-09-22', '2020-01-12 00:00:01', '2020-02-12 00:00:01');

insert into milestone(title, description, due_date, created_at, updated_at)
values ('마일스톤6', 'codesquad 마일스톤6', null, '2020-01-12 00:00:01', '2020-02-12 00:00:01');

--  Label
insert into label(title, description, background_color, text_color)
values ('라벨1', '코카콜라 라벨1', '#1d76db', 'BLACK');

insert into label(title, description, background_color, text_color)
values ('라벨2', '머핀 라벨2', '#90C21C', 'WHITE');

insert into label(title, description, background_color, text_color)
values ('라벨3', '나단 라벨3', '#DCCBE0', 'BLACK');

insert into label(title, description, background_color, text_color)
values ('라벨4', '루니 라벨4', '#42E80B', 'BLACK');

insert into label(title, description, background_color, text_color)
values ('라벨5', '팀30 라벨5', '#244A4D', 'WHITE');

-- User
insert into user(auth_id, profile_image_url, node_id, username)
values('nathan29849', 'https://avatars.githubusercontent.com/u/67811880?v=4', 'MDQ6VXNlcjY3ODExODgw', null);

insert into user(auth_id, profile_image_url, node_id, username)
values('Muffin9', 'https://avatars.githubusercontent.com/u/45479309?v=4', 'MDQ6VXNlcjQ1NDc5MzA5', 'Muffin');

insert into user(auth_id, profile_image_url, node_id, username)
values('mjsdo', 'https://avatars.githubusercontent.com/u/79135734?v=4', 'MDQ6VXNlcjc5MTM1NzM0', 'Cola');

-- Issue
insert into issue(title, created_at, updated_at, status,  author_id, milestone_id)
values('이슈1', '2020-01-12 00:00:01', '2020-01-12 00:00:01', 'OPEN', 1, null);

insert into issue(title, created_at, updated_at, status,  author_id, milestone_id)
values('이슈2', '2020-01-12 00:00:01', '2020-01-12 00:00:01', 'CLOSED', 2, 1);

insert into issue(title, created_at, updated_at, status,  author_id, milestone_id)
values('이슈3', '2021-01-12 00:00:01', '2021-01-12 00:00:01', 'OPEN', 2, 1);

insert into issue(title, created_at, updated_at, status,  author_id, milestone_id)
values('이슈4', '2020-01-12 00:00:01', '2020-01-12 00:00:01', 'OPEN', 3, 1);

-- Comment
insert into comment(content, created_at, updated_at, author_id, issue_id)
values('머핀에는 역시 콜라지!',  '2020-01-12 00:00:01', '2020-01-12 00:00:01', 1, 1);

insert into comment(content, created_at, updated_at, author_id, issue_id)
values('나단, 머핀, 콜라가 함께하는 팀 프로젝트', '2020-01-12 00:00:01', '2020-01-12 00:00:01', 2, 2);

insert into comment(content, created_at, updated_at, author_id, issue_id)
values('근본은 프론트엔드다;;',  '2021-01-12 00:00:01', '2021-01-12 00:00:01', 2, 3);

insert into comment(content, created_at, updated_at, author_id, issue_id)
values('무슨 소리야 근본은 백엔드지;;',  '2020-01-12 00:00:01', '2020-01-12 00:00:01', 3, 4);

-- IssueAssignee
insert into issue_assignee(issue_id, assignee_id)
values(1, 2);

insert into issue_assignee(issue_id, assignee_id)
values(1, 3);

insert into issue_assignee(issue_id, assignee_id)
values(2, 1);

-- IssueLabel
insert into issue_label(issue_id, label_id)
values(1, 1);

insert into issue_label(issue_id, label_id)
values(1, 2);

insert into issue_label(issue_id, label_id)
values(1, 3);

insert into issue_label(issue_id, label_id)
values(2, 1);

insert into issue_label(issue_id, label_id)
values(3, 1);

insert into issue_label(issue_id, label_id)
values(4, 1);
