import { useState, useEffect, useContext } from "react";
import { API_BASE_URL } from "../config";
import AuthContext from "../context/AuthContext";
import { fetchWithAuth } from "../utils/fetchWithAuth";
import "./Students.css";

function Students() {
  const { user } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [studentLastName, setStudentLastName] = useState(""); // ✅ Add last name input

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        console.log("🔍 Fetching students for user:", user);

        const url = `${API_BASE_URL}/student`;
        console.log("🚀 Fetching from:", url);

        const response = await fetchWithAuth(url);
        console.log("📌 Response status:", response.status);

        if (!response.ok) {
          const errorText = await response.text(); // Read error message
          throw new Error(`Failed to fetch students: ${errorText}`);
        }

        const data = await response.json();
        console.log("📌 Retrieved students from API:", data);

        const filteredStudents = data.filter(student => student.teacher_id === user.id);
        console.log("✅ Filtered students:", filteredStudents);

        setStudents(filteredStudents);
      } catch (error) {
        console.error("❌ Error fetching students:", error);
      }
    };

    if (user) {
      fetchStudents();
    }
  }, [user]);

  const handleDelete = async (id) => {
    try {
      console.log(`🗑 Deleting student ID: ${id}`);
      await fetchWithAuth(`${API_BASE_URL}/student/${id}`, { method: "DELETE" });

      setStudents(students.filter(student => student.id !== id));
    } catch (error) {
      console.error("❌ Error deleting student:", error);
    }
  };

  const handleAddStudent = async () => {
    if (!studentName.trim() || !studentLastName.trim()) {
      alert("Student name and last name cannot be empty");
      return;
    }

    try {
      console.log("➕ Adding new student:", { name: studentName, last_name: studentLastName, teacher_id: user.id });

      const response = await fetchWithAuth(`${API_BASE_URL}/student`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: studentName,
          last_name: studentLastName,
          teacher_id: user.id
        }),
      });

      if (!response.ok) throw new Error("Failed to add student");

      const newStudent = await response.json();
      setStudents([...students, newStudent]);
      setStudentName("");
      setStudentLastName("");
    } catch (error) {
      console.error("❌ Error adding student:", error);
    }
  };

  return (
    <div>
      <h1>Students</h1>

      {/* Add Student Form */}
      <div>
        <input
          type="text"
          placeholder="Enter student first name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter student last name" // ✅ Add last name input
          value={studentLastName}
          onChange={(e) => setStudentLastName(e.target.value)}
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>

      {/* Students List */}
      <ul>
        {students.length > 0 ? (
          students.map((student) => (
            <li key={student.id}>
              {student.name} {student.last_name} {/* ✅ Show full name */}
              <button onClick={() => handleDelete(student.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>❌ No students found for this teacher.</p>
        )}
      </ul>
    </div>
  );
}

export default Students;
