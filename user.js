const chalk = require('chalk');
const validator = require('validator');

const getDataUser = (username, email, err) => {

    if(validator.isEmail(email)) {
        return `Selamat datang ${username}. Email kamu adalah ${email}`
    } else {
        console.log(chalk.bgRed('Email kamu tidak valid'))
    }  
}

module.exports=({getDataUser})