import makeDb from './shoppingCartDb';
import makeShoppingCart from './shoppingCart';

describe('shopping cart', () => {
  let cart;

  beforeEach(() => {
    const db = makeDb();
    cart = makeShoppingCart({ db });
  })

  it('adds an item', async () => {
    const item = { id: '1111', name: 'Item1', price: 30 };
    await cart.add(item);
    // Okay to use two methods in one test. Test what library consumers expect.
    expect(await cart.getItems()).toContainEqual(item);
  });

  // Q. add하고 list로 테스트하면 결국 위의 테스트와 같은데?
  // list는 따로 테스트 안 해도 될 것 같다. 테스트를 위해 쓰지도 않을
  // initialize 함수를 추가할 필요는 없다.
  xit('lists items', async () => {
  });

  it('finds an item given id', async () => {
    const item = { id: '1111', name: 'Item1', price: 30 };
    await cart.add(item);

    expect(await cart.findItem(item.id)).toEqual(item);
  });

  it('removes a item given id', async () => {
    const item = { id: '1111', name: 'Item1', price: 30 };
    await cart.add(item);
    await cart.removeItem(item.id);

    expect(cart.getItems()).not.toContainEqual(item);
  });

  it('updates an item given id', async () => {
    const item = { id: '1111', name: 'Item1', price: 30 };
    await cart.add(item);
    await cart.updateItem({
      id: item.id,
      price: 40,
    });

    const updatedItem = { ...item, ...{ price: 40 } };
    expect(await cart.getItems()).toContainEqual(updatedItem);
  });
});
