import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";

const Adduser = () => {
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [role, rolechange] = useState("staff");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const userobj = { name, email, role };
    dispatch(FunctionAddUser(userobj));
    navigate("/user");
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2>Add User</h2>
          </div>
          <div className="card-body" style={{ textAlign: "left" }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    value={name}
                    onChange={(e) => namechange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={email}
                    onChange={(e) => emailchange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <label>Role</label>
                  <select
                    value={role}
                    onChange={(e) => rolechange(e.target.value)}
                    className="form-control"
                  >
                    <option value="React-N14">React N14</option>
                    <option value="React-N12">React N12</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>{" "}
            |
            <Link className="btn btn-danger" to={"/user"}>
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Adduser;
