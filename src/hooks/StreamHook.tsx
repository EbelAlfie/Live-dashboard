import { Channel, StreamChat, UserResponse } from "stream-chat"
import { UserModel } from "../model/UserModel"
import { Call, CallingState, StreamVideoClient, UserRequest } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

export const useStreamClient = (user: UserModel) => {
    let chatUser: UserResponse = {
        id: user.id,
        username: user.name
    }
    let videoUser: UserRequest = {
        id: user.name,
        name: user.name
    }

    let apiKey: string = process.env.REACT_APP_STREAM_KEY || ""
    let token: string = process.env.REACT_APP_CACING_TOKEN || ""
    
    let [chatClient, setChatClient] = useState<StreamChat>()
    let videoClient = StreamVideoClient.getOrCreateInstance({
        apiKey: apiKey,
        token: token,
        user: videoUser
    })

    const type = "livestream"
    const id = "test-live"
    
    let [chat, setChat] = useState<Channel>()
    let [call, setCall] = useState<Call>()

    useEffect(() => {
        if (chatClient) return 
        console.log("init chat client")
        let client = StreamChat.getInstance(apiKey)
        client.connectUser(chatUser, token)
        .then(result => {
            console.log("login success")
            setChatClient(client)
        })
        .catch(error => {
            console.log(`Login failed ${error}`)
        })
    }, [chatClient])

    useEffect(() => {
        console.log("dispose chat client")
        return () => {
            chatClient?.disconnectUser()
        }
    }, [chatClient])

    useEffect(() => {
        if (!chatClient) return 
        if (chat) return
        console.log("init chat room")
        let channel = chatClient.channel(type, id)
        channel.create()
        .then(result => {
            console.log("success create channel")
            setChat(channel)
        })
        .catch(error => {
            console.log(`Failed create channel ${error}`)
        })
    }, [chatClient, chat])
    
    useEffect(() => {
        if (call) return 
        console.log("init call")
        let video = videoClient.call(type, id)
        setCall(video) 
    }, [call])
    
    return { chatClient, videoClient, chat, call }
}