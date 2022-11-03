import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate = useNavigate()
  return (
    <Box>
      <AppBar position='static' color='transparent'>
        <Container sx={{ flexGrow: 1 }}>
          <Toolbar>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
              <Link to="/" style={{textDecoration:"none", color:"#eee"}}>PERN Stack</Link>
            </Typography>
            <Button variant='contained' 
                    color='primary' 
                    onClick={() => navigate('/tasks/new')}>
              New Task
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
