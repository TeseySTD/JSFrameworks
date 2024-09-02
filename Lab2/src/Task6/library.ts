import { LibraryItem } from "./library_item";

export class Library {
    private items: LibraryItem[];

    constructor() {
        this.items = [];
    }

    addItem(item: LibraryItem): void {
        this.items.push(item);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(item => item.name === name);
    }

    getAvailableItems(): LibraryItem[] {
        return this.items.filter(item => !item.isBorrowed);
    }
}
