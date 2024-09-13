import AuthService from "@/modules/auth/services/auth_service"

export default function Logout() {
  AuthService.destroySession
  return null
}