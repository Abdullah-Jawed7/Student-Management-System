#! /usr/bin/env node
export {};
// let no = Math.floor(Math.random() * 10) + 1000;
// interface classes {
//   id: number;
//   name: string;
//   fees: number;
// }
// interface std {
//   name: string;
//   rollNo: string;
//   courses: classes[];
//   balance: number;
// }
// class SMS {
//   private student: std[] = [];
//   private class: classes[] = [];
//   constructor() {
//     this.class = [
//       { id: 1, name: "1st Standard", fees: 5000 },
//       { id: 2, name: "2st Standard", fees: 6000 },
//       { id: 3, name: "3st Standard", fees: 7000 },
//       { id: 4, name: "4st Standard", fees: 8000 },
//       { id: 5, name: "5st Standard", fees: 9000 },
//     ];
//   }
//   getStd(): std[] {
//     return this.student;
//   }
//   getCourses(): classes[] {
//     return this.class;
//   }
//   addStd(name: string) {
//     let id = no.toString();
//     let student: std = {
//       name,
//       rollNo: id,
//       courses: [],
//       balance: 0,
//     };
//     this.student.push(student);
//   }
//   enrollStd(studentId: string, classId: number) {
//     let checkStd = this.student.find((s) => s.rollNo === studentId);
//     let checkClass = this.class.find((c) => c.id === classId);
//     if (checkStd && checkClass) {
//       checkStd.courses.push(checkClass);
//       checkStd.balance += checkClass.fees;
//     } else {
//       console.log(`Student or Course not found`);
//     }
//   }
// }
// let news = new SMS();
// let system = true;
// while (true) {
//   console.log(chalk.magenta(`\n\t\t______________________________`));
//   console.log(chalk.bold.magenta(`\n\t\tWelcome To  The Karachi School`));
//   console.log(chalk.magenta(`\n\t\t______________________________`));
//   let explore = await inquirer
//     .prompt({
//       name: "action",
//       type: "list",
//       message: "What do you want to do ?",
//       choices: [
//         "Add Student",
//         "View Students",
//         "Pay the Fees",
//         "Delete Student",
//         "Exit",
//       ],
//     })
//     .then((explore) => {
//       switch (explore.action) {
//         case "Add Student":
//           console.log();
//           break;
//       }
//     });
// }
