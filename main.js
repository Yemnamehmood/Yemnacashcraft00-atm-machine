#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 30000; //dollar
let mypin = 1334;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter you pin code",
        type: "number"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("Correct Pin Code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select an option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash", "Exit"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter the amount to withdraw",
                type: "number"
            }
        ]);
        console.log(amountAns.Amount);
        mybalance -= amountAns.Amount;
        console.log(`Your remaining balance is: ${mybalance}`);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Current Balance Amount is:${mybalance}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "option",
                message: "Select Fast Cash Amount",
                type: "list",
                choices: ["1000", "2000", "4000", "6000", "7000", "10000"],
            }
        ]);
        mybalance -= fastcashAns.option;
        console.log(`Your remaining Current Amount is:  ${mybalance}`);
    }
    else if (operationAns.operation === "Exit") {
        console.log("Thank you for using the ATM. Goodbye!");
    }
}
else {
    console.log("Incorrect Pin Number");
}
//do fast cash h.w 4 options 1000,2000,5000,10,000
// template literals use coordination
//insufficient balance h.w
