const { mapWithCb } = require("./exercise2");
describe("mapWithCb function", () => {

  test("should call the callback for each item in the array", () => {
    const mockCallback = jest.fn();
    mapWithCb([1, 2, 3], mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(3);
    expect(mockCallback).toHaveBeenCalledWith(1);
    expect(mockCallback).toHaveBeenCalledWith(2);
    expect(mockCallback).toHaveBeenCalledWith(3);
  });

  test("should return an array with transformed items", () => {
    const mockCallback = jest.fn(item => item * 2);
    const result = mapWithCb([1, 2, 3], mockCallback);
    expect(result).toEqual([2, 4, 6]);
  });

  test("should throw an error if the first argument is not an array", () => {
    const mockCallback = jest.fn();
    expect(() => mapWithCb("not an array", mockCallback)).toThrow();
  });

  test("should throw an error if the second argument is not a function", () => {
    expect(() => mapWithCb([1, 2, 3], "not a function")).toThrow();
  });

  test("should not call the callback if the array is empty", () => {
    const mockCallback = jest.fn();
    const result = mapWithCb([], mockCallback);
    expect(mockCallback).not.toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  test("should call the callback for special values like null, undefined, etc.", () => {
    const mockCallback = jest.fn(item => item);
    const result = mapWithCb([null, undefined, 0, false], mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(null);
    expect(mockCallback).toHaveBeenCalledWith(undefined);
    expect(mockCallback).toHaveBeenCalledWith(0);
    expect(mockCallback).toHaveBeenCalledWith(false);
    expect(result).toEqual([null, undefined, 0, false]);
  });

  test("should handle large arrays efficiently", () => {
    const largeArray = Array(10000).fill(1);
    const mockCallback = jest.fn(item => item + 1);
    const result = mapWithCb(largeArray, mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(10000);
    expect(result[0]).toEqual(2);
    expect(result[9999]).toEqual(2);
  });

  test("should return an array with objects correctly transformed by the callback", () => {
    const mockCallback = jest.fn(item => ({ id: item }));
    const result = mapWithCb([1, 2, 3], mockCallback);
    expect(result).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  test("should handle non-integer numbers correctly", () => {
    const mockCallback = jest.fn(item => item * 1.5);
    const result = mapWithCb([1.5, 2.5, 3.5], mockCallback);
    expect(result).toEqual([2.25, 3.75, 5.25]);
  });
  
  test("should handle strings correctly", () => {
    const mockCallback = jest.fn(item => item.toUpperCase());
    const result = mapWithCb(["a", "b", "c"], mockCallback);
    expect(result).toEqual(["A", "B", "C"]);
  });

});
