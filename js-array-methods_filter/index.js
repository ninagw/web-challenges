console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

// TASK 1 ------------------------------------------
// const onlyCardWithIdTwo = cards.filter((card) => {
//   if (card.id == 2) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(onlyCardWithIdTwo);

// kürzere Schreibweise:
const onlyCardWithIdTwo = cards.filter((card) => card.id == 2); // in diesem Fall nur zwei == nutzen, damit die 2 trotz string-Schreibweise erkannt wird. Drei === würde als falsch ausgegeben, da typeOf 2 = number und typeOf "2" = string.
console.log(onlyCardWithIdTwo);

// TASK 2 ------------------------------------------
const allCardsWith3Tags = cards.filter((card) => card.tags.length == 3);
console.log(allCardsWith3Tags);

// TASK 3 ------------------------------------------
const allCardsThatAreNotBookmarked = cards.filter(
  (card) => card.isBookmarked == false
);
console.log(allCardsThatAreNotBookmarked);

// TASK 4 ------------------------------------------
const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter(
  (card) =>
    (card.isBookmarked && card.tags.includes("html")) ||
    (card.isBookmarked && card.tags.includes("js"))
);
console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
