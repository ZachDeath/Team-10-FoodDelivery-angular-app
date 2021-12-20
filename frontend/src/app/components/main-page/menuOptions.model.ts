export class menuOption {
    public id: number;
    public name: string;
    public photoPath: string;
    public url: string;
    
    constructor(id: number, name: string, photoPath: string, url:string) {
        this.id = id;
        this.name = name;
        this.photoPath = photoPath;
        this.url = url;
    }
}