import React, { memo, useEffect, useState } from 'react'
const pages = [
    {
        id: 0,
        pageName: 'Dashboard',
        permission: false
    },
    {
        id: 1,
        pageName: 'User Management',
        permission: false
    },
    {
        id: 2,
        pageName: 'Subscription Management',
        permission: false
    },
    {
        id: 3,
        pageName: 'Refund Management',
        permission: false
    },
    {
        id: 4,
        pageName: 'Credentials Management',
        permission: false
    },
    {
        id: 5,
        pageName: 'Sovren Management',
        permission: false
    },
    {
        id: 6,
        pageName: 'Coupon Management',
        permission: false
    },
    {
        id: 7,
        pageName: 'Cover Management',
        permission: false
    },
    {
        id: 8,
        pageName: 'Count Management',
        permission: false
    },
    {
        id: 9,
        pageName: 'Words To Avoid',
        permission: false
    },
    {
        id: 10,
        pageName: 'Default Files',
        permission: false
    },
    {
        id: 11,
        pageName: 'Video Links',
        permission: false
    },
    {
        id: 12,
        pageName: 'Top Soft Skills',
        permission: false
    },
    {
        id: 13,
        pageName: 'Email Templates',
        permission: false
    },
    {
        id: 14,
        pageName: 'Admin Management',
        permission: false
    }
];

const pages1 = [
    {
        id: 0,
        pageName: 'Dashboard',
        permission: true
    },
    {
        id: 1,
        pageName: 'User Management',
        permission: true
    },
    {
        id: 2,
        pageName: 'Subscription Management',
        permission: true
    },
    {
        id: 3,
        pageName: 'Refund Management',
        permission: true
    },
    {
        id: 4,
        pageName: 'Credentials Management',
        permission: true
    },
    {
        id: 5,
        pageName: 'Sovren Management',
        permission: true
    },
    {
        id: 6,
        pageName: 'Coupon Management',
        permission: true
    }
];

const result = pages?.filter(item => {
    return !pages1?.some(item2 => {
        return item?.id === item2?.id;
    });
});
const arr3 = result.concat(pages1);

export const Check = () => {
    const [refData, setRefData] = React.useState(pages1);
    const [checkStatus, setCheckStatus] = useState(arr3.sort((a, b) => a.id - b.id));
    const ctaCheckHandleState = (page) => {
        const newState = checkStatus.map(item => {
            if (item.id === page.id) {
                return {
                    id: item.id,
                    pageName: item.pageName,
                    permission: !item.permission
                };
            }

            return {
                id: item.id,
                pageName: item.pageName,
                permission: item.permission
            };
        });
        console.log("sami", newState.sort((a, b) => a.id - b.id));
        setCheckStatus(newState.sort((a, b) => a.id - b.id));
        if (checkStatus[page.id].id === page.id && !checkStatus[page.id].permission) {
            setRefData([...refData, newState[checkStatus[page.id].id]]);
            console.log('push is working');
        } else if (checkStatus[page.id].id === page.id && checkStatus[page.id].permission) {
            const newSt = refData.filter((student, i) => {
                if (student.id !== page.id) {
                    return student;
                }
            });
            setRefData(newSt);
            console.log('pop is working');
        }
    };
    const newRef = refData.sort((a, b) => a.id - b.id)
    console.log('ref', newRef);
    return (
        <div>
            <h2>CheckBox</h2>
            {checkStatus?.map(page => {
                return (

                    <center>
                        <br />
                        <label>{page.pageName}</label>
                        <input
                            type="checkbox"
                            checked={checkStatus[page?.id]?.permission}																		// defaultChecked={!!page?.permission}
                            value={!!page?.permission}
                            onChange={() => ctaCheckHandleState(page)}
                        />
                    </center>


                );
            })}
        </div>
    )
}
