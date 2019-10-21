import { double } from './double';

describe('double', ():void => {
  it ('should double the value given', ():void => {
    expect(double(2)).toBe(4);
    expect(double(12)).toBe(24);
  })
})