export interface LibraryItem {
    name: string;
    author: string;
    borrow(): void;
    isBorrowed: boolean;
}
