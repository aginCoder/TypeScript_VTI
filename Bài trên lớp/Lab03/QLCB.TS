import { CanBo } from "./CanBo";
export class QLCB {
    public staffList: CanBo[] = [];

    public addStaff(member: CanBo): void {
      this.staffList.push(member);
    }

    public searchByName(name: string): CanBo[] {
      return this.staffList.filter(member => member.getName() === name);
    }

    public displayAllStaff(): void {
      this.staffList.forEach(member => {
        member.displayInfo();
      });
    }

    public deleteByName(name: string): void {
      this.staffList = this.staffList.filter(member => member.getName() !== name);
    }
  
    public exitProgram(): void {
      console.log("Exiting program...");
    }
  }
  