import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl

    // 1️⃣ Statik dosyaları ve API rotalarını koru
    if (
        pathname.startsWith('/_next') ||
        pathname.includes('/api/') ||
        pathname.includes('.')
    ) {
        return NextResponse.next()
    }

    // 2️⃣ Auth kontrolü: /dashboard'a erişim için token gerekli
    const token = request.cookies.get('appSession')?.value
    if (!token && pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // 3️⃣ Dil kontrolü: i18next çerezinden locale al
    const locale = request.cookies.get('i18next')?.value || 'tr'
    const response = NextResponse.next()
    response.headers.set('x-current-locale', locale)

    return response
}

// 4️⃣ Middleware hangi yollar için çalışacak
export const config = {
    matcher: [
        // Tüm sayfalarda çalış, ama statik dosyalar, api ve harita sayfaları hariç
        '/((?!api|_next/static|_next/image|favicon.ico|maps).*)',
    ],
}
