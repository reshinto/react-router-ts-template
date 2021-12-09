import { renderHook, act } from "@testing-library/react-hooks";
import useNavigateHook from "../index";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const defaultProps = {
  page: undefined,
};

describe("useCustomMethods", () => {
  it("should call handleClick with -1 prop", () => {
    const { result } = renderHook(() => useNavigateHook({ ...defaultProps }));

    act(() => {
      result.current.handleClick();
    });

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  it("should call handleClick with /test prop", () => {
    const props = { page: "/test" };
    const { result } = renderHook(() =>
      useNavigateHook({ ...defaultProps, ...props }),
    );

    act(() => {
      result.current.handleClick();
    });

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/test");
  });
});
