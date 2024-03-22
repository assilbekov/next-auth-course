"use server"
 
export const login = async (email: string, password: string) => {
  console.log("Logging in with email", email);
  /* const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  return response.json(); */
}