import { NextResponse } from 'next/server'
import { leadSchema } from '@/lib/validations'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate input
    const validation = leadSchema.safeParse(body)
    
    if (!validation.success) {
      return NextResponse.json({
        success: false,
        errors: validation.error.flatten().fieldErrors
      }, { status: 400 })
    }

    // Process lead (v1: just log to console)
    console.log('NEW LEAD RECEIVED:', validation.data)

    return NextResponse.json({ 
      success: true,
      message: 'Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.' 
    })
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Terjadi kesalahan internal server.' 
    }, { status: 500 })
  }
}
