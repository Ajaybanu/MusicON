import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'; // Correct the import
import CredentialsProvider from 'next-auth/providers/credentials'; // Correct the import

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your name"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "enter your password"
                }
            },
            authorize: async (credentials) => {
                // Replace this with actual user lookup logic
                const users = [
                    { id: "32", name: "ajay", password: "program" }
                ];
                
                const user = users.find(u => u.name === credentials.username && u.password === credentials.password);

                if (user) {
                    return Promise.resolve(user);
                } else {
                    return Promise.resolve(null);
                }
            }
        })
    ],
};
