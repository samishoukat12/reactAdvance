import { useState } from "react";
import { Data } from "./data";
export function Students() {
  const [students, setstudents] = useState(Data);
  const [Errormessage, setError] = useState("");
  const [Name, setName] = useState("");
  const [id, setId] = useState("");
  const [RollNo, setRollNo] = useState("");
  const [stuClass, setstuClass] = useState("");
  const [Batch, setBatch] = useState("");
  const [flag, setflag] = useState(false);
  const [updatedIndex, setUpdatedIndex] = useState(0);

  // DELETE HANDLER
  const deleteHandler = (index) => {
    console.log("id", index);
    let newStudents = students.filter((student, i) => {
      if (i !== index) {
        return student;
      }
    });

    setstudents([...newStudents]);

  };

  // UPDATE HANDLER

  const UpdateHandler = (students, index) => {
    console.log("need to update", students);
    setUpdatedIndex(index);
    setName(students.name);
    setId(students.id);
    setRollNo(students.rollno);
    setstuClass(students.class);
    setBatch(students.batch);
    setflag(true);
  };
 const ctaUpdateHandler = () => {
   setError("");
   if (
     Name != "" &&
     id != "" &&
     RollNo != "" &&
     stuClass != "" &&
     Batch != ""
   ) {
     let student = {
       name: Name,
       id,
       rollno: RollNo,
       class: stuClass,
       batch: Batch,
     };
     console.log(student);
     let updateStudents = students.map((stu, index) => {
       if (updatedIndex === index) {
         return student;
       } else {
         return stu;
       }
     });
     setstudents([...updateStudents]);
     setName("");
     setId("");
     setRollNo("");
     setstuClass("");
     setBatch("");
   } else setError("parans cant be empty");
 };

  // HANDLER

  const ctaHandler = () => {
    setError("");

    if (
      Name !== "" &&
      id !== "" &&
      RollNo !== "" &&
      stuClass !== "" &&
      Batch !== ""
    ) {
      let student = {
        name: Name,
        id,
        rollno: RollNo,
        class: stuClass,
        batch: Batch,
      };
      console.log(student);
      setstudents([...students, student]);
      setName("");
      setId("");
      setRollNo("");
      setstuClass("");
      setBatch("");
    } else {
      setError("parans cant be empty");
    }
  };

  //new data add in students list

  return (
    <div>
      <h1>New Students Add</h1>
      <label For="Name">
        <input
          type="text"
          id="Name"
          value={Name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label For="id">
        <input
          type="text"
          id="id"
          value={id}
          placeholder="id"
          onChange={(e) => setId(e.target.value)}
        />
        <p>
          {Name}
        </p>
      </label>
      <label For="RollNo">
        <input
          type="text"
          id="RollNo"
          value={RollNo}
          placeholder="Roll No"
          onChange={(e) => setRollNo(e.target.value)}
        />
      </label>
      <label For="Class">
        <input
          type="text"
          id="Class"
          value={Batch}
          placeholder="batch"
          onChange={(e) => setBatch(e.target.value)}
        />
      </label>
      <label For="Batch">
        <input
          type="text"
          id="Batch"
          value={stuClass}
          placeholder="Class"
          onChange={(e) => setstuClass(e.target.value)}
        />
      </label>
      {flag ? (
        <button onClick={ctaUpdateHandler}>update</button>
      ) : (
        <button onClick={ctaHandler}>submit</button>
      )}
      <button onClick={ctaHandler}>submit</button>

      <p style={{ backgroundColor: "red" }}>{Errormessage}</p>
      <h1>List of Students</h1>
      <table>
        <tr>
          <th>index</th>
          <th>id</th>
          <th>name</th>
          <th>rollno</th>
          <th>class</th>
          <th>batch</th>
        </tr>
        {/* {
                    students.map((item) => {
                        return <  StuDentsList students={item} />
                    })
                } */}

        {students.map((students, index) => {
          return (
            <tr>
              <td>{index}</td>
              <td>{students.id}</td>
              <td>{students.name}</td>
              <td>{students.rollno}</td>
              <td>{students.batch}</td>
              <td>{students.class}</td>
              <td>
                <button onClick={() => deleteHandler(index)}>delete</button>
              </td>
              <td>
                <button onClick={() => UpdateHandler(students, index)}>
                  update
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}