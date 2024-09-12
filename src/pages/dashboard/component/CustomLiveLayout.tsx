import { CallingState, LivestreamLayout, useCall, useCallStateHooks, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect } from "react"
import { IngressComponent } from "./IngresComponent"

const CustomLiveLayout: React.FC = () => {
    let call = useCall()
    
    // let callState = useCallStateHooks()
    //let remoteParticipants = callState.useRemoteParticipants()

    useEffect(() => {

        call?.join({create: true})
        .then(result => {
            call?.camera.enable()
            console.log(`Success ${result}`)
        })
        .catch(error => {
            console.log(`ERRORRRRR ${error}`)
        })

        return () => {
            if (call?.state.callingState !== CallingState.LEFT) {
                call?.leave()
            }
        }
    }, [call])

    return (
        <>
            <div className="col container">
                <div className="row">
                    <LivestreamLayout showParticipantCount={false} showLiveBadge={false}/>
                </div>
                <div className="row m-2">
                    <IngressComponent />
                </div>
            </div>
        </>
    )
}

export { CustomLiveLayout }