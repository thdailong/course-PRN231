"use client"
import { Box } from '@mui/material';
import ChapterFeature from '../ChapterFeature/page';

export default function ChapterList({ chapterData }) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            {
                chapterData?.Chapters.length  ? chapterData.Chapters.map((item, idx) => (
                    <ChapterFeature key={idx} item={item} />
                )):"Khoa hoc khong hien hanh"
            }
        </Box>

    )
}
