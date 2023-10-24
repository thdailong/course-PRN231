import { Button, Paper, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

const Sidebar = ({ options, ...props }) => {
  const router = useRouter()

  const handleButtonRoute = (path) => {
    router.push(path)
  }

  return (
    <Paper elevation={3} {...props}>
      {options &&
        options.map((item) => (
          <Button
            variant="contained"
            key={item.id}
            size="medium"
            startIcon={item.icon}
            sx={(theme) => ({
              width: '80%',
              my: theme.spacing(0.75),
              display: 'flex',
              justifyContent: 'start',
            })}
            onClick={() => handleButtonRoute(item.path)}
          >
            <Typography sx={{ color: 'white', textTransform: 'none' }}>
              {item.label}
            </Typography>
          </Button>
        ))}
    </Paper>
  )
}

export default Sidebar
