import { Department } from "./Department";
import { Position } from "./Position";

class Account {
    private id: number;
    private email: string;
    private username: string;
    private fullname: string;
    private department: Department;
    private position: Position;
    private createDate: Date;

    constructor(id: number, email: string, username: string, fullname: string, department: Department, position: Position, createDate: Date) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.fullname = fullname;
        this.department = department;
        this.position = position;
        this.createDate = createDate;
    }

    public setid(v: number) { this.id = v; }
    public getid(): number { return this.id; }

    public setemail(v: string) { this.email = v; }
    public getemail(): string { return this.email; }

    public setusername(v: string) { this.username = v; }
    public getusername(): string { return this.username; }

    public setfullname(v: string) { this.fullname = v; }
    public getfullname(): string { return this.fullname; }

    public setdepartment(v: Department) { this.department = v; }
    public getdepartment(): Department { return this.department; }

    public setposition(v: Position) { this.position = v; }
    public getposition(): Position { return this.position; }

    public setcreateDate(v: Date) { this.createDate = v; }
    public getcreateDate(): Date { return this.createDate; }
}

function printInforAccount(account: Account): void {
    console.log(
        "ID: " + account.getid() +
        " Username: " + account.getusername() +
        " Fullname: " + account.getfullname() +
        " Department: " + account.getdepartment().getname() +
        " Position: " + account.getposition().getname()
    );
}

export { Account, printInforAccount };
