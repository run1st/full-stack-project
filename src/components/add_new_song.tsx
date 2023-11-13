import styled from "@emotion/styled";
import ImageUploader from "./upload_song_image";

const ContainerDiv = styled.div`
  background-color: #eed1c2;
  height: 1000px;
  max-width: 100vp;
  margin-top: -20px;
  justify-contents: center;
  margin-left: 25%;
  margin-right: 25%;
`;
const Title = styled.h1`
  font-waight: bold;
  text-align: center;
`;
const SaveEdit = styled.div`
  background-color: #4caf50;
  padding: 10px 25px;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  border: none;

  position: relative;
  margin-bottom: 20px;
  max-width: 50%;
  margin-left: 15%;
  margin-right: 15%;
  align-contents: center;
`;
const CancelEdit = styled.button`
  background-color: #4caf50;
  padding: 10px 25px;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  margin-left: 65px;
`;
const FormGroup = styled.div`
  margin-bottom: 15px;
`;
const Label = styled.div`
  margin-left: 25px;
  font-size: 15px;
  margin-bottom: 10px;
  display: block;
`;
const Input = styled.input`
  margin-left: 25px;
  width: 80%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;

  color: #ccc;
  &:focus {
    border: 3px solid blue;
  }
`;
const AddNewSong: React.FC = () => {
  return (
    <>
      <ContainerDiv>
        <Title>Welcome</Title>

        <FormGroup>
          <Label>Title</Label>
          <Input
            type="text"
            name="title"

            // value={songToBeEdited?.title}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label>Name Of The Artist</Label>
          <Input
            type="text"
            name="title"

            // value={songToBeEdited?.title}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label>Album name</Label>
          <Input
            type="text"
            name="title"

            // value={songToBeEdited?.title}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label>Music Genre</Label>
          <Input
            type="text"
            name="title"

            // value={songToBeEdited?.title}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label>Release Year</Label>
          <Input
            type="datetime-local"
            name="title"

            // value={songToBeEdited?.title}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label>Duration</Label>
          <Input
            type="text"
            name="title"

            // value={songToBeEdited?.title}
          ></Input>
        </FormGroup>
        <FormGroup>
          {" "}
          <ImageUploader />
        </FormGroup>

        <SaveEdit>ADD</SaveEdit>
      </ContainerDiv>
    </>
  );
};
export default AddNewSong;
