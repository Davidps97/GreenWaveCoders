import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const projectUrl = import.meta.env.VITE_PROJECT_URL;
const anonKey = import.meta.env.VITE_ANON_KEY;

function AddImage() {
  const [selectedFile, setSelectedFile] = useState(null);

  async function handleFileUpload() {
    if (!selectedFile) {
      console.log("No file selected");
      return;
    }

    const supabase = createClient(projectUrl, anonKey);
    const { data, error } = await supabase.storage
      .from("user-image")
      .upload("hola", selectedFile);

    if (data) {
      console.log("File uploaded successfully");
      // Aquí puedes hacer algo con el resultado de la carga de la imagen, si es necesario
    } else if (error) {
      console.error("Error uploading file:", error);
    }
  }

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <>
      <label htmlFor="file">Subir archivo</label>
      <br />
      <br />
      <input id="file" type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Subir</button>
    </>
  );
}

export default AddImage;
