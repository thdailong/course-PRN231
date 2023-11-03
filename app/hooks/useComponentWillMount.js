import { useEffect, useState } from 'react'

export default function useComponentWillMount(callback) {
  const [mounted, setMounted] = useState(false)

  if (!mounted) callback()

  useEffect(() => {
    setMounted(true)
  }, [])
}
