import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const CosmicModal = DialogPrimitive.Root

const CosmicModalTrigger = DialogPrimitive.Trigger

const CosmicModalPortal = DialogPrimitive.Portal

const CosmicModalClose = DialogPrimitive.Close

const CosmicModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-aurora data-[state=open]:animate-scale-in data-[state=closed]:animate-fade-out",
      className
    )}
    {...props}
  />
))
CosmicModalOverlay.displayName = DialogPrimitive.Overlay.displayName

const CosmicModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <CosmicModalPortal>
    <CosmicModalOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-white/95 backdrop-blur-glass border border-gray-200 p-6 shadow-2xl duration-300 data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out rounded-glass",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </CosmicModalPortal>
))
CosmicModalContent.displayName = DialogPrimitive.Content.displayName

const CosmicModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
CosmicModalHeader.displayName = "CosmicModalHeader"

const CosmicModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
CosmicModalFooter.displayName = "CosmicModalFooter"

const CosmicModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight text-gray-900",
      className
    )}
    {...props}
  />
))
CosmicModalTitle.displayName = DialogPrimitive.Title.displayName

const CosmicModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-600", className)}
    {...props}
  />
))
CosmicModalDescription.displayName = DialogPrimitive.Description.displayName

export {
  CosmicModal,
  CosmicModalPortal,
  CosmicModalOverlay,
  CosmicModalClose,
  CosmicModalTrigger,
  CosmicModalContent,
  CosmicModalHeader,
  CosmicModalFooter,
  CosmicModalTitle,
  CosmicModalDescription,
}