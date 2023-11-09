// rfec
import { Avatar, Box, Button, Card, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function FmProduct({ item }) {

  const [isHover, setIshover] = useState(false)

  const router = useRouter()

  // handle hover of img box
  const handleMouseEnter = () => {
    setIshover(true)
  }

  // handle hover of img box
  const handleMouseLeave = () => {
    setIshover(false)
  }

  return (
    <Card
      sx={{
        width: '381px',
        height: '500px',
        boxShadow: "10",
        cursor: "pointer",
        padding: "12px 12px",
      }}
      onClick={() => router.push(`/DetailPage/${item.id}`)}
    >
      <Box
        sx={
          {
            height: "200px",
            width: "100%",
            overflow: "hidden"
          }
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          sx={
            {
              height: '100%',
              transform: isHover ? "scale(1.2)" : "scale(1)",
              transition: "all 0.2s"
            }
          }
          image='https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png'
          title="green iguana"
        />
      </Box>
      <CardContent sx={{ p: 0 }}>
        <Typography marginBottom='20px' variant="h6" component="div" sx={{ fontWeight: "600", color: "#6941C6" }}>
          {
            item?.name.length > 20 ?
              item?.name.slice(0, 20) + '...' :
              item?.name
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ height: "100px" }}>
          {
            item?.description.length > 150 ?
              item?.description.slice(0, 200) + "..." :
              item?.description
          }
        </Typography>
      </CardContent>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 1 }}
        alignItems='center'
      >
        <Rating name="read-only" value={2} readOnly />
        <Typography variant="body2" color="text.secondary">(122)</Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ sm: 2, md: 1 }}
        alignItems="center"
        justifyContent='space-between'
        marginTop='50px'
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ sm: 2, md: 1 }}
          alignItems="center"
        >
          <Avatar alt="Remy Sharp" src='https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png' />
          <Stack
            direction={{ xs: "colum", sm: "column" }}
            spacing={{ sm: 2, md: 1 }}
            alignItems="flex-start"
            sx={{ maxWidth: '300px' }}
          >
            <Typography variant='subtitle2' sx={{ fontWeight: "600" }}>Author</Typography>
            <Typography variant='body2'>Name</Typography>
          </Stack>
        </Stack>

        <Button variant="contained" size='small' sx={{ backgroundColor: "#7F56D9", '&:hover': { backgroundColor: '#7f56d9' }, }}>Try Now</Button>
      </Stack>
    </Card>

  )
}

export default FmProduct