import { CanBo } from "./CanBo";
export class NhanVien extends CanBo {
    private job: string;
  
    constructor(name: string, age: number, gender: string, address: string, job: string) {
      super(name, age, gender, address);
      this.job = job;
    }
  
    public getJob(): string {
      return this.job;
    }
  
    public setJob(job: string): void {
      this.job = job;
    }
  
    public displayInfo(): void {
      super.displayInfo();
      console.log(`Job: ${this.job}`);
    }
  }
  