import React from 'react'
import * as xlsx from 'xlsx/xlsx.mjs';
export default function XlsxFile() {
    const [excelFile, setExcelFile] = React.useState([]);
    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                console.log(json);
                setExcelFile(...excelFile, json);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }
    console.log("sami", excelFile)
    return (
        <div>xlsxFile

            <form>
                <label htmlFor="upload">Upload File</label>
                <input
                    type="file"
                    name="upload"
                    id="upload"
                    onChange={readUploadFile}
                />
            </form>
            <div>{
                excelFile.map((item, index) => {
                    return (
                        <div key={index}>
                                <div key={index}>{item.Commodity}</div>
                                <div key={index}>{item["Fee Amount"]}</div>
                                <div key={index}>{item["Fee Rate"]}</div>
                                <div key={index}>{item["Filled Quantity"]}</div>
                                <div key={index}>{item["Quantity"]}</div>
                                </div>
                    )
                })

            }</div>
        </div>
    )
}
