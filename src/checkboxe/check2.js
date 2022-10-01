import React from 'react'
import { useState } from 'react'

export default function CheckBox2() {
    const data2 =
    {
        "navigationResults": [
            {
                "moduleName": "Dashboard",
                "module_id": "1",
                "collapse": "false",
                "moduleUrl": "/",
                "pages": [
                    {
                        "pageName": "Dashboard",
                        "pageID": "1",
                        "pageURL": "/",
                        "page_id": "1",
                        "permission": ["create", "view", "update", "delete"]
                    }
                ]
            },
            {
                "moduleName": "Staff",
                "module_id": "2",
                "collapse": "true",
                "moduleUrl": "/staff",
                "pages": [
                    {
                        "pageName": "Staff",
                        "pageID": "2",
                        "pageURL": "/staff",
                        "page_id": "2",
                        "permission": ["create", "view", "update", "delete"]
                    },
                    {
                        "pageName": "Speakers",
                        "pageID": "2",
                        "pageURL": "/speakers",
                        "page_id": "2",
                        "permission": ["create", "view", "update", "delete"]
                    }
                ]
            },
            {
                "moduleName": "Courses",
                "module_id": "3",
                "collapse": "true",
                "moduleUrl": "/courses",
                "pages": [
                    {
                        "pageName": "Courses",
                        "pageID": "3",
                        "pageURL": "/courses",
                        "page_id": "3",
                        "permission": ["create", "view", "update", "delete"]
                    },
                    {
                        "pageName": "Course Batch",
                        "pageID": "3",
                        "pageURL": "/courseBatch",
                        "page_id": "3",
                        "permission": ["create", "view", "update", "delete"]
                    },
                    {
                        "pageName": "My Courses",
                        "pageID": "3",
                        "pageURL": "/myCourses",
                        "page_id": "3",
                        "permission": ["create", "view", "update", "delete"]
                    },
                    {
                        "pageName": "Course Category",
                        "pageID": "3",
                        "pageURL": "/courseCategory",
                        "page_id": "3",
                        "permission": ["create", "view", "update", "delete"]
                    },
                    {
                        "pageName": "Lectures",
                        "pageID": "3",
                        "pageURL": "/lectures",
                        "page_id": "3",
                        "permission": ["create", "view", "update", "delete"]
                    },
                    {
                        "pageName": "Assignments",
                        "pageID": "3",
                        "pageURL": "/assignments",
                        "page_id": "3",
                        "permission": ["create", "view", "update", "delete"]
                    },
                    {
                        "pageName": "Quiz",
                        "pageID": "3",
                        "pageURL": "/quiz",
                        "page_id": "3",
                        "permission": ["create", "view", "update", "delete"]
                    }
                ]
            },
            {
                "moduleName": "Students",
                "module_id": "4",
                "collapse": "true",
                "moduleUrl": "/students",
                "pages": [
                    {
                        "pageName": "Students",
                        "pageID": "4",
                        "pageURL": "/students",
                        "page_id": "4",
                        "permission": ["create", "view", "update", "delete"]
                    },
                    {
                        "pageName": "Attandance",
                        "pageID": "4",
                        "pageURL": "/attandance",
                        "page_id": "4",
                        "permission": ["create", "view", "update", "delete"]
                    }
                ]
            },
            {
                "moduleName": "Enrollment Approval",
                "module_id": "5",
                "collapse": "false",
                "moduleUrl": "/enrollmentApproval",
                "pages": [
                    {
                        "pageName": "Enrollment Approval",
                        "pageID": "5",
                        "pageURL": "/enrollmentApproval",
                        "page_id": "5",
                        "permission": ["create", "view", "update", "delete"]
                    }
                ]
            },
            {
                "moduleName": "Success Stories",
                "module_id": "6",
                "collapse": "false",
                "moduleUrl": "/successStories",
                "pages": [
                    {
                        "pageName": "Success Stories",
                        "pageID": "6",
                        "pageURL": "/successStories",
                        "page_id": "6",
                        "permission": ["create", "view", "update", "delete"]
                    }
                ]
            },
            {
                "moduleName": "Events",
                "module_id": "7",
                "collapse": "false",
                "moduleUrl": "/events",
                "pages": [
                    {
                        "pageName": "Events",
                        "pageID": "7",
                        "pageURL": "/events",
                        "page_id": "7",
                        "permission": ["create", "view", "update", "delete"]
                    }
                ]
            },
            {
                "moduleName": "Contact",
                "module_id": "8",
                "collapse": "false",
                "moduleUrl": "/contact",
                "pages": [
                    {
                        "pageName": "Contact",
                        "pageID": "8",
                        "pageURL": "/contact",
                        "page_id": "8",
                        "permission": ["create", "view", "update", "delete"]
                    }
                ]
            },
            {
                "moduleName": "FAQs",
                "module_id": "9",
                "collapse": "false",
                "moduleUrl": "/faqs",
                "pages": [
                    {
                        "pageName": "FAQs",
                        "pageID": "9",
                        "pageURL": "/faqs",
                        "page_id": "9",
                        "permission": ["create", "view", "update", "delete"]
                    }
                ]
            },
            {
                "moduleName": "Profile",
                "module_id": "10",
                "collapse": "false",
                "moduleUrl": "/profile/id",
                "pages": [
                    {
                        "pageName": "Profile",
                        "pageID": "10",
                        "pageURL": "/profile/id",
                        "page_id": "10",
                        "permission": ["create", "view", "update", "delete"]
                    }
                ]
            },
            {
                "moduleName": "settings",
                "module_id": "11",
                "collapse": "true",
                "moduleUrl": "/settings",
                "pages": [
                    {
                        "pageName": "User Groups",
                        "pageID": "11",
                        "pageURL": "/user-groups",
                        "page_id": "11",
                        "permission": ["create", "view", "update", "delete"]
                    },
                    {
                        "pageName": "Api Permission",
                        "pageID": "11",
                        "pageURL": "/api-permissions",
                        "page_id": "11",
                        "permission": ["create", "view", "update", "delete"]
                    },
                    {
                        "pageName": "All Organization",
                        "pageID": "11",
                        "pageURL": "/allOrganization",
                        "page_id": "11",
                        "permission": ["create", "view", "update", "delete"]
                    }
                ]
            }

        ]

    }

    const [data, setData] = useState([])
    const handleChange = (e, item2, innerItems, perm) => {
        if (e.target.checked) {
            // console.log('checked ho gya')

            if (data[item2.module_id]) {
                const num = data[item2.module_id].pages.findIndex((item) => {
                    return (item?.pageName === innerItems?.pageName)
                })

                if (num >= 0) {
                    console.log('num', num, data[item2.module_id].pages[num])
                    data[item2.module_id].pages[num].permission.push(perm)
                } else {
                    const pageObj = {
                        pageName: innerItems.pageName,
                        permission: [perm]
                    }
                    data[item2.module_id].pages.push(pageObj)
                }
            }
            else {
                const obj = {
                    id: item2.module_id,
                    moduleName: item2.moduleName,
                    moduleUrl: item2.moduleUrl,
                    module_id: item2.module_id,
                    collapse: item2.collapse,
                    pages: [
                        {
                            pageName: innerItems.pageName,
                            permission: [perm]
                        },
                    ]
                }
                data[item2.module_id] = obj
            }
        }
        else {
            const num = data[item2.module_id].pages.findIndex((item) => {
                return (item.pageName === innerItems.pageName)
            })
            console.log('number', num)
            const val = data[item2.module_id].pages[num].permission.filter((pItem) => {
                if (pItem !== perm) {
                    return pItem
                }
            })
            if (val.length > 0) {
                data[item2.module_id].pages[num].permission = val
            } else {
                delete data[item2.module_id].pages[num]
            }

        }
        console.log(data.filter(item => item != null))

    }
    return (
        <div>
            <h1>CheckBox2</h1>
            {
                Object.values(data2).map((item) => {
                    return (
                        <>
                            {/* {console.log('item',item)} */}
                            {
                                item.map((item2) => {
                                    return (
                                        <>
                                            <h3>{item2.moduleName}</h3>
                                            {/* {console.log('item2',item2)} */}

                                            {
                                                Object.values(item2.pages).map((innerItems) => {
                                                    return (
                                                        <div>
                                                            <p>{innerItems.pageName}</p>

                                                            {/* {console.log('inner',innerItems)} */}

                                                            <span>
                                                                {
                                                                    innerItems.permission.map((perm) => {
                                                                        return (
                                                                            <>
                                                                                <span>{perm}</span>
                                                                                {
                                                                                    perm !== "create" || perm !== "update" || perm !== "delete" || perm !== "read" ?
                                                                                        <input type="checkbox" name="" id="" onClick={(e) => handleChange(e, item2, innerItems, perm)} checked={data2[item2?.module_id]?.pages[item2?.module_id]?.permission[perm]} />
                                                                                        :
                                                                                        ''
                                                                                }

                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </>
                                    )
                                })
                            }

                        </>
                    )
                })
            }

        </div>
    )
}