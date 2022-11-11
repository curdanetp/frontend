import { Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
const {bg}=require ('../config');

export default function Tasklist() {

  const [tasks, setTasks] = useState([])
  const navigate=useNavigate();
  const loadTasks = async () => {
    try {
      const response = await fetch(`${bg.bkend_path}/tasks`);
      const data = await response.json();
      console.log(data);
      setTasks(data)  
    } catch (error) {
      console.log(error)
    }    
  }

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${bg.bkend_path}/tasks/${id}`, {
        method: "DELETE",
      })
      console.log(res.status, res.statusText);
      setTasks(tasks.filter(task=>task.id!==id));  
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(() => {
    loadTasks()
  }, [])
  return (
    <>
      <h1>Task List</h1>
      {
        tasks.map(task => (
          <Card
            key={task.id}
            style={{
              marginBottom: ".7rem",
              backgroundColor: '#4e676e',
            }}>
            <CardContent style={{
              display: "flex",
              justifyContent: "space-between",
            }}>
              <div style={{ color: "white" }}>
                <Typography>
                  {task.title}
                </Typography>
                <Typography>
                  {task.description}
                </Typography>
              </div>
              <div>
                <Button
                  variant='contained'
                  color='inherit'
                  onClick={() => navigate(`/tasks/${task.id}/edit`)}
                >
                  Edit
                </Button>
                <Button
                  variant='contained'
                  color='warning'
                  onClick={() => handleDelete(task.id)}
                  style={{ marginLeft: ".5rem" }}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>

        ))

      }
    </>
  )
}
