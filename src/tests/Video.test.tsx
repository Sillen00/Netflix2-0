import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Video from "../components/Video/Video";
import { render, screen } from "../utils/test-utils";

describe("Tests for Video component", () => {
  it("should render the poster image and title when the component mounts", () => {
    render(<Video />);
    expect(screen.getByAltText("Inception poster")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("should render the video and title after 3 seconds", async () => {
    render(<Video />);
    setTimeout(() => {
      expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
      expect(screen.getByRole("video")).toBeInTheDocument();
    }, 3000);
  });

  it("should unmute the video when the mute button is clicked", async () => {
    render(<Video />);
    setTimeout(async () => {
      expect(screen.getByRole("video")).toHaveAttribute("muted");
      const unmuteButton = screen.getByLabelText("unmute");
      expect(unmuteButton).toBeInTheDocument();
      await userEvent.click(unmuteButton);
      expect(screen.getByRole("video")).not.toHaveAttribute("muted");
    }, 3000);
  });

  it("should mute the video when the mute button is clicked", async () => {
    render(<Video />);
    setTimeout(async () => {
      // Videon är mutad från början.
      // För att testa att den blir mutad igen klickar testet först på unmute-knappen.
      expect(screen.getByRole("video")).toHaveAttribute("muted");
      const unmuteButton = screen.getByLabelText("unmute");
      expect(unmuteButton).toBeInTheDocument();
      await userEvent.click(unmuteButton);
      expect(screen.getByRole("video")).not.toHaveAttribute("muted");

      // Klicka på mute-knappen
      expect(screen.getByLabelText("mute")).toBeInTheDocument();
      await userEvent.click(screen.getByLabelText("mute"));
      expect(screen.getByRole("video")).toHaveAttribute("muted");
    }, 3000);
  });
});
