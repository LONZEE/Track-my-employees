const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "123456789",
    database: "employeeTracker_db",
    port: 3306,
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
    start();
});

function start() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: ["View all employees", "View all departments", "View all roles", "Add employee", "Add department", "Add role", "Update employee role", "Exit"],
        })
        .then((answer) => {
            switch (answer.action) {
                case "View all employees":
                    viewEmployees();
                    break;
                case "View all departments":
                    viewDepartments();
                    break;
                case "View all roles":
                    viewRoles();
                    break;
                case "Add employee":
                    addEmployee();
                    break;
                case "Add department":
                    addDepartment();
                    break;
                case "Add role":
                    addRole();
                    break;
                case "Update employee role":
                    updateEmployeeRole();
                    break;
                case "Delete employee, department, or role":
                    deleteEmployeeDepartmentRole();
                    break;
                case "Exit":
                    connection.end();
                    console.log("Goodbye!");
                    break;
            }
        });
}

function viewEmployees() {
    connection.query("SELECT * FROM employee", (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function viewDepartments() {
    connection.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function viewRoles() {
    connection.query("SELECT * FROM roles", (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function addEmployee() {
    inquirer
        .prompt([{
                name: "first_name",
                type: "input",
                message: "Enter employee's first name:",
            },
            {
                name: "last_name",
                type: "input",
                message: "Enter employee's last name:",
            },
            {
                name: "role_id",
                type: "input",
                message: "Enter employee's role id:",
            },
            {
                name: "manager_id",
                type: "input",
                message: "Enter employee's manager id:",
            },
        ])
        .then((answer) => {
            connection.query(
                "INSERT INTO employee SET ?", {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: answer.role_id,
                    manager_id: answer.manager_id,
                },
                (err) => {
                    if (err) throw err;
                    console.log("Employee added successfully!");
                    start();
                }
            );
        });
}

function addDepartment() {
    inquirer
        .prompt([{
            name: "name",
            type: "input",
            message: "Enter department name:",
        }, ])
        .then((answer) => {
            console.log(answer);
            connection.query(
                "INSERT INTO department SET department_name = ?", 
                [answer.name],
                (err) => {
                    if (err) throw err;
                    console.log("Department added successfully!");
                    start();
                }
            );
            // connection.query(
            //     "INSERT INTO department (department_name)", {
            //         name: answer.name,
            //     },
            //     (err) => {
            //         if (err) throw err;
            //         console.log("Department added successfully!");
            //         start();
            //     }
            // );
        });
}

function addRole() {
    inquirer
        .prompt([{
                name: "title",
                type: "input",
                message: "Enter role title:",
            },
            {
                name: "salary",
                type: "input",
                message: "Enter role salary:",
            },
            {
                name: "department_id",
                type: "input",
                message: "Enter department id:",
            },
        ])
        .then((answer) => {
            connection.query(
                "INSERT INTO role SET ?", {
                    title: answer.title,
                    salary: answer.salary,
                    department_id: answer.department_id,
                },
                (err) => {
                    if (err) throw err;
                    console.log("Role added successfully!");
                    start();
                }
            );
        });
}

function updateEmployeeRole() {
    inquirer
        .prompt([{
                name: "employee_id",
                type: "input",
                message: "Enter employee id:",
            },
            {
                name: "role_id",
                type: "input",
                message: "Enter new role id:",
            },
        ])
        .then((answer) => {
            connection.query(
                "UPDATE employee SET role_id = ? WHERE id = ?", [answer.role_id, answer.employee_id],
                (err) => {
                    if (err) throw err;
                    console.log("Employee role updated successfully!");
                    start();
                }
            );
        });
}

function deleteEmployeeDepartmentRole() {
    inquirer
        .prompt([{
            name: "table",
            type: "list",
            message: "What would you like to delete?",
            choices: ["Employee", "Department", "Role"],
        }, ])
        .then((answer) => {
            switch (answer.table) {
                case "Employee":
                    deleteEmployee();
                    break;
                case "Department":
                    deleteDepartment();
                    break;
                case "Role":
                    deleteRole();
                    break;
            }
        });
}

