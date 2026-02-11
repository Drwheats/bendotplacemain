export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Content-Disposition", "inline"); // Force browser to render JSON
  res.status(200).json({
    "m.homeserver": {
      "base_url": "https://matrix.ben.place"
    }
  });
}
