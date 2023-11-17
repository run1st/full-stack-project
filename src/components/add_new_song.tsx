import styled from "@emotion/styled";
import ImageUploader from "./upload_song_image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useDispatch } from "react-redux";
import { SongsModel } from "./assets/songs";
//import { useNavigate } from "react-router-dom";
import { addSong, editSong } from "./musicSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const BackgroundDiv = styled.div`
  background-color: #165356;
  width: 100%;
  height: 100%;
`;
const ContainerDiv = styled.div`
  height: 100%;
  max-width: 100%;

  justify-contents: center;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  border: 1px solid #ccc;
  padding: 8px;
`;
const Title = styled.h1`
  font-waight: bold;
  text-align: center;
  color: white;
`;
const SaveAdd = styled.div`
  width: 30%;
  padding: 8px;
  border-radius: 6px;
  text-align: center;
  border: 3px solid #739efd;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: gray;
    border: 1px solid white;
    padding: 10px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;
const Label = styled.div`
  margin-left: 25px;
  font-size: 15px;
  margin-bottom: 10px;
  display: block;
  color: white;
  font-waight: bold;
`;

const Input = styled.input`
  width: 30%;
  padding: 8px;
  border-radius: 6px;
  color: black;

  &:focus {
    border: 3px solid blue;
  }
`;
const StyledDatePicker = styled(DatePicker)`
  width: 50%;
  padding: 8px;
  border-radius: 6px;
  color: #ccc;
  &:focus {
    border: 3px solid blue;
  }
`;
const AddNewSong: React.FC = () => {
  const allSongList = useSelector((state: RootState) => state.music.allSongs);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const LastId = allSongList[allSongList.length - 1].id;
  let newSong: SongsModel = {
    id: LastId + 1,
    title: "",
    artist: "",
    album: "",
    genre: "",
    releaseYear: new Date(),
    duration: 0,
    image: "",
  };
  const [newMusic, setNewMusic] = useState<SongsModel>(newSong);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const handleImageChange = (file: File | null) => {
    setSelectedImage(file);

    setSelectedImage((updatedImage) => {
      console.log(updatedImage?.type);
      console.log(updatedImage?.name);
      console.log(updatedImage);
      return updatedImage; // Return the updated state
    });
    if (file) {
      // Set the image property in the newSong state
      setNewMusic((prevSong) => ({
        ...prevSong,
        image: URL.createObjectURL(file),
      }));
    }
  };
  const handleDateChange = (date: Date | null) => {
    setNewMusic((prevSong) => ({
      ...prevSong,
      releaseYear: date || new Date(), // Use the selected date or default to the current date
    }));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMusic((previous) => ({ ...previous, [name]: value }));
  };
  const handleFormSubmit = () => {
    dispatch(addSong(newMusic));
    console.log(newMusic.duration);
    console.log(allSongList);
    // Navigate back
    // navigate(-1);
  };

  return (
    <>
      <BackgroundDiv>
        {" "}
        <ContainerDiv>
          <Title>Welcome</Title>

          <FormGroup>
            <Label>Title</Label>

            <Input
              onChange={handleInputChange}
              type="text"
              name="title"

              // value={songToBeEdited?.title}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label>Name Of The Artist</Label>
            <Input
              type="text"
              name="artist"
              onChange={handleInputChange}
              // value={songToBeEdited?.title}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label>Album name</Label>
            <Input
              type="text"
              name="album"
              onChange={handleInputChange}
              // value={songToBeEdited?.title}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label>Music Genre</Label>
            <Input
              type="text"
              name="genre"
              onChange={handleInputChange}
              // value={songToBeEdited?.title}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label>Release Year</Label>
            {/* <Input
              type="datetime-local"
              name="releaseYear"
              onChange={handleInputChange}
              // value={songToBeEdited?.title}
            ></Input> */}
            <StyledDatePicker onChange={handleDateChange}></StyledDatePicker>
          </FormGroup>

          <FormGroup>
            <Label>Duration</Label>
            <Input
              type="text"
              name="duration"
              onChange={handleInputChange}
              // value={songToBeEdited?.title}
            ></Input>
          </FormGroup>
          <FormGroup>
            {" "}
            <ImageUploader onImageChange={handleImageChange} />
          </FormGroup>
          <FormGroup>
            {" "}
            <SaveAdd onClick={handleFormSubmit}>ADD</SaveAdd>
          </FormGroup>
        </ContainerDiv>
      </BackgroundDiv>
    </>
  );
};
export default AddNewSong;
