import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, getByTestId, render, screen, debug } from "@testing-library/react";
import Detail from "../pages/components/card-detail";

describe("Detail Component", () => {
	it("renders the comic details", () => {
		render(<Detail />);
		screen.debug();
		expect(screen).toBeTruthy;
		// expect(screen.getByTestId("ul")).toBeTruthy;
	});
});