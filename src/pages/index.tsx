import { useState } from 'react'

import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import PaidIcon from '@mui/icons-material/Paid';

import { ICON_STYLE } from '@/utils/constants'


export default function Home({isMobile}:any) {
  const [openDrawer, setOpenDrawer] = useState(!!isMobile)
  const handleOpenDrawer =()=>{
    setOpenDrawer(true)
  }

  const handleDrawerClose =()=>{
    setOpenDrawer(false)
  }

  const navList = [
    {
      title: "Bills",
      icon: <RequestQuoteIcon/>
    },
    {
      title: "Due Bills",
      icon: <HourglassFullIcon/>
    },
    {
      title: "Paid Bills",
      icon: <PaidIcon/>
    }
  ]
  return (
    <>
      <IconButton
        aria-label="open drawer"
        onClick={handleOpenDrawer}
        edge="start"
        sx={{
          ml: 2,
          color: "text.primary",
          ...(openDrawer && { display: 'none' }) }}>
        <MenuIcon
          style={ICON_STYLE}
        />
      </IconButton>

      <Drawer
        anchor="left"
        variant="persistent"
        onClose={handleDrawerClose}
        open={openDrawer}>
        <IconButton
          onClick={handleDrawerClose}
          sx={{color: "text.primary"}}>
          <ChevronLeftIcon  style={ICON_STYLE}/>
        </IconButton>
        <List>
          {navList.map(({title, icon}, index)=>(
            <ListItem disablePadding key={index}>
              <ListItemButton >
                <ListItemIcon sx={{color: "text.primary"}}>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={title}/>
              </ListItemButton>
            </ListItem>
          ))}

        </List>
      </Drawer>
    </>





  )
}
