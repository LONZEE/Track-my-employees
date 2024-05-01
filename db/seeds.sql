INSERT INTO department (department_name)
VALUES 
('Ceo'),
('Human Resources'),
('Sales'),
('Finance'),
('Executive Board'),
('Marketing'),
('Engineering'),
('Information Technology'),
('Customer Service/Support'),
('Research and Development'),
('Legal'),
('Maintenance'),
('Administration');

INSERT INTO roles (title, salary, department_id)
VALUES 
('Chief Executive Officer', 555000.00, 1),
('HR Director', 189000.00, 2),
('Sales Executive', 135000.00, 3),
('Finance', 145000.00, 4),
('Executive Director', 135000.00, 5),
('Executive Chairman', 125000.00, 6),
('Engineer', 185000.00, 7),
('IT Manager', 125000.00, 8),
('Customer Relations Manager', 75000.00, 9),
('Research and Development Manager ', 185000.00, 10),
('Legal Manager', 95000.00, 11),
('Maintenance Manager', 135000.00, 12),
('Administration Manager', 135000.00, 13);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Beyonce', 'Knowles', 1, 1),
('Leonardo', 'DiCaprio', 2, 2),
('Taylor', 'Swift', 3, 3),
('Dwayne', 'Johnson', 4, 4),
('Jennifer', 'Lawrence', 5, 5),
('Tom', 'Hanks', 6, 6),
('Edgar', 'Lopez', 7, 7),
('Tom', 'Ford', 8, 8),
('Will', 'Smith', 9, 9),
('Tom', 'Cruise', 10, 10),
('Brad', 'Pitt', 11, 11),
('Emma', 'Watson', 12, 12),
('Kurasaki', 'Ichigo', 13, 13);