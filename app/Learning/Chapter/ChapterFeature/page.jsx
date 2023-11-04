"use client"
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box, Collapse, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import DocumentPage from '../../DocumentPage/Pages/page';

export default function ChapterFeature({ item }) {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if (item.id) {
            setOpen(!open);
        }
    };

    return (
        <Box mb='5px'>
            <ListItemButton onClick={handleClick} sx={{ backgroundColor: "#f7f8fa", borderBottom: "1px solid #dedfe0", height: "80px" }}>
                <ListItemIcon>
                    {item.id}.
                </ListItemIcon>
                <ListItemText primary={item.Name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {
                    item.Documents.length > 0 && item.Documents.map((item, idx) => (
                        <DocumentPage key={idx} item={item} />
                    ))
                }
            </Collapse>
        </Box>

    )
}
