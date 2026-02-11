export default function handler(req, res) {
  // Set proper JSON content type
  res.setHeader("Content-Type", "application/json");

  // Return the matrix homeserver JSON
  res.status(200).json({
    "m.homeserver": {
      "base_url": "https://matrix.ben.place"
    }
  });
}
