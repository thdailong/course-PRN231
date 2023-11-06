import { getAllDocsByChapterID } from '@/app/rest_client/authClient'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ListOfDocs = ({ documents }) => {
  const [docs, setDocs] = useState([])

  return (
    <>
      <List>
        {documents.map((item) => (
          <ListItem
            key={item.id}
            sx={{ gap: '2px', justifyContent: 'flex-start', height: '60px' }}
          >
            <ListItemText
              sx={{ textAlign: 'start' }}
              primary={item?.name}
              secondary={item?.resource}
            />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ListOfDocs
