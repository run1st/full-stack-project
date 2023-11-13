import React, { useState, ChangeEvent } from "react";
//import "./ImageUploader.css"; // Import your CSS file
import styled from "@emotion/styled";
const ImageUploaderContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  max-width: 50%;
  margin-left: 25%;
  margin-right: 25%;
`;
const CustomFileInputLabel = styled.label`
  display: block;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`;
const CustomFileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;
const PreviewImage = styled.img`
  max-width: 100%;
  margin-top: 10px;
  border-radius: 5px;
`;
const ImageUploader: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedImage(file);
  };

  return (
    <ImageUploaderContainer>
      <CustomFileInputLabel>
        {" "}
        {selectedImage ? selectedImage.name : "Choose an image"}
      </CustomFileInputLabel>
      <CustomFileInput
        type="file"
        id="imageInput"
        accept="image/*"
        onChange={handleImageChange}
      ></CustomFileInput>

      {selectedImage && (
        <PreviewImage
          src={URL.createObjectURL(selectedImage)}
          alt="Selected"
        ></PreviewImage>
      )}
    </ImageUploaderContainer>
  );
};

export default ImageUploader;
