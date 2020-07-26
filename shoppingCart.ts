export default function makeShoppingCart({ db }) {
  return Object.freeze({
    add,
    getItems,
    removeItem,
    findItem,
    updateItem,
  })

  // Q. different functions for each cart or the same?
  async function add(item) {
    return db.insert(item);
  }

  async function getItems() {
    return db.list();
  }

  async function removeItem(id) {
    return db.remove(id);
  }

  async function findItem(id) {
    return db.findById(id);
  }

  async function updateItem(item) {
    return db.update(item);
  }
}
