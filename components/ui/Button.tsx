import * as React from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary-500/50 hover:scale-105',
        secondary: 'glass text-foreground hover:glass-strong',
        outline: 'border border-white/20 [data-theme=\'light\']:border-slate-300 text-foreground hover:bg-white/5 [data-theme=\'light\']:hover:bg-slate-900/5',
        ghost: 'text-foreground hover:bg-white/5 [data-theme=\'light\']:hover:bg-slate-900/5',
        link: 'text-primary-400 [data-theme=\'light\']:text-primary-500 underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-6 py-3 text-base',
        sm: 'px-4 py-2 text-sm',
        lg: 'px-8 py-4 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

