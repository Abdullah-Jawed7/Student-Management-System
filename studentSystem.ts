#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// interface classes {
//       id: number;
//       name: string;
//       balance: number;
//     }

// class Student {
//     name ;
//     rollNo;
//      private course: classes[] = [];
//     constructor(name:string,){
//         this.name = name
//         this.rollNo = Math.floor(Math.random() * 10) + 1000;
//         this.course =  [
//                   { id: 1, name: "1st Standard", balance: 5000 },
//                   { id: 2, name: "2st Standard", balance: 6000 },
//                   { id: 3, name: "3st Standard", balance: 7000 },
//                   { id: 4, name: "4st Standard", balance: 8000 },
//                   { id: 5, name: "5st Standard", balance: 9000 },
//                 ];
//     }
// }


let aa = []
let courseFee :{[key : string] : number} ={
  
HTML : 1000,
CSS : 1000,
JAVASCRIPT : 2000 ,
TYPESCRIPT : 2000,
NEXTJS : 2500,
PYTHON : 3000,
}

let fees = 0
let bbb = true
class Student {
  name : string
  rollNo  : Number
  selectedCourse : string[]
  balance : number
  // ()=>void
  constructor(
    name :string ,
    selectedCourse : string[],
    fes :number
  )
  {
    this.name = name
    this.selectedCourse =selectedCourse
    this.rollNo = Math.floor(Math.random() * 10) + 1000
    this.balance = fes
//     ()=> {
//       if (bbb){
//         console.log(chalk.blue(`Your all fees are Paid \n  Your Balance has Cleared`));
        
//        } else {
// console.log(chalk.blue(`${fes} Pending`));}}
  
    }
    showStatus(){
    console.log(chalk.cyan.bold.underline(` \n\t\t\t MY STATUS \t\t \n`));
    console.log(chalk.greenBright.bold (` > Students Name       : ${this.name}` ));
     console.log(chalk.greenBright.bold(` > Student Roll Number : ${this.rollNo}`));
    console.log(chalk.greenBright.bold (` > Selected Course     : ${this.selectedCourse}`));
     console.log(chalk.greenBright.bold(` > Balance             : ${this.balance} Pending`)); 
    
    }
    paidFees (){
      inquirer.prompt({
        name :"amount",
        type : "number",
        message:"Enter amount to Pay : "
      }).then(
      (answer) => {
        if (answer.amount > 0){
        let i =  this.balance -= answer.amount
        if( i <= 0 ){
          console.log("Amount Paid");
          console.log(`Remaining Balance is ${i}`);
          

        } else {
          console.log(`Pending Amount is ${i}`);
          

        }
        }
      }
      )
    }
  }
// async function addStudent() {


  
  
console.log(chalk.magenta(`\n\t\t______________________________`));
console.log(chalk.bold.magenta(`\n\t\tWelcome To  The Karachi School`));
console.log(chalk.magenta(`\n\t\t______________________________`));
  let play = true

  while(true){
    let explore = await inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What do you want to do ?",
      choices: [
        "Add Student",
        "Show Status",
        "Pay the Fees",
        "Delete Student",
        "Exit",
      ],
    })
    if(explore.action === "Exit"){
      break
    }
    else if(explore.action === "Add Student"){
  //  addStudent() 
   let action = await inquirer.prompt([{
     name:"name",
     type:"input",
     message:"Enter Your name : "

   },{
     name :"course",
     type:"list",
    message:"Select Your course : ",
    choices:["HTML",'CSS','JAVASCRIPT','TYPESCRIPT',"NEXTJS","PYTHON"],

   }
 ])
 let fee = courseFee[action.course]
 console.log(`${action.name}, You have selected ${action.course} and its fees is ${fee} `);
 let data = new Student(action.name,action.course,fee)
 aa.push(data)
 console.log(aa);
 

 

 }else if(explore.action === "Show Status"){ }
    }
  
  
