let cron = require('node-cron');
let nodemailer = require('nodemailer');
const budget = require('../models/budget');

module.exports = {
    sendEmail
}

function sendEmail(budgets,recipientEmailAddr) {
    let budgetTxt = '';
    let budgetDict = {};
    budgets.forEach(function (budget) {
        let optionsBudget = "Net income: "+budget.netIncome
        if (!budgetDict[budget.month]) {
            budgetDict[budget.month] = [];
            budgetDict[budget.month].push(optionsBudget)
        } else {
            budgetDict[budget.month].push(optionsBudget);
        }
    });
     
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '',
            pass: ''
            }
        });
    for (var month in budgetDict) {
        console.log(month)
        budgetDict[month].forEach(function (txt) {
            budgetTxt += txt + '\n';
        });
     
        // var datestr = '03 09 16' + month+' *';
        var datestr = '55 18 17 * *';
        console.log(datestr);
     
        let mailOptions = {
            from: 'Jaice561@gmail.com',
            to: recipientEmailAddr,
            subject: 'Here are the budgets for '+month+' month !',
            text: budgetTxt
        };

        var emailtask = cron.schedule(datestr, () => {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        });

        emailtask.start();
    }
        }