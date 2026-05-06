"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

/**
 * Мягкий spotlight-эффект, следующий за курсором.
 * Добавляется один раз в layout.
 */
export function SpotlightCursor() {
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  const springX = useSpring(mouseX, { stiffness: 60, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 30 })

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 opacity-0 transition-opacity duration-500 md:opacity-100"
      aria-hidden="true"
      style={{
        background: `radial-gradient(600px circle at var(--x) var(--y), rgba(120, 90, 255, 0.06), transparent 60%)`,
        // @ts-expect-error CSS custom properties
        "--x": springX,
        "--y": springY,
      }}
    />
  )
}
