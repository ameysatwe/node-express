// import chalk=require('chalk')
// console.log(chalk.blue("Hello"))
// console.log(chalk.bold.red("Amey"))
// console.log(process.argv)
// // if(process.argv[2]=="help")
// // {
// //     console.log(chalk.red("It provides following functions\n 1 Add"))

// // }
// // else if(process.argv[2]=="add")
// // {
// //     var a=+process.argv[3]
// //     var b=+process.argv[4]
// //     var c=a+b
// //     console.log("addiition is :"+c)
// // }
// import yargs=require('yargs')
// import { describe } from 'yargs'
// import fs=require('fs')
// yargs.version("1.3.3.3")
// yargs.command(
//     {
//         command: 'sub',
//         describe:'performs substraction',
//         builder:{
//                     a:{describe:"Number"},
//                     b:{describe:"Number"}
//                 },
//         handler:function(argv){
//             var c=+argv.a-(+argv.b)
//             console.log(c)
//         }
//     }
// )
// fs.writeFileSync("a.log","Log is here")
// fs.appendFileSync("a.log","sub is")
// yargs.parse()
const book={
    title:"apm",
    author:"Amey",
}
console.log(book)
const bookJson=JSON.stringify(book)
console.log(bookJson)
const bookparse:{title:string,author:string}=JSON.parse(bookJson)