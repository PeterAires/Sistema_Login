import * as jose from "jose";
import { cookies } from "next/headers";
//retorna o token aberto (abrir token)
async function openSessionToken(token: string) {
  //verificar e decodificar um token jwt
  // Codifica a chave secreta usando UTF-8, para verificar o token
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
  // Verifica o token JWT e decodifica seu conteúdo usando a chave secreta
  const { payload } = await jose.jwtVerify(token, secret);
  // Retorna o conteúdo do token (payload)
  return payload;
}

async function createSessionToken(payload = {}) {
  //Resumindo, essa função cria um token JWT com um payload, define um tempo de expiração, e armazena esse token em um cookie seguro no navegador.

  const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
  const session = await new jose.SignJWT(payload) //colocar o payload dentro desse token jwt
    .setProtectedHeader({ alg: "HS256" }) //tipo do token
    .setExpirationTime("1d") //Um novo token JWT é criado com o payload, assinado usando o segredo e configurado para expirar em 1 dia.
    .sign(secret);
  const { exp, role } = await openSessionToken(session); //pegar o tempo de expiração to token

  cookies().set("session", session, {
    // armazenando o token em um cookie
    expires: (exp as number) * 1000,
    path: "/",
    httpOnly: true, //so pode ser aberto do lado do backend
  });
}

async function isSessionValid() {
  const sessionCookie = cookies().get("session");

  if (sessionCookie) {
    const { value } = sessionCookie; // ai pegou o token do cookie
    const { exp } = await openSessionToken(value); //tentamos pegar o exp do payload caso o token que pegamos do cookie seja igual ao do authSecret, se nao for, ele retorna falso e a operaçao para 
    const currentDate = new Date().getTime();

    return (exp as number) * 1000 > currentDate;
  } //se a expiração do meu token maior que a minha data atual, ou seja, ainda não inspirou

  return false;
}

function destroySession() {
  cookies().delete("session");
}

const AuthService = {
  openSessionToken,
  createSessionToken,
  isSessionValid,
  destroySession
};

export default AuthService;
