import { useLocation } from "react-router-dom"
import { useStreamClient } from "../../../hooks/StreamHook"
import { UserModel } from "../../../model/UserModel"
import { LiveChat } from "./LiveChat"
import { StreamVideo } from "@stream-io/video-react-sdk"
import { Chat } from "stream-chat-react"
import { LiveStream } from "./LiveStream"
import { ControlHeader } from "./ControlHeader"

const DashBoardContent: React.FC = () => {
    let extras = useLocation()
    let user: UserModel = {
        name: extras.state.name,
        id: extras.state.id
    }

    let { chatClient, videoClient, chat, call } = useStreamClient(user)

    if (!chatClient)
        return <>
            <h1>Loading...</h1>
        </>

    return (
        <>
            <StreamVideo client={videoClient}>
                <Chat client={chatClient}>
                    <ControlHeader />
                    <section className="row">
                        <div className="col">
                            {call &&
                                <LiveStream call={call}/>
                            }
                        </div>
                        <div className="col">
                            {chat &&
                                <LiveChat channel={chat}/>
                            }
                        </div>
                    </section>
                </Chat>
            </StreamVideo>
        </>
    )
}

export { DashBoardContent }