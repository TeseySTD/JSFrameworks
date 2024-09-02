import { AnimalBehavior } from "./animal_behavior";

export class Cat implements AnimalBehavior {

    public name:string;
    public type:string;
    public color:string;
    public readonly sound:string = "meow";
    constructor(name: string, type: string, color: string) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
    eat(): void {
        console.log("Cat eats");    
    }
    move(): void {
        console.log("Cat moves");   
        this.meow(); 
    }
    sleep(): void {
        console.log("Cat sleeps");    
    }
    meow(): void {
        console.log("Cat named " + this.name + " says " + this.sound);
    }   
}

export class Bird implements AnimalBehavior {
    public name:string;
    public type:string; 
    public sound: string;
    constructor(name: string, type: string, sound: string) {
        this.name = name;
        this.type = type;
        this.sound = sound;
    }
    eat(): void {
        console.log("Bird eats");    
    }
    move(): void {
        console.log("Bird flies");  
        this.chirp();  
    }
    sleep(): void {
        console.log("Bird sleeps");    
    }
    chirp(): void {
        console.log("Bird named " + this.name + " says " + this.sound);
    }
}

export class Fish implements AnimalBehavior {
    public name:string;
    public type:string;
    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
    eat(): void {
        console.log("Fish eats");    
    }
    move(): void {
        console.log("Fish swims");    
    }
    sleep(): void {
        console.log("Fish sleeps");    
    }
}