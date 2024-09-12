import { Channel as ChatChannel } from "stream-chat" 
import { Channel, MessageInput, MessageList, VirtualizedMessageList, Window } from "stream-chat-react"

type LiveChatProp = {
    channel: ChatChannel
}

const LiveChat: React.FC<LiveChatProp> = (props) => {
    return (
        <>
            <Channel channel={props.channel}>
                <Window>
                    <MessageList />
                    <MessageInput />
                </Window>
            </Channel> 
        </>
    )
}

export { LiveChat }