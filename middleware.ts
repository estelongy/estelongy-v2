import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Kullanıcı oturumunu kontrol et
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Korunan sayfalar (giriş gerektiren)
  const protectedPaths = ['/panel', '/klinik', '/satici', '/admin']
  const isProtected = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  // Giriş yapılmamış ve korunan sayfaya erişmeye çalışıyorsa
  if (isProtected && !user) {
    const url = request.nextUrl.clone()
    url.pathname = '/giris'
    return NextResponse.redirect(url)
  }

  // Giriş yapmış ve giriş sayfasına erişmeye çalışıyorsa
  if (user && request.nextUrl.pathname === '/giris') {
    const url = request.nextUrl.clone()
    url.pathname = '/panel'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

// Hangi sayfalarda çalışacağı
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}