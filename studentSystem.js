#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let students = [];
let courseFee = {
    HTML: 1000,
    CSS: 1000,
    JAVASCRIPT: 2000,
    TYPESCRIPT: 2000,
    NEXTJS: 2500,
    PYTHON: 3000,
};
let fees = 0;
let bbb = true;
class Student {
    static counter = 1200;
    name;
    rollNo;
    selectedCourse;
    balance;
    constructor(name, selectedCourse, fes) {
        this.name = name;
        this.selectedCourse = [];
        this.selectedCourse.push(selectedCourse);
        this.rollNo = Student.counter++;
        this.balance = 0;
        this.balance += fes;
    }
    showStatus() {
        console.log(chalk.blueBright.bold(`\n\t\tMY STATUS \t\t\n`));
        console.log(chalk.cyan.bold(` > Students Name       : ${this.name}`));
        console.log(chalk.cyan.bold(` > Student Roll Number : ${this.rollNo}`));
        console.log(chalk.cyan.bold(` > Selected Course     : ${this.selectedCourse}`));
        console.log(chalk.cyan.bold(` > Balance             : ${this.balance} Pending`));
    }
    async paidFees(roll) {
        let find = students.find((s) => s.rollNo === roll);
        if (find === undefined) {
            console.log(chalk.greenBright(`Enter Valid Roll Number`));
        }
        else {
            let answer = await inquirer.prompt({
                name: "amount",
                type: "number",
                message: "Enter amount to Pay : ",
            });
            this.balance -= answer.amount;
            if (answer.amount < this.balance) {
                console.log(` ${this.name} Amount Paid : ${answer.amount} `);
                console.log(`Remaining Balance is ${this.balance}`);
            }
            else if (answer.amount >= this.balance) {
                console.log(`All Due payment is Cleared`);
            }
            else {
                console.log(`Enter Correct Amount`);
            }
        }
    }
    removeStd(roll) {
        let find = students.find((s) => s.rollNo === roll);
        if (find === undefined) {
            console.log(chalk.greenBright(`Enter Valid Roll Number`));
        }
        else {
            students = students.filter((s) => s.rollNo !== roll);
            console.log(`Name : ${find.name}  Roll No : ${find.rollNo} has removed Succesfully`);
        }
    }
    async addCourse(roll) {
        let find = students.find((s) => s.rollNo === roll);
        if (find === undefined) {
            console.log(chalk.greenBright(`Enter Valid Roll Number`));
        }
        else {
            let action = await inquirer.prompt({
                name: "course",
                type: "list",
                message: "Select Your course : ",
                choices: [
                    "HTML",
                    "CSS",
                    "JAVASCRIPT",
                    "TYPESCRIPT",
                    "NEXTJS",
                    "PYTHON",
                ],
            });
            let fee = courseFee[action.course];
            find.balance = +fee;
            console.log(chalk.yellowBright(` ${this.name}, Roll Number ${this.rollNo} \n You select ${action.course} and its fees is ${fee} `));
            find.selectedCourse.push(action.course);
        }
    }
}
console.log(chalk.magenta(`\n\t\t______________________________`));
console.log(chalk.bold.magenta(`\n\t\tWelcome To  The Karachi School`));
console.log(chalk.magenta(`\n\t\t______________________________`));
let play = true;
while (true) {
    let explore = await inquirer.prompt({
        name: "action",
        type: "list",
        message: "What do you want to do ?",
        choices: [
            "Add Student",
            "Show Status",
            "Pay Fees",
            "Add More Courses",
            "Remove Student",
            "Exit",
        ],
    });
    if (explore.action === "Exit") {
        break;
    }
    else if (explore.action === "Add Student") {
        let action = await inquirer.prompt([
            {
                name: "name",
                type: "input",
                message: "Enter Your name : ",
            },
            {
                name: "course",
                type: "list",
                message: "Select Your course : ",
                choices: [
                    "HTML",
                    "CSS",
                    "JAVASCRIPT",
                    "TYPESCRIPT",
                    "NEXTJS",
                    "PYTHON",
                ],
            },
        ]);
        let fee = courseFee[action.course];
        let data = new Student(action.name, action.course, fee);
        console.log(chalk.yellowBright(` ${action.name}, Roll Number ${data.rollNo} \n You select ${action.course} and its fees is ${fee} `));
        students.push(data);
    }
    else if (explore.action === "Show Status") {
        let findRoll = await inquirer.prompt({
            name: "roll",
            type: "number",
            message: "Enter Roll Number : ",
        });
        let find = students.find((s) => s.rollNo === findRoll.roll);
        if (find === undefined) {
            console.log(chalk.greenBright(`Enter Valid Roll Number`));
        }
        else {
            find?.showStatus();
        }
    }
    else if (explore.action === "Remove Student") {
        let findRoll = await inquirer.prompt({
            name: "roll",
            type: "number",
            message: "Enter Roll Number : ",
        });
        let find = students.find((s) => s.rollNo === findRoll.roll);
        find?.removeStd(findRoll.roll);
    }
    else if (explore.action === "Pay Fees") {
        let findRoll = await inquirer.prompt({
            name: "roll",
            type: "number",
            message: "Enter Roll Number : ",
        });
        let find = students.find((s) => s.rollNo === findRoll.roll);
        await find?.paidFees(findRoll.roll);
    }
    else if (explore.action === "Add More Courses") {
        let findRoll = await inquirer.prompt({
            name: "roll",
            type: "number",
            message: "Enter Roll Number : ",
        });
        let find = students.find((s) => s.rollNo === findRoll.roll);
        await find?.addCourse(findRoll.roll);
    }
}
