import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/base';

export default function Student() {
    //super(this.props);
    const [name,setName]=React.useState("");
    const[address,setAddress]=React.useState("");
    const handleClick=(e)=>{
        e.preventDefault();
        const student={name,address};
        console.log("btn clicked",student);
        fetch("http://localhost:8080/student/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("New STudent added");
        })
        }
    
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student Name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>
      <TextField id="filled-basic" label="Address" variant="filled" value={address} onChange={(e)=>setAddress(e.target.value)}/>
      <TextField id="standard-basic" label="Standard" variant="standard" />



      <Button color="secondary" onClick={handleClick}>Secondary</Button>
 

    </Box>
  );
}
