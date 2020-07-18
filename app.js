// const os = require('os');

// // console.log(os);
// console.log('Platform: ', os.platform());
// console.log('Arch: ', os.arch());
// console.log('UserInfo: ', os.userInfo());


const fs = require('fs');


const genders = ['M', 'F'];
const femaleNames = ['Nicola', 'Iwona', 'Mariola', 'Helena', 'Julia', 'Klaudia', 'Karolina'];
const maleNames = ['Adrian', 'Jarek', 'Wojtek', 'Wiesiek', 'Radek', 'Andrzej', 'Hubert'];
const lastNames = ['Nowak', 'Kowalczyk', 'Bednarek', 'Stępień', 'Zajkiewicz', 'Gąska', 'Owczarz'];
const people = [];
// const ageMin = 18;
// const ageMax = 78;
const phone =  ['131-551-121', '242-262-272', '343-432-386', '666-666-666', '321-461-523', '752-523-412'];
const randomEmail = ['@o2.pl', '@gmail.com', '@onet.pl', '@yahoo.com', '@cykaBlyat.ru']


const randChoice = arr => arr[Math.floor(Math.random() * arr.length)];

for(let i = 0; i < 20; i++) {

    const gender = randChoice(genders);
    const firstName = gender === 'F' ? randChoice(femaleNames) : randChoice(maleNames);
    const lastName = randChoice(lastNames);
    const randomMail = randChoice(randomEmail);
    const age = Math.floor(Math.random() * 60) + 18;   // 18-78
    const email = `${firstName}.${lastName}${randomMail}`; // with . ?
    const phoneNumber = randChoice(phone);


    const pplId = {
        gender,
        firstName,
        lastName,
        age,
        phoneNumber,
        email,
    };

  people.push(pplId);  

};

const jsonJson = JSON.stringify(people);

fs.writeFile('people.json', jsonJson, (err) => {
    if (err) throw err;
    console.log('The file has been saved! :  )');
  });