import React from "react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Detail from "../pages/components/detail";

describe("Detail Component", () => {
	it("renders the comic details", () => {
		render(<Detail />);
		// check if all components are rendered
		expect(Detail).toContainElement(<ul></ul>)
	});
});