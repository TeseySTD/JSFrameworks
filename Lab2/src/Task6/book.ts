import { LibraryItem } from "./library_item";

export class Book implements LibraryItem {
    name: string;
    author: string;
    pages: number;
    isBorrowed: boolean;

    constructor(name: string, author: string, pages: number) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.isBorrowed = false;
    }

    borrow(): void {
        this.isBorrowed = true;
    }
}
