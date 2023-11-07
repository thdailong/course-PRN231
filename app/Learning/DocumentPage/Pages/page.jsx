"use client"
import { List, ListItemButton, ListItemText } from '@mui/material'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function DocumentPage({ item,no,chapterid }) {

  const [active, setActive] = useState(false)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleRender = (vl) => {
    router.push(`${pathname}?documentID=${vl}&chapterid=${chapterid}`)
  }

  let documentID = searchParams.get('documentID')

  return (

    <List dense component="div" disablePadding onClick={() => handleRender(item.id)} sx={{ backgroundColor:item.id === documentID?"rgba(240,81,35,.2)":''}}>
      <ListItemButton sx={{  gap: "2px", justifyContent: "flex-start", height: "60px" }}>
        <ListItemText sx={{textAlign:"start", pl:"90px"}} primary={item.name} />
      </ListItemButton>
    </List>

  )
}
