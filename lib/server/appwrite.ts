"use server";

import { cookies } from "next/headers";
import { Client, Account, ID } from "node-appwrite";

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "";
const project = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "";
const api_key = process.env.NEXT_PUBLIC_APPWRITE_API_KEY || "";

export async function createSessionClient() {
  const client = new Client().setEndpoint(endpoint).setProject(project);

  const session = (await cookies()).get("user_session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(endpoint)
    .setProject(project)
    .setKey(api_key);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}

export async function SignUp(name: string, email: string, password: string) {
  try {
    const { account } = await createAdminClient();

    await account.create(ID.unique(), email, password, name);

    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("user_session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
  } catch (err: any) {
    console.error("Signup failed:", err.message || err);
    throw err;
  }
}

export async function Login(email: string, password: string) {
  const { account } = await createAdminClient();

  try {
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("user_session", session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(session.expire),
      path: "/",
    });
  } catch (err: any) {
    console.error("Signup failed:", err.message || err);
    throw err;
  }
}
