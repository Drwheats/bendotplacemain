export default function handler(req, res) {
  // Matrix spec expects JSON
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    "m.homeserver": {
      "base_url": "https://matrix.ben.place"
    }
  });
}
