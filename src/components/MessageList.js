import PropTypes from "prop-types";
import { Message } from "./Message";

export const MessageList = (props) => {
    return (
        <div>
            {props.messageList.map((item) => {
                <Message key={item.id} {...item} />
            })}
        </div>
    );
};

MessageList.propTypes = {
    messageList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            author: PropTypes.string,
        })
    )
};

MessageList.defaultProps = {
    messageList: []
};