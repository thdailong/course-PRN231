import { show } from '@/app/redux/reducers/snackbar'
import { getAllChapterByCourseID } from '@/app/rest_client/authClient'
import { createChapter, createDocument } from '@/app/rest_client/teacherClient'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  List,
  TextField,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import ListOfDocs from '@/app/teacher/ListOfDocs'

const CreateChapter = ({ course, setCourse }) => {
  const [chapters, setChapters] = useState([])
  const [chapterName, setChapterName] = useState('')
  const [doc, setDoc] = useState({
    Url: '',
    Name: '',
  })
  const [openDocDialog, setOpenDocDialog] = useState(false)
  const [chooseChapter, setChooseChapter] = useState(null)
  const dispatch = useDispatch()

  const onGetChapters = async () => {
    try {
      const res = await getAllChapterByCourseID(course?.id)
      setChapters(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const onAddChapter = async () => {
    try {
      const res = await createChapter({
        name: chapterName,
        courseId: course?.id,
      })
      onGetChapters()
      setChapterName('')
      dispatch(
        show({ message: 'Create chapter successfully', severity: 'success' })
      )
    } catch (error) {
      console.log(error)
    }
  }

  const onBack = () => {
    setCourse(null)
  }

  const onAddDoc = (chapterId) => {
    setDoc({
      Url: '',
      Name: '',
    })
    setOpenDocDialog(true)
    setChooseChapter(chapterId)
  }

  const onCloseDocDialog = () => {
    setOpenDocDialog(false)
  }

  const onAddDocToChapter = async () => {
    try {
      const res = await createDocument({
        Name: doc.Name,
        Url: doc.Url,
        chapterId: chooseChapter,
      })
      onGetChapters()
      onCloseDocDialog()
      dispatch(
        show({ message: 'Create chapter successfully', severity: 'success' })
      )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (course) {
      onGetChapters()
    }
  }, [course])
  return (
    <Box>
      <Button
        onClick={onBack}
        sx={{
          bgcolor: 'primary.main',
          color: '#FFF',
          '&:hover': {
            bgcolor: 'rgb(25 118 210 / 60%)',
          },
        }}
      >
        BACK
      </Button>
      <Typography fontSize={20} fontWeight={700}>
        <Typography fontSize={16} fontWeight={500} component={'span'}>
          Create Chapter for course{' '}
        </Typography>
        {course?.name}
      </Typography>

      <Box display={'flex'} gap={2} mt={2} alignItems={'center'}>
        <TextField
          value={chapterName}
          onChange={(e) => setChapterName(e.target.value)}
          sx={{
            py: '8px !important',
          }}
          size="small"
        />
        <Button
          onClick={onAddChapter}
          sx={{
            color: '#FFF',
            backgroundColor: 'green',
          }}
        >
          ADD
        </Button>
      </Box>
      <Divider></Divider>
      <List>
        {chapters.map((chapter) => (
          <Box
            key={chapter.id}
            sx={{
              bgcolor: '#FFF',
              borderRadius: '12px',
              padding: '20px',
              color: '#000',
              boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.2)',
              my: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography fontWeight={600} fontSize={16}>
                {chapter.name}
              </Typography>
              <IconButton
                sx={{
                  backgroundColor: 'primary.main',
                  color: '#FFF',
                }}
                onClick={() => onAddDoc(chapter.id)}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <ListOfDocs chapter={chapter} />
          </Box>
        ))}
      </List>
      <Dialog open={openDocDialog} onClose={onCloseDocDialog}>
        <DialogTitle>Add Document</DialogTitle>
        <DialogContent>
          <TextField
            value={doc.Url}
            onChange={(e) => setDoc({ ...doc, Url: e.target.value })}
            name="Url"
            label="Url"
            fullWidth
            sx={{
              mt: 1,
              mb: 2,
            }}
          />
          <TextField
            value={doc.Name}
            onChange={(e) => setDoc({ ...doc, Name: e.target.value })}
            name="Name"
            label="Name"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDoc({ ...doc, Url: '', Name: '' })}>
            Cancel
          </Button>
          <Button onClick={onAddDocToChapter}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default CreateChapter
