"use client"
import { Box } from '@mui/material';
import Credit from '../CreditCard/page';
import { GetDataById } from './util';

export default function page({ params }) {

    const data = GetDataById(params.Payment)

    console.log(data);
    return (
        <Box sx={{ height: "100vh", width: "100%", background: "linear-gradient(90deg, rgba(86,0,202,1) 0%, rgba(141,56,255,1) 35%, rgba(168,104,255,1) 100%)", display:"flex", justifyContent:"center", alignItems:"center" }}>
            <Credit />
        </Box>
    )
}
0