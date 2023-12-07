// import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Footer from "../components/Footer/Footer";
import { render, screen } from "../utils/test-utils";

describe("Footer", () => {
  it("should render the footer", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    expect(screen.getByText("Start")).toBeInTheDocument();
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Bookmarked")).toBeInTheDocument();
    expect(screen.getByText("NETFLIX 2.0")).toBeInTheDocument();
    expect(screen.getByText("Github Links")).toBeInTheDocument();
    expect(screen.getByText("Moa")).toBeInTheDocument();
    expect(screen.getByText("Leon")).toBeInTheDocument();
    expect(screen.getByText("Edvin")).toBeInTheDocument();
    expect(screen.getByText("Ellen")).toBeInTheDocument();
    expect(screen.getByText("Simon")).toBeInTheDocument();
  });

//   it("should work to click on the links", () => {
//     render(
//       <Router>
//         <Footer />
//       </Router>
//     );

//     const user = userEvent.setup();
//     const startLink = screen.getByText("Start");
//     user.click(startLink);
//     expect(screen.getByText("Content of the Start page")).toBeInTheDocument();
//   });
});
