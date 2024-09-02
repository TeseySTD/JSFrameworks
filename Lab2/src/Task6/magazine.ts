import { LibraryItem } from "./library_item";

export class Magazine implements LibraryItem {
    name: string;
    author: string;
    issueNumber: number;
    isBorrowed: boolean;

    constructor(name: string, author: string, issueNumber: number) {
        this.name = name;
        this.author = author;
        this.issueNumber = issueNumber;
        this.isBorrowed = false;
    }

    borrow(): void {
        this.isBorrowed = true;
    }
}
