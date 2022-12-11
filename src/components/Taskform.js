import { Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
const {bg}=require ('../config');

export default function Taskform() {
  const [task, setTask] = useState({
    title: '',
    description: '',
  })
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true)
      if (editing) {
        const response = await fetch(`${bg.bkend_path}/tasks/${params.id}`, {
          method: 'PUT',
          body: JSON.stringify(task),
          headers: { "Content-Type": "application/json" },
        })
        const data = await response.json()
        console.log(data)
      } else {
        const response = await fetch(`${bg.bkend_path}/tasks`, {
          method: 'POST',
          body: JSON.stringify(task),
          headers: { "Content-Type": "application/json" }
        })
        const data = await response.json()
        console.log(data)
      }
    } catch (error) {
      console.log(error.msg)
    }
    setLoading(false)
    navigate('/')

  }
  const handleChange = e => setTask({ ...task, [e.target.name]: e.target.value })

  const loadTask = async (id) => {
    const res = await fetch(`${bg.bkend_path}/tasks/${id}`)
    const data = await res.json()
    console.log("trae para editar",data)
    setTask({ title: data.title, description: data.description })
    setEditing(true)
  }
  useEffect(() => {
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id])

  return (
    <Grid container direction='column' alignItems='center' justifyContent='center'>
      <Grid item xs={3}>
        <Card sx={{ mt: 5 }} style={{
          backgroundColor: '#4e676e',
          padding: '1rem'
        }}>
          <Typography variant='5' textAlign='center' color='white'>
            {editing ? "Edit Task" : "Create Task" }
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant='filled'
                label='Write your title'
                sx={{
                  display: 'block',
                  margin: '.5rem 0'
                }}
                name="title"
                value={task.title}
                onChange={handleChange}
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}

              />
              <TextField
                variant='filled'
                label='Write your description'
                multiline
                rows={4}
                sx={{
                  display: 'block',
                  margin: '.5rem 0'
                }}
                name="description"
                value={task.description}
                onChange={handleChange}
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <Button variant='contained' color='primary' disabledbackground='#737373' type='submit'
                disabled={!task.title || !task.description || loading} >
                {loading ? <CircularProgress
                  color='inherit'
                  size={20}
                /> : "Save" }
              </Button>
            </form>
          </CardContent>

        </Card>
      </Grid>
    </Grid>
  )
}
