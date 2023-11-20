import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Login } from "../../apis/apis";

export default function LoginForm() {

    const [value, setValue] = useState({
        email: "",
        password: ""
    });

    const login = new Login();

    return (
        <div className='flex items-center justify-center h-[80vh] login'>

            <form onSubmit={e => {
                e.preventDefault()

                login.postLogin(value);

            }}>

                <h1 className="text-[30px] font-bold text-white mb-10 text-center">Login</h1>

                <div className="p-float-label !mb-10">
                    <InputText
                        id="email"
                        value={value.email}
                        onChange={(e) => setValue(prev => ({
                            ...prev,
                            email: e.target.value
                        }))}
                        className="w-[500px] max-w-full !bg-transparent text-white font-medium"
                    />
                    <label htmlFor="email">Email</label>
                </div>

                <span className="p-float-label mb-5">
                    <Password
                        feedback={false}
                        id="password"
                        value={value.password}
                        onChange={(e) => setValue(prev => ({
                            ...prev,
                            password: e.target.value
                        }))}
                        className="!w-[500px] max-w-full !bg-transparent !text-white font-medium"
                    />
                    <label htmlFor="password">Password</label>
                </span>

                <div className="flex items-center justify-center my-10">

                    <Button label="Submit" className="w-[200px]" />

                </div>

            </form>

        </div>
    )
}
