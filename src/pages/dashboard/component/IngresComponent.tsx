import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk"

const IngressComponent: React.FC = () => {
    let callState = useCallStateHooks()

    let ingress = callState.useCallIngress()

    return (
        <>
            <section className="col">
                <p className="row">{ingress && ingress.rtmp.address}</p>
                <p className="row"></p>
            </section>
        </>
    )
}

export { IngressComponent }