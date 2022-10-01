import React, { useState } from 'react'



export default function CheckBox() {
    const [data, setData] = useState([])
    const [ID, setId] = useState([])

    const pages1 = [
        {
            moduleName: 'Dashboard',
            id: 0,
            module_id: 1,
            collapse: false,
            moduleUrl: '/',
            pages: [
                {
                    id: 0,
                    pageName: 'Dashboard',
                    page_id: 1,
                    pageID: 1,
                    pageUrl: '/',
                    permission: ['create', 'update', 'delete', 'view']
                }
            ]
        },
        {
            moduleName: 'staff',
            id: 1,
            module_id: 2,
            collapse: true,
            moduleUrl: '/staff',
            pages: [
                {
                    id: 1,
                    pageName: 'Staff',
                    page_id: 2,
                    pageID: 2,
                    pageUrl: '/staff',
                    permission: ['create', 'update', 'delete', 'view']
                },
                {
                    id: 1.1,
                    pageName: 'Speakers',
                    page_id: 2,
                    pageID: 2,
                    pageUrl: '/speakers',
                    permission: ['create', 'update', 'delete', 'view']
                }
            ]
        },
        {
            moduleName: 'Courses',
            id: 2,
            module_id: 3,
            collapse: true,
            moduleUrl: '/courses',
            pages: [
                {
                    id: 2,
                    pageName: 'Courses',
                    page_id: 3,
                    pageID: 3,
                    pageUrl: '/courses',
                    permission: ['create', 'update', 'delete', 'view']
                },
                {
                    id: 2.1,
                    pageName: 'Course Categories',
                    page_id: 3,
                    pageID: 3,
                    pageUrl: '/courseCategory',
                    permission: ['create', 'update', 'delete', 'view']
                },
                {
                    id: 2.2,
                    pageName: "My Courses",
                    page_id: 3,
                    pageID: 3,
                    pageUrl: '/myCourses',
                    permission: ['create', 'update', 'delete', 'view']
                },
                {
                    id: 2.3,
                    pageName: 'Course Batch',
                    page_id: 3,
                    pageID: 3,
                    pageUrl: '/courseBatch',
                    permission: ['create', 'update', 'delete', 'view']
                },
                {
                    id: 2.4,
                    pageName: 'Lectures',
                    page_id: 3,
                    pageID: 3,
                    pageUrl: '/lectures',
                    permission: ['create', 'update', 'delete', 'view']
                },
                {
                    id: 2.5,
                    pageName: 'Assignments',
                    page_id: 3,
                    pageID: 3,
                    pageUrl: '/assignments',
                    permission: ['create', 'update', 'delete', 'view']
                },
                {
                    id: 2.6,
                    pageName: 'Quizzes',
                    page_id: 3,
                    pageID: 3,
                    pageUrl: '/quiz',
                    permission: ['create', 'update', 'delete', 'view']
                }
            ]
        },
        {
            moduleName: 'Students',
            id: 3,
            module_id: 4,
            collapse: true,
            moduleUrl: '/students',
            pages: [
                {
                    id: 3,
                    pageName: 'Students',
                    page_id: 4,
                    pageID: 4,
                    pageUrl: '/students',
                    permission: ['create', 'update', 'delete', 'view']
                },
                {
                    id: 3.1,
                    pageName: 'Attandance',
                    page_id: 4,
                    pageID: 4,
                    pageUrl: '/attandance',
                    permission: ['create', 'update', 'delete', 'view']
                }
            ]
        },
        {
            moduleName: 'Enrollment Approval',
            id: 4,
            module_id: 5,
            collapse: false,
            moduleUrl: '/enrollmentApproval',
            pages: [
                {
                    id: 4,
                    pageName: 'Enrollment Approval',
                    page_id: 5,
                    pageID: 5,
                    pageUrl: '/enrollmentApproval',
                    permission: ['create', 'update', 'delete', 'view']
                }
            ]
        },
        {
            moduleName: 'Success Stories',
            id: 5,
            module_id: 6,
            collapse: false,
            moduleUrl: '/successStories',
            pages: [
                {
                    id: 5,
                    pageName: 'Success Stories',
                    page_id: 6,
                    pageID: 6,
                    pageUrl: '/successStories',
                    permission: ['create', 'update', 'delete', 'view']
                }
            ]
        },
        {
            moduleName: 'Events',
            id: 6,
            module_id: 7,
            collapse: false,
            moduleUrl: '/events',
            pages: [
                {
                    id: 6,
                    pageName: 'Events',
                    page_id: 7,
                    pageID: 7,
                    pageUrl: '/events',
                    permission: ['create', 'update', 'delete', 'view']
                }
            ]
        },
        {
            moduleName: 'Contact',
            id: 7,
            module_id: 8,
            collapse: false,
            moduleUrl: '/contact',
            pages: [
                {
                    id: 7,
                    pageName: 'Contact',
                    page_id: 8,
                    pageID: 8,
                    pageUrl: '/contact',
                    permission: ['create', 'update', 'delete', 'view']
                }
            ]
        },
        {
            moduleName: 'FAQs',
            id: 8,
            module_id: 9,
            collapse: false,
            moduleUrl: '/faqs',
            pages: [
                {
                    id: 8,
                    pageName: 'FAQs',
                    page_id: 9,
                    pageID: 9,
                    pageUrl: '/faqs',
                    permission: ['create', 'update', 'delete', 'view']
                }
            ]
        },
        {
            moduleName: 'Settings',
            id: 9,
            module_id: 10,
            collapse: true,
            moduleUrl: '/settings',
            pages: [
                {
                    id: 9,
                    pageName: 'Profile',
                    page_id: 10,
                    pageID: 10,
                    pageUrl: '/profile',
                    permission: ['create', 'update', 'delete', 'view']
                },
                {
                    id: 9.1,
                    pageName: 'All Organization',
                    page_id: 10,
                    pageID: 10,
                    pageUrl: '/allOrganization',
                    permission: ['create', 'update', 'delete', 'view']
                },
                {
                    id: 9.2,
                    pageName: 'User Groups',
                    page_id: 10,
                    pageID: 10,
                    pageUrl: '/user-groups',
                    permission: ['create', 'update', 'delete', 'view']
                },
                {
                    id: 9.3,
                    pageName: 'Api Permission',
                    page_id: 10,
                    pageID: 10,
                    pageUrl: '/api-permissions',
                    permission: ['create', 'update', 'delete', 'view']
                }
            ]
        }
    ];

    const handleChange = (e, mitem, pitem, perm) => {
        if (e.target.checked) {
            if (data[mitem.id]) {
                if (data[mitem.id][pitem.id]) {
                    if (data[mitem.id][pitem.id].permission) {
                        if (data[mitem.id][pitem.id].permission.includes(perm)) {
                            return
                        } else {
                            data[mitem.id][pitem.id].permission.push(perm)
                        }
                    } else {
                        data[mitem.id][pitem.id].permission = [perm]
                    }
                } else {
                    data[mitem.id][pitem.id] = { ...pitem, permission: [perm] }
                }
            } else {
                data[mitem.id] = [{ ...pitem, permission: [perm] } ]
                data[mitem.id].moduleName = mitem.moduleName
                data[mitem.id].id = mitem.id
                data[mitem.id].module_id = mitem.module_id
                data[mitem.id].moduleUrl = mitem.moduleUrl
                data[mitem.id].collapse = mitem.collapse
                data[mitem.id].pages =  { ...pitem, permission: [perm] }        
               }
            console.log(data.filter(item => item !== undefined).sort())
        } else {
            if (data[mitem.id]) {
                if (data[mitem.id][pitem.id]) {
                    if (data[mitem.id][pitem.id].permission) {
                        if (data[mitem.id][pitem.id].permission.includes(perm)) {
                            data[mitem.id][pitem.id].permission = data[mitem.id][pitem.id].permission.filter(item => item.id !== perm)
                        } else {
                            return
                        }
                    } else {
                        return

                    }
                } else {
                    return
                }
            } else {
                return
            }
            console.log(data)
        }
        setData([...data])
    };




    return (
        <div>
            {
                pages1.map((mitems) => {
                    return mitems.pages.map((item) => {
                        return (
                            <div key={item.id}>
                                <span>{item.id}</span>
                                <div>
                                    {
                                        item.permission.map((perm) => {

                                            return (
                                                <>
                                                    <span>{perm}</span>
                                                    <input type="checkbox" name="" id="" onClick={(e) => handleChange(e, mitems, item, perm)} />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                })
            }
        </div>
    )
}
