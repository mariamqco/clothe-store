export class Client {
    _id?: any;
    name: String;
    lastname: String;
    id_number: String;
    email: String;
    cellphone: String;
    age: String;
    occupation: String;
    city: String;
    address: String;

    constructor(name: String,lastname: String,id_number: String,email: String,cellphone: String,age: String,occupation: String,city: String,address: String){
        this.name = name;
        this.lastname = lastname;
        this.id_number = id_number;
        this.email = email;
        this.cellphone = cellphone;
        this.age = age;
        this.occupation = occupation;
        this.city = city;
        this.address = address;
    }

}