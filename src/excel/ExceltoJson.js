import React from 'react'
import { CSVLink } from 'react-csv';
const dat = [
    {
        "_id": "61b2ceef07739ffb62dcd157",
        "index": 0,
        "guid": "73eeaa82-1bfb-4f07-9a14-e1c714f0e325",
        "isActive": false,
        "balance": "$3,591.61",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "eyeColor": "brown",
        "name": "Villarreal Perry",
        "gender": "male",
        "company": "GYNK",
        "email": "villarrealperry@gynk.com",
        "phone": "+1 (827) 522-3506",
        "address": "554 Liberty Avenue, Vowinckel, New Jersey, 7836",
        "about": "Amet ipsum laborum sunt id excepteur qui voluptate fugiat id. Sunt in officia consectetur nostrud enim irure irure do in. Sunt cupidatat esse esse incididunt dolor ipsum aute dolore sit ex exercitation. Ad laboris pariatur qui exercitation proident labore nisi amet.\r\n"
    },
    {
        "_id": "61b2ceef97e1ad0acd5055e9",
        "index": 1,
        "guid": "dbb799db-efed-4c23-8f61-641083e8cc60",
        "isActive": false,
        "balance": "$3,109.20",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "blue",
        "name": "Amy Hendricks",
        "gender": "female",
        "company": "COFINE",
        "email": "amyhendricks@cofine.com",
        "phone": "+1 (801) 406-2129",
        "address": "926 Kensington Street, Enoree, New York, 1660",
        "about": "Laboris velit eu sint enim cupidatat enim adipisicing qui sunt ex occaecat. Cupidatat elit culpa do sint sunt ad magna ea magna labore sunt eiusmod Lorem excepteur. Voluptate mollit qui esse et excepteur irure ullamco veniam eu officia sunt. Consectetur incididunt non voluptate enim fugiat elit. Aliquip ea ea excepteur magna in cillum magna in. Nulla pariatur deserunt aute mollit. Ea ullamco commodo pariatur culpa excepteur anim.\r\n"
    },
    {
        "_id": "61b2ceef056f6dfe7bc84373",
        "index": 2,
        "guid": "00c90ecc-747a-47db-b44c-e08ed39b291f",
        "isActive": false,
        "balance": "$2,252.65",
        "picture": "http://placehold.it/32x32",
        "age": 26,
        "eyeColor": "brown",
        "name": "Regina Cote",
        "gender": "female",
        "company": "COMVEX",
        "email": "reginacote@comvex.com",
        "phone": "+1 (894) 509-2560",
        "address": "776 Huntington Street, Maybell, Ohio, 7111",
        "about": "Tempor nostrud laboris aute officia. Aliquip labore occaecat ex aute adipisicing. Nisi sunt reprehenderit et amet occaecat aute pariatur commodo fugiat ut occaecat dolor dolore. Commodo culpa tempor labore mollit velit consectetur deserunt ullamco deserunt mollit incididunt quis. Veniam eu qui ipsum et aute eiusmod magna reprehenderit. Anim id qui fugiat do enim veniam proident anim duis. Lorem magna in officia voluptate laborum nisi nisi.\r\n"
    },
    {
        "_id": "61b2ceef240ee5d9b621c791",
        "index": 3,
        "guid": "e8c7579d-4a65-4b50-b232-a4be35b37037",
        "isActive": false,
        "balance": "$3,184.15",
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "eyeColor": "brown",
        "name": "Washington Mcdaniel",
        "gender": "male",
        "company": "RONBERT",
        "email": "washingtonmcdaniel@ronbert.com",
        "phone": "+1 (945) 503-3927",
        "address": "245 Will Place, Glenshaw, Mississippi, 6183",
        "about": "Nisi tempor nisi eu ullamco esse ex ipsum qui nisi mollit. Mollit esse id id commodo aliquip nostrud commodo excepteur esse nostrud Lorem amet cillum id. Eiusmod labore id nostrud sunt occaecat in occaecat quis proident sint et id occaecat occaecat. Sunt nulla eiusmod commodo reprehenderit aliqua commodo eiusmod consequat proident sunt.\r\n"
    },
    {
        "_id": "61b2ceef0074297ad8f75f30",
        "index": 4,
        "guid": "d6490432-b65e-48df-a094-b4cacf220c06",
        "isActive": false,
        "balance": "$2,054.48",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "blue",
        "name": "Jewel Witt",
        "gender": "female",
        "company": "KEEG",
        "email": "jewelwitt@keeg.com",
        "phone": "+1 (907) 534-2375",
        "address": "612 Albany Avenue, Fairmount, Florida, 1296",
        "about": "Occaecat elit sunt sint non tempor incididunt aliquip pariatur tempor mollit anim ad amet Lorem. Est enim reprehenderit officia sint. Magna velit elit culpa do cupidatat sit elit.\r\n"
    },

]

export default function ExceltoJson() {
    const fileName = "users-detail";
    const [userData, setUserData] = React.useState(dat);
    const [loading, setLoading] = React.useState(false);

    const headers = [
        { label: "Id", key: "id" },
        { label: "index", key: "index" },
        { label: "guid", key: "guid" },
        { label: "balance", key: "balance" },
        { label: "picture", key: "picture" },
        { label: "age", key: "age" },
        { label: "eyeColor", key: "eyeColor" },
        { label: "name", key: "name" }
    ];
    return (
        <div>ExceltoJson
            <button
                variant="contained"
                color="primary"
                className='export-btn'
            >
                <CSVLink
                    headers={headers}
                    data={userData}
                    filename={fileName}
                    style={{ "textDecoration": "none", "color": "#fff" }}
                >
                    {loading ? 'Loading csv...' : 'Export Data'}
                </CSVLink>
            </button>


            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>index</th>
                        <th>guid</th>
                        <th>balance</th>
                        <th>picture</th>
                        <th>age</th>
                        <th>eyeColor</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user, index) => (
                        <tr key={index}>
                            <td>{user._id}</td>
                            <td>{user.index}</td>
                            <td>{user.guid}</td>
                            <td>{user.balance}</td>
                            <td>{user.picture}</td>
                            <td>{user.age}</td>
                            <td>{user.eyeColor}</td>

                            <td>{user.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
