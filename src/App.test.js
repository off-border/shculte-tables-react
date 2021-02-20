import { render } from "@testing-library/react";
import App from "./App";

describe("App.js", () => {
    test("renders MainLayout", () => {
        const { container } = render(<App />);
        expect(container.querySelector(".MainLayout")).toBeInTheDocument();
    });
});
