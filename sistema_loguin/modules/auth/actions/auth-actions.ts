import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { use } from "react";

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
    console.log("sucesso!");
  } catch (e) {
    console.log(e);
    console.log("error");
  }

  redirect("/portal/login");
}

async function Loguin(formData: FormData) {
  "use server";
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user?.email) {
    //da pra usar optimistic update para atualizar a tela
    console.log("Usuario não existe!");
    redirect("/portal/cadastro");
  }
  const isMath = await bcrypt.compare(password, user?.password);

  if (!isMath) {
    console.log('senha ou email invalido')
    redirect("/portal/login")
  }

  // se o usuario e a senha forem válidos
  // o todo é criar a sessão com JWT e ai redireciona pro Portal
  console.log('loguin Efetuado')
  redirect("/portal");
}

const AuthActions = {
  CreateAccount,
  Loguin
};

export default AuthActions;
