import { getAllDocsByChapterID } from '@/app/rest_client/authClient'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'

const ListOfDocs = ({ documents }) => {
  const [docs, setDocs] = useState([])

  const RenderURI = (uri) => {
    if (!uri) return
    try {
      const object = JSON.parse(uri)
      return (
        <>
          <Box ml={3} mb={0}>
            <Typography>URL: {object?.url}</Typography>
            <Typography>description: {object?.description}</Typography>
          </Box>
        </>
      )
    } catch (err) {
      console.log(err)
      return <Typography ml={3}>URL: {uri}</Typography>
    }
  }

  return (
    <>
      <List>
        {documents.map((item) => (
          <ListItem
            key={item.id}
            sx={{
              gap: '2px',
              justifyContent: 'flex-start',
              height: '60px',
              bgcolor: 'rgba(0, 0, 0, 0.2)',
              mb: 2,
            }}
          >
            <ListItemText sx={{ textAlign: 'start' }} primary={item?.name} />
            {RenderURI(item?.resourceUri)}
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ListOfDocs
