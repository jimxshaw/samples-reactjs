// This is a reducer and all it does is returns a piece of our application state.
// In this case, it's a list of books. We export the file so that any other part 
// of our application can use this reducer. 
export default function() {
  return [
    {title: "Dune", author: "Frank Herbert", genre: "Sci-Fi"},
    {title: "The Hobbit", author: "J.R.R. Tolkein", genre: "Fantasy"},
    {title: "Democracy in America", author: "Alexis de Tocqueville", genre: "Non-Fiction"},
    {title: "Of Mice and Men", author: "John Steinbeck", genre: "Fiction"},
    {title: "Code Complete", author: "Steve McConnell", genre: "Programming"}
  ];
}