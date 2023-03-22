function createEmployeeobjects(name){
    return{
        name:name,
        work: function(){
            console.log('new employee created with name: '+name);
        }
    };
}
const emp1 = createEmployeeobjects('steve jobs');
emp1.work();

const emp2 = createEmployeeobjects('bill gates');
emp2.work();


let person1 ={
    firstname:'john',
    lastname:'doe',
    getfullname(){
        return this.firstname + ' ' +this.lastname;
    },
};
console.log(person1.getfullname());