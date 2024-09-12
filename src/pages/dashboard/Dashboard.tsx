import { AppBar } from "../../component/header/AppBar";
import { DashBoardContent } from "./component/DashboardContent";

export default function DashBoardScreen() {
    return (
        <>
            <AppBar />
            <div className="page-content">
                <DashBoardContent />
            </div>
        </>
    )
}