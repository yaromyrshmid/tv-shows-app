import reducer, { setError, clearError } from "./error";

describe("Error reducer", () => {
  test("Should return the initial state", () => {
    expect(reducer(undefined, { type: "default" })).toEqual({
      message: "",
    });
  });

  test("Should set error message", () => {
    const testErrorMessage = "Test error";

    expect(reducer(undefined, setError(testErrorMessage))).toEqual({
      message: testErrorMessage,
    });
  });

  test("Should clear error message", () => {
    expect(reducer(undefined, clearError())).toEqual({
      message: "",
    });
  });
});
