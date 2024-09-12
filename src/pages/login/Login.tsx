import { AppBar } from "../../component/header/AppBar";
import InputSection from "./components/InputSection";
import { WelcomeBanner } from "./components/WelcomeBanner";

function LoginContent() {
    return (
        <div className="row login-page">
            <InputSection />
            <WelcomeBanner />
        </div>
    )
}

export default function LoginScreen() {

    return (
        <>
            <div className="col">
                <AppBar />
                <LoginContent />
            </div>
        </>
    )
}