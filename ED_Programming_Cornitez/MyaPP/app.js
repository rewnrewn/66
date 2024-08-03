// // // // // //alert("Congrats You Have Won 100000000")
// // // // // console.log("Welcome To My Page");
// // // // // //1.string
// // // // // // 2. number
// // // // // // 3. int
// // // // // // 4.boolean
// // // // // // 5. undefined
// // // // // // 6. null
// // // // // // 7. symbol
// // // // // // 8. object
// // // // // let firstname ="baho";
// // // // // let lastname ="kag oten";
// // // // // let x = 25;
// // // // // let y = 35;
// // // // // let sum = x+y;
// // // // // let is_login =true 
// // // // // console.log(firstname+lastname);
// // // // // console.log("The Sum of "+ x + "and"+ y + "is" + sum );
// // // // // console.log(is_login)
// // // // document.querySelector('#title').style.color = 'black';

// // // // document.querySelector('.subtitle').style.background=' pink';

// // // //add two numbers  using prompt and alert 
// // // let num1 = parseInt(prompt("ENTER FIRST NUMBER"));
// // // let num2 = parseInt(prompt("ENTER SECOND NUMBER"));
// // // let sum = num1+num2;
// // // alert(`The sum of ${num1} and ${num2}is ${sum}`);
// // // alert("The sum of"+num1+ "and"+num2+ "is"+sum);

// // //console
// // let num1 =3;
// // let num2= 5;
// // let sum=num1+num2;
// // console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

// function greetings(){
//     alert("Good Morning!");

// }
// greetings();

function greetings(){
    let name= (prompt("ENTER NAME:"));
    let lastname=(prompt("ENTER LASTNAME"));
    let birthYear= (prompt("ENTER BIRTHYEAR"));
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    alert(`Hello I'm ${name} ${lastname},Good Morning!, You are ${age} yrs old`);

    

}
greetings();
