import { Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from "stream-chat";

const API_KEY = "vjepn8rkwv8t";
const client = StreamChat.getInstance(API_KEY);

export default function ChatLayout() {
    useEffect(() => {
      
        
    //  connset the user
    const connectUser = async () => {
      await client.connectUser(
        {
          id: "ievgen",
          name: "Ievgen",
          image: "https://i.imgur.com/fR9Jz14.png",
        },
        client.devToken("ievgen")
      );
        
        
      // create a channel
      const channel = client.channel("livestream", "public", {
        name: "Public",
      });
        await channel.create();
    };
    connectUser();

    return () => {
      client.disconnectUser();
    };
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Messages" }} />
    </Stack>
  );
}
