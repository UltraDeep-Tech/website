import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { status: 'error', message: 'All fields are required' },
        { status: 400 }
      )
    }

    // Aquí iría la lógica de envío de email
    // Por ahora solo retornamos éxito
    // En producción, usarías un servicio como SendGrid, Resend, etc.

    console.log('Contact form submission:', { name, email, subject, message })

    return NextResponse.json({
      status: 'success',
      message: 'Message sent successfully',
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { status: 'error', message: 'Failed to send message' },
      { status: 500 }
    )
  }
}





