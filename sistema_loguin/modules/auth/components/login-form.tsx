import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import AuthActions from "../actions/auth-actions";

export default function LoginForm() {
  return (
    <form action={AuthActions.Loguin}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sistema Login</CardTitle>
          <CardDescription>Faça Login para continuar.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className=" grid w-full items-center gap-4">
            <div className=" flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required></Input>
            </div>
            <div className=" flex flex-col space-y-1.5">
              <Label htmlFor="email" className="">
                Senha
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
              ></Input>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Entrar</Button>
          <Link
            href="/portal/cadastro"
            className={buttonVariants({ variant: "link" })}
          >
            Criar Conta
          </Link>
        </CardFooter>
      </Card>
    </form>
  );
}
