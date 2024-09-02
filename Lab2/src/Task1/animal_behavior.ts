export interface AnimalBehavior {
    name: string;
    type: string;
    color?: string;
    sound?: string;
    eat(): void;
    move(): void;
    sleep(): void;
}