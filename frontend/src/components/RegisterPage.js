import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [username, setName] = useState("");
  const [usermail, setEmail] = useState("");
  const [userpassword, setPassword] = useState("");
  const [userphoneno, setPhNo] = useState("");
 

  const register = () => {
    axios
      .post("http://localhost:3001/register", {
        name: username,
        phoneNo: userphoneno,
        email: usermail,
        password: userpassword,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {});
  };
  async function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    try {
      const response = await fetch('/check-email', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response);
    //   if (response.ok) {
    //     response.send
        
    //   } else {
    //     // Email is already in use
    //   }
    } catch (error) {
      console.error(error);
    }
  }




  return (
    <section class="vh-100 bg-image">
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1cg"
                        class="form-control form-control-lg"
                        placeholder="Your Name"
                        value={username}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label class="form-label" for="form3Example1cg"></label>
                    </div>
                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1cg"
                        class="form-control form-control-lg"
                        placeholder="Your phone no"
                        value={userphoneno}
                        onChange={(e) => setPhNo(e.target.value)}
                      />
                      <label class="form-label" for="form3Example1cg"></label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        class="form-control form-control-lg"
                        placeholder="Your Email"
                        value={usermail}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label class="form-label" for="form3Example3cg"></label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        class="form-control form-control-lg"
                        placeholder="Password"
                        value={userpassword}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label class="form-label" for="form3Example4cg"></label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        class="form-control form-control-lg"
                        placeholder="Repeat your password"
                      />
                      <label class="form-label" for="form3Example4cdg"></label>
                    </div>

                    <div class="d-flex justify-content-center">
                      <a href="/login"><button
                        type="button"
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={register}
                      >
                        Register
                      </button></a>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href="/login" class="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
