import { Box, ScopedCssBaseline } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FmProduct from '../FmProduct/page'
import styles from './page.module.css'

function ListFamous({ dataProduct }) {
    return (
        <Box className={`${styles['navigation-box']} `} sx={
            {
                width: '100%',
                height: 'auto',
                display: 'flex',
                gap: '10px',
                justifyContent: 'space-between'
            }
        }>
            {
                dataProduct.length > 0 && dataProduct.map((item) => (
                    <FmProduct key={item.id} item={item} />
                )) 
            }

        </Box>
    )
}

export default ListFamous