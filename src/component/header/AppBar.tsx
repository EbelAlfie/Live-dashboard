import logo from "../../logo.svg"
import { HeaderText } from "../Text"

export function AppBar() {
    return (
        <>
			<header className="navbar fixed-top row app-bar">
				<div className="col-sm-auto">
					<img src={logo} className="App-logo navbar-brand" alt="app logo" />
				</div>
				<div className="col-sm">
					<HeaderText text="Live Dashboard" />
				</div>
			</header>
        </>
    )
}