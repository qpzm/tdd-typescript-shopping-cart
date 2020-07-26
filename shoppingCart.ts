export default function makeShoppingCart({ db }) {
  return Object.freeze({
    add,
    getItems,
  })

  // Q. different functions for each cart or the same?
  async function add(item) {
    return db.insert(item);
  }

  async function getItems() {
    return db.list();
  }
}
