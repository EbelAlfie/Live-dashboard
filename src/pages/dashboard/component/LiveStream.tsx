import { Call, StreamCall, StreamTheme } from "@stream-io/video-react-sdk"
import { CustomLiveLayout } from "./CustomLiveLayout"
import { IngressComponent } from "./IngresComponent"

type LiveVideoProps = {
    call: Call
}

const LiveStream: React.FC<LiveVideoProps> = (props) => {
    return (
        <>
            <StreamTheme style={{color: "white"}}>
                <StreamCall call={props.call}>
                    <CustomLiveLayout />
                </StreamCall>
            </StreamTheme>
        </>
    )
}

export { LiveStream }