class Car {
    private id: string;
    private color: string;
    private door: number;

	public getId(): string {
		return this.id;
	}

	public getColor(): string {
		return this.color;
	}

	public getDoor(): number {
		return this.door;

	}

	public setId(value: string) {
		this.id = value;
	}

	public setColor(value: string) {
		this.color = value;
	}

	public setDoor(value: number) {
		this.door = value;
	}

}