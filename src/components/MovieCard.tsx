import { Box, Card, Container, Image } from "@mantine/core";

function MovieCard() {
  return (
    <Card shadow='sm' style={{ maxWidth: 300, position: "relative", minHeight: 150 }}>
      <Box style={{ position: "absolute", top: 10, right: 10 }}>
        <Image src='./bookmark.png' alt='bookmark button' width={20} height={20} />
      </Box>
      <Container size='xs'>
        <Box style={{ marginTop: "auto", backgroundColor: "rgba(0, 0, 0, 0.7)", padding: 8 }}>
          <p style={{ color: "#fff", margin: 0 }}>Årtal</p>
          <p style={{ color: "#fff", margin: 0 }}>åldersgräns</p>
        </Box>
      </Container>
    </Card>
  );
}

export default MovieCard;
