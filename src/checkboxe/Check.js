import React, { memo, useState } from 'react'

const page = [
    {
        id: 0,
        pageName: "home",
        permission: false
    },
    {
        id: 1,
        pageName: "about",
        permission: false
    },
    {
        id: 2,
        pageName: "zone",
        permission: false
    },
    {
        id: 3,
        pageName: "zone",
        permission: false
    },
    {
        id: 4,
        pageName: "zone",
        permission: false
    },
]
let ref = []
export const Check = memo(() => {

    const [checkState, setCheckState] = useState(page)
    const [refData, setRefData] = useState([])
    const handleChange = (id, pageName) => {
        const newArr = checkState.map((item, i) => {
            if (i === id) {
                return {
                    id: item.id,
                    pageName: item.pageName,
                    permission: !item.permission
                }
            }
            else {
                return {
                    id: item.id,
                    pageName: item.pageName,
                    permission: item.permission
                }
            }
        }
        )
        setCheckState(newArr)
        // setRefData(newArr[checkState[id].id])
        if (checkState[id].id === id && !checkState[id].permission) {
            ref.push(newArr[checkState[id].id])
            console.log("push is working")
        }
        else if (checkState[id].id === id && checkState[id].permission) {
            ref.pop()
            console.log("pop is working")
        }



    }
    // console.log(checkState)
    // console.log(refData)
    console.log("sa", ref)

    return (
        <div>
            <h2>CheckBox</h2>
            {
                page.map(({ pageName, id }, index) => {
                    return (
                        <div>
                            <label>{pageName}</label>
                            <input
                                type="checkbox"
                                name={pageName}
                                value={pageName}
                                defaultChecked={!checkState[id]}
                                onChange={() => handleChange(id, pageName)}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
})
