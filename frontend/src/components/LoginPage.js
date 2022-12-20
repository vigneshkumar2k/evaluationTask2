import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const LoginPage = () => {

    const [usermail, setEmail] = useState("");
    const [userpassword, setPassword] = useState("");
    const [loginstatus, setloginstatus] = useState("");

    const navigate =useNavigate();
    const login = () => { 
        // console.log(email,password);
        axios
          .post("http://localhost:3001/login", { email: usermail,
          password: userpassword, })
          .then((response) => {
            // console.log(response);
            if(response.data.success){
              navigate("/bookings")
            }
            else{
              setloginstatus(response.data.message)
            //   navigate("/login")
            }
          })
          .catch((error) => {
    
          });
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
                    Login
                  </h2>
                  <form>
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
                      <label class="form-label" for="form3Example4cg"><p style={{color: "red"}}>{loginstatus}</p></label>
                    </div>
                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={login}
                      >
                        login
                      </button>
                      
                    </div>
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

export default LoginPage;
