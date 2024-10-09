import { CanBo }  from "./CanBo";
export class KySu extends CanBo {
    private field: string;
  
    constructor(name: string, age: number, gender: string, address: string, field: string) {
      super(name, age, gender, address);
      this.field = field;
    }
  
    public getField(): string {
      return this.field;
    }
  
    public setField(field: string): void {
      this.field = field;
    }
  
    public displayInfo(): void {
      super.displayInfo();
      console.log(`Field: ${this.field}`);
    }
  }
  