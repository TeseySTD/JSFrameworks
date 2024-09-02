import { LibraryItem } from "./library_item";

export class DVD implements LibraryItem {
    name: string;
    author: string;
    duration: number;
    isBorrowed: boolean;

    constructor(name: string, author: string, duration: number) {
        this.name = name;
        this.author = author;
        this.duration = duration;
        this.isBorrowed = false;
    }

    borrow(): void {
        this.isBorrowed = true;
    }
}
