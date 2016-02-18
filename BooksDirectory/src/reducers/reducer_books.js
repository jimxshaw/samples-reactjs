// This is a reducer and all it does is returns a piece of our application state.
// In this case, it's a list of books. We export the file so that any other part 
// of our application can use this reducer. 
export default function() {
  return [
    {title: "Dune"},
    {title: "The Hobbit"},
    {title: "Eloquent Javascript"},
    {title: "Of Mice and Men"},
    {title: "Code Complete"}
  ];
}