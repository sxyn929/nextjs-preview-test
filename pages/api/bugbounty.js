export default function handler(req, res) {
  res.status(200).json({
    status: "vulnerability_test_successful",
    message: "If you can read this, the third-party fork deployment executed successfully.",
    timestamp: new Date().toISOString()
  });
}
