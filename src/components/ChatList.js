import { List } from "@material-ui/core";
import PropTypes from "prop-types";
import { Chat } from "./Chat";

export const ChatList = ({ list }) => {
    return (
        <List>
            {list.map((item) => (
                <Chat key ={item.id} {...item} />
            ))}
            <Chat id="1" name="fake" />
        </List>
    );
};

ChatList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string
        })
    )
};
