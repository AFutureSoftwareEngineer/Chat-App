import {MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced"

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('869f84fa-c29b-4834-be10-998f5c1a781b', props.user.username, props.user.secret);
    const colorStyle  = {
        backgroundColor: "linear-gradient(183deg, #7ea7ca, #a39184, #4d86b4, #b8a395) !important",
        height: '100vh'
      
    };
      
    return ( 
        <div  >
            <MultiChatSocket {...chatProps}  />
            <MultiChatWindow {...chatProps} style={colorStyle} />
        </div>)
}
export default ChatsPage;