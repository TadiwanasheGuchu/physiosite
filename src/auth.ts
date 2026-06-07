import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;

        // Demo account — replace with a real DB lookup before going live
        if (email === "patient@sossusphysio.na" && password === "demo123") {
          return { id: "1", name: "Sarah Nakamura", email };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/portal/sign-in",
  },
  session: { strategy: "jwt" },
});
