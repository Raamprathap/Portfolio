"use client"

import type React from "react"
import { useState } from "react"
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "motion/react"

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number
    name: string
    icon: string | React.ReactNode
  }[]
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0) // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig)
  // translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig)
  const handleMouseMove = (event: any) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const halfWidth = rect.width / 2
    const offsetX = event.clientX - rect.left
    x.set(offsetX - halfWidth)
  }

  return (
    <>
      {items.map((item, _idx) => (
        <div
          className="group relative -mr-4"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-base font-bold text-white">{item.name}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            onMouseMove={handleMouseMove}
            className="relative !m-0 h-14 w-14 rounded-full border-2 border-white !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105 flex items-center justify-center bg-yellow-200"
          >
            {typeof item.icon === "string" ? (
              <img
                height={56}
                width={56}
                src={item.icon || "/placeholder.svg"}
                alt={item.name}
                className="h-full w-full rounded-full object-cover object-top"
              />
            ) : (
              <div className="text-2xl text-gray-600">{item.icon}</div>
            )}
          </div>
        </div>
      ))}
    </>
  )
}
