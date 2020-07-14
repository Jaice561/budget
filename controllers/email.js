let cron = require('node-cron');
let nodemailer = require('nodemailer');
const budget = require('../models/budget');

module.exports = {
    sendEmail
}

function sendEmail(budgets,recipientEmailAddr) {
    let budgetsDict = {};
    budgets.forEach(function (budget) {
        if (!budgetsDict[budget.month]) {
            budgetsDict[budget.month] = [];
            budgetsDict[budget.month].push(budget.budgetsList)
    }
        else
            budgetsDict[budget.month].push(budget.budgetsList);
});
     
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'Jaice561@gmail.com',
            pass: 'Chaice@561'
            }
        });
    for (var month in budgetsDict) {
        console.log(month)
        var budgetsTxt = '';
        budgetsDict[weekday].forEach(function (txt) {
            budgetsTxt += txt + '\n';
        });
      
        var datestr = '08 13 * * ' + month;
        console.log(datestr);
     
        let mailBudgets = {
            from: 'Jaice561@gmail.com',
            to: recipientEmailAddr,
            subject: 'Here are the Budgets for '+month+'Month !',
            text: budgetsTxt
        };

        var emailtask = cron.schedule(datestr, () => {
            transporter.sendMail(mailBudgets, function (error, info) {
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