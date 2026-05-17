export default async function handler(req, res) {

    if (req.method !== "POST") {
      return res.status(405).json({
        error: "Method not allowed"
      });
    }
  
    const { email, password } = req.body;
  
    console.log(email, password);
  
    if (
      email === "admin@test.com" &&
      password === "123456"
    ) {
      return res.json({
        success: true,
        message: "Login successful"
      });
    }
    return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
}