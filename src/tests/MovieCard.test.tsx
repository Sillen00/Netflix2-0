import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MovieCard from "../components/MovieCard/MovieCard";

interface MovieCardTestProps {
    thumbnail: string; // Make it non-optional
    year: string;
    age: string;
}

it("true to be true", () => {
    expect(true).toBe(true);
});

describe("MovieCard", () => {
    it("should render the movie title", () => {
        const movieProps: MovieCardTestProps = {
            thumbnail: 'https://example.com/image.jpg', 
            year: '2022',
            age: 'PG-13',
        };
        
        render(<MovieCard {...movieProps} />);
        
        expect(screen.getByText('2022')).toBeInTheDocument();
        expect(screen.getByText('PG-13')).toBeInTheDocument();
    });
});