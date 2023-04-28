import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const genderOptions = ['MALE', 'FEMALE', 'OTHER'];
const typeOptions = ['ACTOR', 'SINGER', 'DIRECTOR'];

const AddArtistForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState(genderOptions[0]);
    const [type, setType] = useState(typeOptions[0]);
    const navigate = useNavigate();


    const addArtist = () => {
        const dto = {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            art_Type: type
        }

        //add axios code here yash bro
        axios.post("http://localhost:8080/admin/addartist",dto)
        .then((response) => {
            console.log(response.data)
            navigate("/adminfun")
        })
        .catch(error => {console.log(error)
            alert("Invalid Email or Password..!!!")
        });
    }






    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add artist to database or perform other action
        console.log(firstName, lastName, gender, type);
        setFirstName('');
        setLastName('');
        setGender(genderOptions[0]);
        setType(typeOptions[0]);
    };

    return (
        <h4>
            <div style={{ textAlign: "center", border: "5px solid #FF2300" }}>
                
                <br></br>
                <h1>Add Artist</h1>
                <br></br>
                <br></br>
                <form onSubmit={handleSubmit} >
                    <label>
                        First Name: &nbsp;&nbsp;&nbsp;
                        <input type="text" value={firstName} onChange={handleFirstNameChange} />
                    </label>
                    <br />
                    <br></br>
                    <label>
                        Last Name:&nbsp;&nbsp;&nbsp;
                        <input type="text" value={lastName} onChange={handleLastNameChange} />
                    </label>
                    <br />
                    <br></br>
                    <label>
                        Gender:&nbsp;&nbsp;&nbsp;
                        <select value={gender} onChange={handleGenderChange}>
                            {genderOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <br></br>
                    </label>
                    <br />
                    <br></br>
                    <label>
                        Type:&nbsp;&nbsp;&nbsp;
                        <select value={type} onChange={handleTypeChange}>
                            {typeOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </label>
                    <br></br>
                    <br />
                    <button type="button" className='btn btn-secondary' onClick={addArtist}>Add Artist</button>
                </form>
                <br></br>
                <br></br>
                <br></br>
      </div>
        </h4>
    );
};

export default AddArtistForm;
