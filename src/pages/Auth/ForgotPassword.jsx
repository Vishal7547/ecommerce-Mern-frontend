import React from "react";
import Layout from "../../components/layout/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        {
          email,
          newPassword,
          newAnswer,
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
      toast.error("something went wrong");
    }
  };
  return (
    <Layout title={"Forgot-password  E-commerce  App"}>
      <div className="register">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
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

          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your NewPassword"
              required
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={newAnswer}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Favorite Sports Name"
              required
              onChange={(e) => setNewAnswer(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
