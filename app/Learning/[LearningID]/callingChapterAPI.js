const data = {
    dataCourse:[
        {
            id:1,
            CategoryID:1,
            Name:"lerning css and HTML basic",
            creatorID:2,
            Chapters:[
                {
                    id:1,
                    Name:"How to setup enviroment",
                    CourseID:1,
                    Documents:[
                        {
                            id:1,
                            Name:'Dowload the IDE',
                            ChapterId:1,
                            VideoURL:"https://www.youtube.com/embed/m5wM8Z_OR2E",
                            Content:"day la noi dung cua khoa hoc"
                        },
                        {
                            id:2,
                            Name:'Dowload the IDE',
                            ChapterId:1,
                            VideoURL:"https://www.youtube.com/embed/m5wM8Z_OR2E",
                            Content:"day la noi dung cua khoa hoc"
                        },
                        {
                            id:3,
                            Name:'Dowload the IDE',
                            ChapterId:1,
                            VideoURL:"https://www.youtube.com/embed/m5wM8Z_OR2E",
                            Content:"day la noi dung cua khoa hoc"
                        },
                    ]
                },
                {
                    id:2,
                    Name:"What you need to focus in this course",
                    CourseID:1,
                    Documents:[
                        {
                            id:1,
                            Name:'Dowload the IDE',
                            ChapterId:2,
                            VideoURL:"https://www.youtube.com/embed/m5wM8Z_OR2E",
                            Content:"day la noi dung cua khoa hoc"
                        },
                        {
                            id:2,
                            Name:'Dowload the IDE',
                            ChapterId:2,
                            VideoURL:"https://www.youtube.com/embed/m5wM8Z_OR2E",
                            Content:"day la noi dung cua khoa hoc"
                        },
                        {
                            id:3,
                            Name:'Dowload the IDE',
                            ChapterId:2,
                            VideoURL:"https://www.youtube.com/embed/m5wM8Z_OR2E",
                            Content:"day la noi dung cua khoa hoc"
                        }
                    ]
                },
                {
                    id:3,
                    Name:"starting css in part 1",
                    CourseID:1,
                    Documents:[
                        {
                            id:1,
                            Name:'Dowload the IDE',
                            ChapterId:3,
                            VideoURL:"https://www.youtube.com/embed/m5wM8Z_OR2E",
                            Content:"day la noi dung cua khoa hoc"
                        },
                        {
                            id:2,
                            Name:'Dowload the IDE',
                            ChapterId:3,
                            VideoURL:"https://www.youtube.com/embed/m5wM8Z_OR2E",
                            Content:"day la noi dung cua khoa hoc"
                        },
                        {
                            id:3,
                            Name:'Dowload the IDE',
                            ChapterId:3,
                            VideoURL:"https://www.youtube.com/embed/m5wM8Z_OR2E",
                            Content:"day la noi dung cua khoa hoc"
                        }
                    ]
                }
            ]
        },
        {
            id:2,
            CategoryID:1,
            Name:"lerning css and HTML basic",
            creatorID:2,
            Chapters:[
                {
                    id:1,
                    Name:"How to setup enviroment",
                    CourseID:2,
                    Documents:[
                        {
                            id:1,
                            Name:'Dowload the IDE',
                            ChapterId:1,
                            VideoURL:"https://www.youtube.com/embed/m5wM8Z_OR2E",
                            Content:"day la noi dung cua khoa hoc"
                        },
                        {
                            id:2,
                            Name:'Dowload the IDE',
                            ChapterId:1,
                            VideoURL:"https://www.youtube.com/embed/JKFq4SseoWU",
                            Content:"day la noi dung cua khoa hoc"
                        },
                        {
                            id:3,
                            Name:'Dowload the IDE',
                            ChapterId:1,
                            VideoURL:"https://www.youtube.com/embed/Ry_r8DCj3hw",
                            Content:"day la noi dung cua khoa hoc"
                        }
                    ]
                },
                {
                    id:2,
                    Name:"What you need to focus in this course",
                    CourseID:2,
                    Documents:[
                        {
                            id:1,
                            Name:'Dowload the IDE',
                            ChapterId:2,
                            VideoURL:"https://www.youtube.com/embed/PNtFSVU-YTI",
                            Content:"day la noi dung cua khoa hoc"
                        },
                        {
                            id:2,
                            Name:'Dowload the IDE',
                            ChapterId:2,
                            VideoURL:"https://www.youtube.com/embed/r-GSGH2RxJs",
                            Content:"day la noi dung cua khoa hoc"
                        },
                        {
                            id:3,
                            Name:'Dowload the IDE',
                            ChapterId:2,
                            VideoURL:"https://www.youtube.com/embed/kPP_TQFPfU8",
                            Content:"day la noi dung cua khoa hoc"
                        }
                    ]
                },
                {
                    id:3,
                    Name:"starting css in IDE",
                    CourseID:2,
                    Documents:[
                        {
                            id:1,
                            Name:'Dowload the IDE',
                            ChapterId:3,
                            VideoURL:"https://www.youtube.com/embed/9ah3fq5TwnQ",
                            Content:"day la noi dung cua khoa hoc"
                        },
                        {
                            id:2,
                            Name:'Dowload the IDE',
                            ChapterId:3,
                            VideoURL:"https://www.youtube.com/embed/tumNinqis4g",
                            Content:"day la noi dung cua khoa hoc"
                        },
                        {
                            id:3,
                            Name:'Dowload the IDE',
                            ChapterId:3,
                            VideoURL:"https://www.youtube.com/embed/xcc2muKNaH8",
                            Content:"day la noi dung cua khoa hoc"
                        },
                    ]
                }
            ]
        },
    ]
}

export const getCourseByID = (idParams) =>{
    return data.dataCourse.find(vl => vl.id == idParams)
}



export const getDocumentByCourse = (idParams,chapterIDParam, DocumentsID) =>{
    return getCourseByID(idParams).Chapters.find(vl => vl.id == chapterIDParam).Documents.find(vl => vl.id == DocumentsID)
}
