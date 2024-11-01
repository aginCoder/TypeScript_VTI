class Department {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public getname(): string {
        return this.name;
    }
    public setname(v: string) {
        this.name = v;
    }

    public getid(): number {
        return this.id;
    }
    public setid(v: number) {
        this.id = v;
    }
}

function printInforDepartment(department: Department): void {
    console.log("ID: " + department.getid() + " Department Name: " + department.getname());
}

export { Department, printInforDepartment };
