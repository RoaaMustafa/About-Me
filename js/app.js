'use strict';



let userName=prompt('what is your name?');
userName=userName.toLowerCase();
// console.log('what is your name?')
// console.log(userName)
let userAge=prompt('what is your age?');
alert('welcome to our website '+ userName + ' your age is ' + userAge +' we hope for you to live untle 100 year');

alert('we are going to ask you 5 questions about me Just Just let\'s play a guessing game to give you some excitement');

let city=prompt('Do you expect that I am from the city of Jerash?' , 'y/n  or yes/no' );
// console.log('Do you expect that I am from the city of Jerash?')
city=city.toLowerCase();
// console.log(city);
if(city==='yes' || city==='y'){
  alert('your answer is correct');

}
else if(city==='no'|| city==='n'){
  alert('your answer is wrong: i am from jerash');
}
else{

  alert('you have to submit answer');

}


let statue=prompt('Do you expect that I live now in the city of Jerash, or not?' ,'y/n  or yes/no');
// console.log('Do you expect that I live now in the city of Jerash, or not?')
statue=statue.toLowerCase();
// console.log(statue);
if(statue==='yes' || statue==='y'){
  alert('your answer is correct');

}
else if(statue==='no'|| statue==='n'){
  alert('your answer is wrong :  i live in amman' );
}
else{

  alert('you have to submit answer');

}

let team=prompt('Do you expect that I am the eldest in my brothers?' ,'y/n  or yes/no');
// console.log('Do you expect that I am the eldest in my brothers?');
team=team.toLowerCase();
// console.log(team);
if(team==='yes' || team==='y'){
  alert('your answer is correct');

}
else if(team==='no'|| team==='n'){
  alert('your answer is wrong : In fact, I am the eldest of my brother');
}
else{

  alert('you have to submit answer');

}

let continent=prompt('Do you think that I am a millionaire?','y/n  or yes/no');
// console.log('Do you think that I am a millionaire?');
continent=continent.toLowerCase();
// console.log(continent);

if(continent==='yes' || continent==='y'){
  alert('your answer is correct');

}
else if(continent==='no'|| continent==='n'){
  alert('your answer is wrong : i am not millionaire but i hope to become a millionare');
}
else{

  alert('you have to submit answer');

}

let wonder=prompt('Is my major in software engineering?' ,'y/n  or yes/no');
// console.log("Is Petra located in Jordan?");
wonder=wonder.toLowerCase();
// console.log(wonder);
switch(wonder){
case 'yes':
case 'y':
  alert('your answer is correct') ;
  break;
case 'no':
case 'n':
  alert('your answer is worng : my major is software engineering');

  break;

default:
  alert('you have to submit answer');


}
let myAge=prompt('Can you guess what my age is?');

for(let i=1;i<=4;i++){
  myAge=parseInt(myAge);

  if(myAge===22){
    alert('your answer is correct');
    break;
  }
  else if (myAge<15){
    alert('your guess is too low you have only 4 chances including this one');
    myAge=prompt('Can you guess what my age is?');
  }
  else if (myAge>=15){
    alert('your guess is too high have only 4 chances including this one');
    myAge=prompt('Can you guess what my age is?');
  }
  else{
    alert('pleas your guess should in number have only 4 chances including this one');
    myAge=prompt('Can you guess what my age is?');
  }
}
alert('my age is 22');
let things=['money','travel','hang out','sleep','play football'];

for(let i=1;i<=6;i++){
  let mood=prompt('Can you guess what things makes me happy?');

  for(let j=0;j<things.length;j++){

    if(mood===things[j]){
      alert('your anwser is correct');
      i=6;
      break;


    }

  }


}









alert('things that make me happy sleep,travel,hang out ,paly footbal,money');


alert('thank you to visit our website  ' + userName);


