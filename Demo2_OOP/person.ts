// Khai báo class Person
export class Person{
    // public id: number;
    // public name: string;
    // public address: string;

    private id: number;
    private name: string;
    private address: string;

    // constructor
    // public Person(id, name, address) {
    //     this.id = id;
    //     this.name = name;
    //     this.address = address;
    // }

    constructor(id: number, name: string, address: string){
        this.id = id;
        this.name = name;
        this.address = address;
    }
    public setId(id: number){
        this.id = id;
    }
    public setname(name: string){
        this.name = name;
    }
    public setaddress(address: string){
        this.address = address;
    }
    public getID(): number{
        return this.id;
    }
    public getName(): string{
        return this.name;
    }
    public getAddress(): string{
        return this.address;
    }

    // Khai báo phương thức GoVTI
    public goVTI(){
        console.log("Student go to VTI to learn");
    }

    // Viết hàm toString()
    public toString(){
        return `ID: ${this.id}, name: ${this.name}, address: ${this.address}`;
    }
}

// export var myname = 'Ân';
// export var myAge = 20;

// var logoVTI = "VTI ACADEMY";

// export default logoVTI;

// export { Person, myname, myAge } ;

// Demo
// var person1 = new Person();
// person1.id = 1;
// person1.name = "an.pg";
// person1.address = "ĐL";


// // In ra
// console.log("Thông tin của person1 là: ");
// console.log("ID:" + person1.id);
// console.log("Name:" + person1.name);
// console.log("Address:" + person1.address);