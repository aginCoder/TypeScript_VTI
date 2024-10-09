class Position {
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

function printInforPosition(position: Position): void {
    console.log("ID: " + position.getid() + " Position Name: " + position.getname());
}

export { Position, printInforPosition };
