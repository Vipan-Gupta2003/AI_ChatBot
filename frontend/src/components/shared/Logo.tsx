import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div style={{display:'flex', marginRight:"auto",alignItems:"center",gap:"15px"}}>
      <Link to="/">
        <img src='gpt.png' alt="open-ai" width="30px" height="30px" className='image-inverted' />
      </Link>
      <Typography sx={{display:{md:"block",sm:"none",xs:"none"},mr:"auto",fontWeight:"800",textShadow:"2px 2px 20px #000"}}>
            <span style={{fontSize:"20px"}}>
                Mern
            </span>
        </Typography>-GPT
    </div>
  )
}

export default Logo
