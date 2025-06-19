// components/ProtectedRoute.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookie from 'js-cookie'



export default function ProtectedRoute({ children }) {
  const router = useRouter()
  const [hasToken, setHasToken] = useState(null)

  useEffect(() => {
    const token = Cookie.get('Roamio')
    if (!token) {
      // no token → immediately redirect
      router.replace('/Login')
      setHasToken(false)
    } else {
      // valid token → render children
      setHasToken(true)
    }
  }, [router])

  // while we haven’t decided, or if no token, render nothing
  if (hasToken === null && hasToken === false) {
    return null
  }

  // safe to show protected content
  return <div className="pt-20">{children}</div>
}
