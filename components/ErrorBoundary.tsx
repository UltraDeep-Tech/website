'use client'

import React, { Component, ReactNode } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import Link from 'next/link'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Aquí puedes enviar el error a un servicio de logging
    console.error('Error capturado:', error, errorInfo)
    
    // Ejemplo: Enviar a Sentry
    // Sentry.captureException(error, { contexts: { react: errorInfo } })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-md w-full glass-strong rounded-2xl p-8 text-center">
            <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Algo salió mal</h2>
            <p className="text-foreground/60 mb-6">
              Lo sentimos, ocurrió un error inesperado.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: undefined })
                  window.location.reload()
                }}
                className="flex-1 px-6 py-3 rounded-lg bg-gradient-primary text-white font-medium hover:shadow-lg hover:shadow-primary-500/50 transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Recargar página
              </button>
              <Link
                href="/"
                className="flex-1 px-6 py-3 rounded-lg glass text-foreground font-medium text-center hover:bg-white/5 transition-colors"
              >
                Ir al inicio
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}





