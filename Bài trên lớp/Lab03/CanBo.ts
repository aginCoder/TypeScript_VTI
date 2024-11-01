export class CanBo {
    private name: string;
    private age: number;
    private gender: string;
    private address: string;
  
    constructor(name: string, age: number, gender: string, address: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.address = address;
    }
  
    // Getters and setters to encapsulate properties
    public getName(): string {
      return this.name;
    }
  
    public setName(name: string): void {
      this.name = name;
    }
  
    public getAge(): number {
      return this.age;
    }
  
    public setAge(age: number): void {
      this.age = age;
    }
  
    public getGender(): string {
      return this.gender;
    }
  
    public setGender(gender: string): void {
      this.gender = gender;
    }
  
    public getAddress(): string {
      return this.address;
    }
  
    public setAddress(address: string): void {
      this.address = address;
    }
  
    public displayInfo(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Address: ${this.address}`);
    }
  }
  