import { CallingState, LivestreamLayout, useCall, useCallStateHooks, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect } from "react"

const CustomLiveLayout: React.FC = () => {
    let call = useCall()

    //let client = useStreamVideoClient()
    
    // let callState = useCallStateHooks()

    // let ingress = callState.useCallIngress()

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
            <div className="col container login-page">
                <div className="row">
                    <LivestreamLayout showParticipantCount={false} showLiveBadge={false}/>
                </div>
                <div className="row">
                    {/* <h1>{ingress && ingress.rtmp.address}</h1> */}
                </div>
                <div className="row">
                    {/* <h1>{client && client.streamClient.tokenManager.getToken()}</h1> */}
                </div>
            </div>
        </>
    )
}

export { CustomLiveLayout }