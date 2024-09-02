import { Book } from "./book";
import { DVD } from "./dvd";
import { Library } from "./library";
import { Magazine } from "./magazine";

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
const magazine1 = new Magazine("National Geographic", "Various Authors", 123);
const dvd1 = new DVD("Inception", "Christopher Nolan", 148);

const library = new Library();
library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);

const foundItem = library.findItemByName("National Geographic");
if (foundItem) {
    console.log(`Found item: ${foundItem.name} by ${foundItem.author}`);
} else {
    console.log("Item not found");
}

const availableItems = library.getAvailableItems();
console.log("Available items:");
console.log("-----------------------------------");
availableItems.forEach(item => {
    console.log(`${item.name} by ${item.author}`);
});

book1.borrow();
console.log(`Is "${book1.name}" borrowed? ${book1.isBorrowed}`);

const updatedAvailableItems = library.getAvailableItems();
console.log("Updated available items:");
console.log("-----------------------------------");
updatedAvailableItems.forEach(item => {
    console.log(`${item.name} by ${item.author}`);
});
