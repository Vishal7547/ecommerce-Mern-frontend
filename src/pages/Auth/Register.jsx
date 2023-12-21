import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../components/layout/Layout";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        {
          name,
          email,
          password,
          phone,
          address,
          answer,
        }
      );
      if (res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title="Register E-commerce app">
      <div className="register">
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              value={name}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter Your Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              value={phone}
              className="form-control"
              id="exampleInputPhone"
              placeholder="Enter Your Phone"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              value={address}
              className="form-control"
              id="exampleInputAddress"
              placeholder="Enter Your Address"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              value={answer}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="What is your Favorite sports"
              required
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              value={password}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
