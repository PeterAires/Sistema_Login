import { NextResponse } from "next/server"

export const config = {
  matcher: '/((?!_next/static|_next/imagem/favicon.ico).*)'
}

export function middleware() {
  return NextResponse.next()
}