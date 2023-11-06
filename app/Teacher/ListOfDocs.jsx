import { getAllDocsByChapterID } from '@/app/rest_client/authClient'
import React, { useEffect, useState } from 'react'

const ListOfDocs = ({ chapter }) => {
  const [docs, setDocs] = useState([])
  const onGetDocs = async () => {
    try {
      const res = await getAllDocsByChapterID(chapter.id)
      setDocs(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onGetDocs()
  }, [])

  return <>ListOfDocs</>
}

export default ListOfDocs
