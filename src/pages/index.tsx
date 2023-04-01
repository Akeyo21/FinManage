import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Typography  from '@mui/material/Typography'

const inter = Inter({ subsets: ['latin'] })

export default function Home(test:any) {
    const label = { inputProps: { "aria-label": "Switch demo" } };
    return (
        <>

            <Typography variant="h1">TEST HEADING</Typography>
        </>
    )
}
