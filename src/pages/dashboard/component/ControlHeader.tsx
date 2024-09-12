import { useCall } from "@stream-io/video-react-sdk"
import { useState } from "react"

const ControlHeader: React.FC = () => {
    let call = useCall()

    let [inputTitle, setTitle] = useState("")

    function startLive() {
        call?.goLive()
    }

    function onTitleChanged(value: string) {
        setTitle(value)
    }

    return (
        <>
            <div className="row ps-2 pe-2 align-items-end vw-100">
                <div className="col-md align-self-center">
                    <textarea value={inputTitle} onChange={(input) => {onTitleChanged(input.target.value)}} placeholder="Judul Live"></textarea>
                </div>
                <div className="col-sm-auto align-self-center">
                    <button className="btn btn-primary" onClick={startLive}>Mulai live</button>
                </div>
            </div>
            <hr className="default-divider m-0"/>
        </>
    )

}

export { ControlHeader }