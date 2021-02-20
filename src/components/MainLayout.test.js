import { render } from "@testing-library/react";
import MainLayout from "./MainLayout";

import Table from "./Table";

jest.mock("./Table.jsx", () => {
    let spy = jest.fn(()=>{});
    let MockTable = (...args) => {
        spy(...args);
        return <div className="Table">Hello World</div>;
    };
    MockTable.spy = spy;
    return MockTable;
});

describe("MainLayout.jsx", () => {
    let container;

    beforeEach(() => {
        Table.spy.mockClear();
        ({ container } = render(<MainLayout rowSize={123} />));

    });

    it("renders the table ", () => {
        expect(container.querySelector(".Table")).toBeInTheDocument();
    });

    it("passes rowSize to the table ", () => {
        expect(Table.spy).toBeCalledWith({rowSize: 123}, {})
    });
});