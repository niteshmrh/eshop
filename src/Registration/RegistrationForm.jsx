import React, { useState } from "react";
import "./Registration.css";

import { useNavigate } from "react-router-dom";

function RegistrationForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [hobbie, setHobbies] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [photo, setPhoto] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(gender);
    console.log(hobbie);
    console.log(address);
    console.log(state);
    console.log(dob);
    e.preventDefault();

    setName("");
    setEmail("");
    setPassword("");
    setGender("");
    setHobbies("");
    setAddress("");
    setState("");
    setDob("");
  };

  const handleReset = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setGender("");
    setHobbies("");
    setAddress("");
    setState("");
  };

  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} onReset={(e) => handleReset(e)}>
        <fieldset>
          <legend>
            <h1>Registration form</h1>
          </legend>
          <div className="details-on-form">
            <table cellSpacing="0" cellPadding="5" width="500">
              <tbody>
                <tr>
                  <td>
                    <label>Name</label>
                  </td>
                  <td>
                    <input
                      className="Inputs"
                      type="text"
                      placeholder="Type name here"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Email</label>
                  </td>
                  <td>
                    <input
                      className="Inputs"
                      type="email"
                      placeholder="Type email here"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Password</label>
                  </td>
                  <td>
                    <input
                      className="Inputs"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="bb">Gender</td>
                  <td>
                    <div
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <input type="radio" value="Male" name="gender" /> Male
                      <input type="radio" value="Female" name="gender" /> Female
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="bb">Hobbies</td>
                  <td>
                    <div
                      value={hobbie}
                      onChange={(e) => setHobbies.bind(e.target.value)}
                    >
                      <input type="checkbox" value="music" name="music" />
                      Music
                      <input type="checkbox" value="dance" name="dance" />
                      Dance
                      <input type="checkbox" value="travel" name="travel" />
                      Travel
                      <input type="checkbox" value="reading" name="reading" />
                      Reading
                      <input type="checkbox" value="sports" name="sports" />
                      Sport
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="bb" valign="top">
                    Address
                  </td>
                  <td>
                    <textarea
                      name="address"
                      rows="5"
                      cols="25"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                  </td>
                </tr>

                <tr>
                  <td className="bb">State</td>
                  <td>
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option>Select State</option>
                      <option>Rajasthan</option>
                      <option>Telanagan</option>
                      <option>Assam</option>
                      <option>Himachal Pradesh</option>
                      <option>Lakshdeep</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>Photo</label>
                  </td>
                  <td>
                    <input
                      type="file"
                      value={photo}
                      onChange={(e) => setPhoto(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>DOB</label>
                  </td>
                  <td>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="reset" value="Reset Form" />
                  </td>
                  <td>
                    <input
                      type="submit"
                      value="Submit Form"
                      onClick={() => navigate("/")}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default RegistrationForm;
