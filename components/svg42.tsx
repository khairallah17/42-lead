"use client"
import * as React from "react"
import { motion } from "framer-motion"

const Logo42 = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 137.6 96.6"
    height={64}
    {...props}
  >
    <motion.path
        d="M229.2 443.9h50.7v25.4h25.3v-45.9h-50.6l50.6-50.7h-25.3l-50.7 50.7zM316.1 398.1l25.3-25.4h-25.3z"
        style={{
            fill: "#fff",
        }}
        transform="translate(-229.2 -372.7)"
    />
    <motion.path
      d="m341.4 398.1-25.3 25.3v25.3h25.3v-25.3l25.4-25.3v-25.4h-25.4zM366.8 423.4l-25.4 25.3h25.4z"
      style={{
        fill: "#fff",
      }}
      transform="translate(-229.2 -372.7)"
    />
  </svg>
)
export default Logo42