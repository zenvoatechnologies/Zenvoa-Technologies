"use client"

import * as React from "react"
import qs from "query-string"
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border-2 border-white/20 bg-transparent px-3 py-2 text-sm text-white ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
