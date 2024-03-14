import { useState } from "react";
import { GoUpload } from "react-icons/go";
import { Modal } from "@mui/material";
import { createClient } from "@supabase/supabase-js";

interface AddImageProps {
  openModal: boolean;
  handleClose: () => void;
}

const projectUrl: string = import.meta.env.VITE_PROJECT_URL;
const anonKey: string = import.meta.env.VITE_ANON_KEY;

function AddImage({ openModal, handleClose }: AddImageProps): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
 
  async function handleFileUpload(file: File): Promise<void> {
    if (!file) {
      console.log("No file selected");
      return;
    }

    const supabase = createClient(projectUrl, anonKey);
    const { data, error } = await supabase.storage
      .from("user-image")
      .upload("holaa", file);

    if (data) {
      console.log("File uploaded successfully");
      setImageUrl(URL.createObjectURL(file)); 
    } else if (error) {
      console.error("Error uploading file:", error);
    }
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      handleFileUpload(file);
    }
  }

  return (
    <>
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-[#004567] rounded-md w-[312px] h-[441px] shadow-lg p-4">
        <div className="rounded-full w-[150px] h-[150px] bg-white m-auto mb-2" style={{backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
      
        <div className="w-[200px] flex justify-end">
          <label htmlFor="file" style={{ cursor: 'pointer' }}>
            <GoUpload className="text-white"/> 
            <input id="file" type="file" style={{ display: 'none' }} onChange={handleFileChange} /> 
          </label> 
        </div>
        <p className="text-center text-white text-lg">Isabella</p>
        <p className="text-center text-gray-300 text-sm">isabella@gmail.com</p>
      </div>
    </Modal>  
    </>
  );
}

export default AddImage;
