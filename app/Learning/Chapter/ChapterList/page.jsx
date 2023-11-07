"use client"
import { Box } from '@mui/material';
import ChapterFeature from '../ChapterFeature/page';

export default function ChapterList({ chapterData, dataChapter }) {

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            {
                dataChapter.length ? dataChapter.map((item, idx) => (
                    <ChapterFeature key={item.id} item={item} no={idx} chapterid={item.id}/>
                )) : "The course does not exist yet"
            }
        </Box>

    )
}
