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