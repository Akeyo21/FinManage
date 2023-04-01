import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Typography  from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import { ICON_HEIGHT, ICON_STYLE, ICON_WIDTH } from '@/utils/constants'
const inter = Inter({ subsets: ['latin'] })

export default function Home({isMobile}:any) {
  const [openDrawer, setOpenDrawer] = useState(!!isMobile)
  const handleOpenDrawer =()=>{
    setOpenDrawer(true)
  }

  const handleDrawerClose =()=>{
    setOpenDrawer(false)
  }
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
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon  style={ICON_STYLE}/>
        </IconButton>
                Test
      </Drawer>
    </>





  )
}
