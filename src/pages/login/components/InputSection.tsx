import { useNavigate } from "react-router-dom";
import { TextField } from "./TextField";
import { useState } from "react";
import { validatePassword, validateUserName } from "../../../utils/formUtil";
import { UserModel } from "../../../model/UserModel";

export default function InputSection() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
		let navCon = useNavigate() 

		function GoToDashboard() {
			if (validateUserName(userName) != null) {
				return 
			}

			if (validatePassword(password) != null) {
				return 
			}

			let userModel: UserModel = {
				name: userName,
				id: userName
			}

			navCon(
				"/dashboard", 
				{
					replace: true,
					state: userModel
				}
			)
			return
		}

    return (
			<>
				<section className="col d-flex justify-content-center align-items-center">
						<form onSubmit={GoToDashboard}>
							<div className="row m-2">
								<TextField inputLabel="User Name" text={userName} onTextChange={(arg: string) => {setUserName(arg)}}/>
							</div>
							<div className="row m-2">
								<TextField type="password" inputLabel="Password" text={password} onTextChange={(arg: string) => {setPassword(arg)}}/>
							</div>
							<div className="row m-3">
								<button type="submit" className="btn btn-primary">Submit</button>
							</div>
						</form>
				</section>
			</>
    )
} 