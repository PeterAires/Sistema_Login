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

export default function SignUpForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sistema Login</CardTitle>
        <CardDescription>Preencha os campos abaixo para criar conta.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className=" grid w-full items-center gap-4">
            <div className=" flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" name="name" required></Input>
            </div>
            <div className=" flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required></Input>
            </div>
            <div className=" flex flex-col space-y-1.5">
              <Label htmlFor="email" className="">Senha</Label>
              <Input id="password" name="password" type="password" required></Input>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Criar Conta</Button>
        <Link href='/portal/login' className={buttonVariants({variant: 'link'})}>Já tenho conta</Link>
      </CardFooter>
    </Card>
  );
}
