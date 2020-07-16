import Greeter from '../index';

let greeter: Greeter;

describe('Greeter module', () => {
  beforeEach(() => {
    greeter = new Greeter();
  })

  it('should export a class', () => {
    expect(greeter).toBeInstanceOf(Greeter);
  })
})