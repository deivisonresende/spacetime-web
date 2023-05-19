import { NextRequest, NextResponse } from 'next/server'

import { api } from '@/lib/api'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const code = searchParams.get('code')

  const { data } = await api.post('/register/gh', { code })

  const token = data.token as String

  const redirectURL = new URL('/', request.url)

  // 1 month
  const cookieExpiresInSeconds = 60 * 60 * 24 * 30

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
    },
  })
}
