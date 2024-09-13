import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

async function CreateAccount(formData: FormData) {
  "use server";
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const hashPassword = await bcrypt.hash(password, 10); //10(dificulta a quebra da criptografia)

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });
    alert("Sucesso!");
  } catch (e) {
    console.log(e);
    console.log('error');
    
  }

  redirect("/portal/login");
}

const AuthActions = {
  CreateAccount
}

export default AuthActions