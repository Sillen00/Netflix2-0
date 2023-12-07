import { describe, it, expect } from "vitest";
import { render, screen} from "../utils/test-utils";
import Video from "../components/Video/Video";

describe("Tests for Video component", () => {
  it("should render the poster image and title when the component mounts", () => {
    render(<Video />);
    expect(screen.getByAltText("Inception poster")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("should render the video and title after 3 seconds", async () => {
    render(<Video />);
    setTimeout(() => {
      expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
      expect(screen.getByRole("video")).toBeInTheDocument();
    }, 3000);
  })
});
