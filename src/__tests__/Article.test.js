import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

function Article() {
  return (
    <div>
      <p>Please pass this test</p>
    </div>
  );
}

export default Article;

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  screen.debug();

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
