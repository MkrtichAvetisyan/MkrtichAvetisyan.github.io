
    // arr.forEach(user => console.log(user));
    // console.log(arr.filter(user => user.country === 'Հայաստան'));
    // console.log(arr.filter(user => user.age >= 18));
    // console.log(arr.filter(user => user.gender === 'Տղամարդ' && user.sallary > 100000));

    // console.log(arr.sort((a,b) => a.age-b.age))


    // let obj = {
    //     name: 'Armen',
    //     lastName: 'Virabyan',
    //     age: 18,
    //     height: 180,
    //     birthday: '20 nov 2004 ',
    //     userName: function(a,b){
    //         return `${this.name} ${this.lastName}`
    //     }
    // }
    // // console.log(obj.userName())
    // let user = {
    //     name: 'Gagik',
    //     lastName: 'Hakobyan'
    // }

    // let robot = {
    //     color: 'metalic'
    // }

    // user.__proto__= obj
    // robot.__proto__= user
    
    // console.log(user)
    // console.log(robot)
    // console.log(obj.userName.call(user,5,6));
    // console.log(obj.userName.bind(user));
    // console.log(obj.userName.apply(user,[4,5,7]));

//     let arr = [{
//     id: 12345567,
//     firstname: 'Անի',
//     lastname: 'Պողոսյան',
//     email: 'poxosyan@gmail.ru',
//     gender: 'Կին',
//     age: 29,
//     country: 'Հայաստան',
//     sallary: 200000,
//     birthday: '11 nov 2015',
//     userAge: function(){
//         return new Date().getFullYear() - new Date(this.birthday).getFullYear()
//     }
// },
//     {
//     id: 51652418,
//     firstname: 'Լիլիթ',
//     lastname: 'Գրիգորյան',
//     email: 'grigoryan758@gmail.com',
//     gender: 'Կին',
//     age: 16,
//     country: 'Ռուսաստան',
//     sallary: 350000,
//     birthday: '25 feb 2000'
//     },
//      {
//     id: 39295723,
//     firstname: 'Անդրանիկ',
//     lastname: 'Ազոյան',
//     email: 'azoyan666@gmail.ru',
//     gender: 'Տղամարդ',
//     age: 46,
//     country: 'ԱՄՆ',
//     sallary: 560000,
//     birthday: '4 dec 1900'
//     },
//     {
//     id: 18569175,
//     firstname: 'Սուրեն',
//     lastname: 'Մինասյան',
//     email: 'minasyan@gmail.ru',
//     gender: 'Տղամարդ',
//     age: 17,
//     country: 'Հայաստան',
//     sallary: 56000,
//     birthday: '1 oct 2010'
//     }]
    

    // arr1.__proto__= arr
    // arr2.__proto__= arr1
    // arr3.__proto__= arr2 
   
    // arr.forEach(function(obj1){
    //     obj1 = new Date().getFullYear() - new Date(obj1.birthday).getFullYear()
    //     console.log(obj1)
        
    // })
    
    let arr = [ {
        type: 'BMW',
        color: 'black',
        speed: 210,
        distance: 1000
    },
    {
        type: 'Mercedes',
        color: 'white',
        speed: 170
    },
    {
        type: 'opel',
        color: 'red',
        speed: 70
    },
    {
        type: 'Toyota camry',
        color: 'grey',
        speed: 145
    }]

    arr[1].__proto__=arr[0];
    arr[2].__proto__=arr[1];
    arr[3].__proto__=arr[2];


    arr.forEach(function(time){
        time = (time.distance / time.speed)*60;
        console.log(Math.ceil(time));
    })