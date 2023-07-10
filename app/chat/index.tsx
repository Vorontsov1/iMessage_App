import { useRouter } from 'expo-router';
import { ChannelList, Channel, MessageList, MessageInput } from "stream-chat-expo";
import {Channel as ChannelType} from 'stream-chat';



const ChatScreen = () => {
 const router= useRouter()

    
  return <ChannelList onSelect={(channel) => router.push(`/chat/channel/${channel.id}`)} />
}

export default ChatScreen;
