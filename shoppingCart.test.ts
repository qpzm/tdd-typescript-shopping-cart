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

  it.todo('lists items');
});
