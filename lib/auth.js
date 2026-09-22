import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.JWT_SECRET || "my-super-secret-key";
const secret = new TextEncoder().encode(secretKey);

export async function createToken(user) {
  return await new SignJWT({
    email: user.email,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(secret);
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}