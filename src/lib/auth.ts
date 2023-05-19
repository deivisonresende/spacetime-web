import { cookies } from 'next/headers'
import decode from 'jwt-decode'

export interface User {
  sub: string
  name: string
  avatarUrl: string
}

export function getUser(): User | null {
  const token = cookies().get('token')?.value

  if (!token) return null

  return decode(token) as User
}
