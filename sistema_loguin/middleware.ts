import AuthService from "@/modules/auth/services/auth_service";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/((?!_next/static|_next/imagem/favicon.ico).*)",
};

const publicRoutes = ["/", "/portal/cadastro", "/portal/login"];

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname

  if (publicRoutes.includes(pathname)){ // se a minha rota atual incluir alguma destas rotas publicas
    return NextResponse.next()
  }

  const session = await AuthService.isSessionValid();
  if (!session) {
    return NextResponse.redirect(new URL("/portal/login", req.url));
  }

  return NextResponse.next();
}

//trava as paginas, ja no arquivo, o que esta dentro do '' é o que não é pra ser travado, exemplo, arquivo de imagem, css
