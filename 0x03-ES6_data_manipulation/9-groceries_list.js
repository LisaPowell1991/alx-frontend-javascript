export default function groceriesList() {
  // Create an empty map
  const groceries = new Map();

  // Add the groceries
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  // return our complete shopping list (map)
  return groceries;
}
