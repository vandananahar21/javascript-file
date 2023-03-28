// let text = " I SCREAM FOR ICE CREAM!";
// let pattern=/[A-E]/g;
// console.log(text.match(pattern));

// let text1="1234556678";
// let pattern1=/[^1-4]/g;
// console.log(text1.match(pattern1));


// const regex = new RegExp(/^vandananahar94@gmail.com$/);
// console.log(regex.test('vandananahr94@gmail.com'));

// string='find me';
// pattern2 =/ me/;
// console.log(string.replace(pattern2, 'found you'));
// console.log(string.search(pattern2));

// const regex1 = /[\s,]+/;
// const result2 ='hello world! ' .split(regex1);
// console.log(result2);

// const regex2 =/(\d{3})\D(\d{3})-(\d{4})/g;
// const result3 =regex2.exec('my phone number is:555 123-4567');
// console.log(result3);

// regular expression modifier
// const str='hello hello hello';
// const result1 =str.replace(/hello/,'world');
// console.log(result1);

// const result4 = str.replace(/hello/g,'world');
// console.log(result4);

// const result5 =str.replace(/hello/i,'world');
// console.log(result5);

// const result6 = str.replace(/hello/gi, 'world');
// console.log(result6);


// validating the phone number
// function validatephone(num){
//     const re =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
//     let result =num.match(re);
//     if(result){
//         console.log('the number is valid');
//     }
//     else{
//         let num = prompt('enter number in XXX-XXX-XXXX format:');
//         validatePhone(num);
//     }
// }
// let number = prompt('enter a number XXX-XXX-XXXX');
// validatephone(Number);

// // validate a email number
// function validateEmail(email){
//     const re =/\S+@\S+\.\S+/g;
//     let result = re.test(email);
//     if (result){
//         console.log('the email is valid');
//     }
//         else{
//             let newEmail = prompt('Enter a valid email:');
//             validateEmail(newEmail);
//         }
//     }

//     let email = prompt('enter an email:');
//     vaildateEmail(email);



    

// complex code of javascript (not to use static and instance)
    // class User {
    //     constructor(email, password) {
    //       this.email = email;
    //       this.password = password;
    //     }
      
    //     static matchNewPerson(name, email, password) {
    //       const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,})+$/;
    //       const passwordRegex = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/;
      
    //       if (!emailRegex.test(email)) {
    //         return `${email} is not a valid email address.`;
    //       }
      
    //       if (!passwordRegex.test(password)) {
    //         return 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.';
    //       }
      
    //       return new User(email, password);
    //     }
    //   }
      
    
    
    
    // newUser = User.matchNewPerson('deep', 'deep.singh@example.com', 'Password1');
    
    
    // if (newUser instanceof User) {
    //   console.log(`User with email ${newUser.email} created successfully.`);
    // } else {
    //   console.error(newUser);
    // }



    class user{
      constructor(email,password){
        this.email=email;
        this.password=password;
      }
      validateEmail(email){
        email=/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,})+$/;
        
        if(this.password.match(email)){
        console.log('this email is valid');
      }
      else{
        console.log('this email is not valid');
      }
    }
  

      validatePassword(password){
        this.password=/^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/;

        if(this.password.match(email)){
          console.log('this password is valid');
        }
        else{
          console.log('this password is not valid');
        }
      }
    }
    newUser= new user('vandana.nahar@gmail.com','Password1');
    newUser.validateEmail();
    newUser.validatePassword();