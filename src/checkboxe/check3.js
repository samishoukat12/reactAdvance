import React from 'react'
import { useState } from 'react'

export default function CheckBox3() {
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
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
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
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
                    },
                    {
                        "pageName": "Speakers",
                        "pageID": "2",
                        "pageURL": "/speakers",
                        "page_id": "2",
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
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
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
                    },
                    {
                        "pageName": "Course Batch",
                        "pageID": "3",
                        "pageURL": "/courseBatch",
                        "page_id": "3",
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
                    },
                    {
                        "pageName": "My Courses",
                        "pageID": "3",
                        "pageURL": "/myCourses",
                        "page_id": "3",
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
                    },
                    {
                        "pageName": "Course Category",
                        "pageID": "3",
                        "pageURL": "/courseCategory",
                        "page_id": "3",
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
                    },
                    {
                        "pageName": "Lectures",
                        "pageID": "3",
                        "pageURL": "/lectures",
                        "page_id": "3",
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
                    },
                    {
                        "pageName": "Assignments",
                        "pageID": "3",
                        "pageURL": "/assignments",
                        "page_id": "3",
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
                    },
                    {
                        "pageName": "Quiz",
                        "pageID": "3",
                        "pageURL": "/quiz",
                        "page_id": "3",
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
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
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
                    },
                    {
                        "pageName": "Attandance",
                        "pageID": "4",
                        "pageURL": "/attandance",
                        "page_id": "4",
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
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
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
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
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
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
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
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
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
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
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
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
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
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
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
                    },
                    {
                        "pageName": "Api Permission",
                        "pageID": "11",
                        "pageURL": "/api-permissions",
                        "page_id": "11",
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
                    },
                    {
                        "pageName": "All Organization",
                        "pageID": "11",
                        "pageURL": "/allOrganization",
                        "page_id": "11",
                        "createPermission": false,
                        "readPermission": false,
                        "updatePermission": false,
                        "deletePermission": false,
                    }
                ]
            }

        ]

    }

    const [data, setData] = useState([])
    const handleChange = (e, item2, innerItems, perm) => {
        if (e.target.checked) {
            if (perm === 'Create') {
                innerItems.createPermission = true
            } else if (perm === 'Read') {
                innerItems.readPermission = true
            } else if (perm === 'Update') {
                innerItems.updatePermission = true
            } else if (perm === 'Delete') {
                innerItems.deletePermission = true
            }

            if (data[item2.module_id]) {

                const num = data[item2.module_id].pages.findIndex((item) => {
                    return (item.pageName === innerItems.pageName)
                })

                if (num >= 0) {

                    if (perm === 'Create') {
                        data[item2.module_id].pages[num].createPermission = true
                    } else if (perm === 'Read') {
                        data[item2.module_id].pages[num].readPermission = true
                    } else if (perm === 'Update') {
                        data[item2.module_id].pages[num].updatePermission = true
                    } else if (perm === 'Delete') {
                        data[item2.module_id].pages[num].deletePermission = true
                    }

                } else {

                    const pageObj = {
                        pageName: innerItems.pageName,
                        createPermission: innerItems.createPermission,
                        readPermission: innerItems.readPermission,
                        updatePermission: innerItems.updatePermission,
                        deletePermission: innerItems.deletePermission
                        // permission:[perm]
                    }
                    data[item2.module_id].pages.push(pageObj)
                }

            }
            else {

                const obj = {
                    moduleName: item2.moduleName,
                    id: item2.module_id,
                    moduleUrl: item2.moduleUrl,
                    collapse: item2.collapse,
                    module_id: item2.module_id,
                    pages: [
                        {
                            pageName: innerItems.pageName,
                            createPermission: innerItems.createPermission,
                            readPermission: innerItems.readPermission,
                            updatePermission: innerItems.updatePermission,
                            deletePermission: innerItems.deletePermission
                            // permission:[perm]
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

            if (perm === 'Create') {
                data[item2.module_id].pages[num].createPermission = false
            } else if (perm === 'Read') {
                data[item2.module_id].pages[num].readPermission = false
            } else if (perm === 'Update') {
                data[item2.module_id].pages[num].updatePermission = false
            } else if (perm === 'Delete') {
                data[item2.module_id].pages[num].deletePermission = false
            }

        }
        console.log(data.filter(item => item !== null))

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
                                                            {/* <p>{innerItems.createPermission}</p> */}

                                                            <div className='permissions'>
                                                                <span>Create</span>
                                                                <input type="checkbox" name="" id="" onClick={(e) => handleChange(e, item2, innerItems, 'Create')} />
                                                                <span>Read</span>
                                                                <input type="checkbox" name="" id="" onClick={(e) => handleChange(e, item2, innerItems, 'Read')} />
                                                                <span>Update</span>
                                                                <input type="checkbox" name="" id="" onClick={(e) => handleChange(e, item2, innerItems, 'Update')} />
                                                                <span>Delete</span>
                                                                <input type="checkbox" name="" id="" onClick={(e) => handleChange(e, item2, innerItems, 'Delete')} />

                                                            </div>


                                                            {/* {console.log('inner',innerItems)} */}

                                                            {/* <span>
                      {
                        innerItems.permission.map((perm)=>{
                          return(
                            <>
                            <span>{perm}</span>
                            <input type="checkbox" name="" id="" onClick={(e)=>handleChange(e,item2,innerItems,perm)} />
                            </>
                            )
                          })
                        }
                        </span> */}
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