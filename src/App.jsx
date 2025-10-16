import { Button } from "@/components/ui/button"
import { cn } from "./utils/cn"

export default function App(
  {className}
) {
  return (
    <div className={
      cn(
        "flex min-h-svh flex-col items-center justify-center",
        className
      )
    }>
      <Button>Click me</Button>
    </div>
  )
}
