"use client";

import { useEffect } from "react";
import ResetButton from "@/components/ResetButton";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <h1>error.tsx (login)</h1>
      <ResetButton reset={reset} />
    </>
  )
}
