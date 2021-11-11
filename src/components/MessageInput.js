import { useState } from "react";
import PropTypes from "prop-types";
import { Paper, IconButton, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles"
import { Send } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    paper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 8,
    },
    input: {
        flexGrow: 1,
    }
}))

export const MessageInput = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState("");

    const resetForm = () => {
        setValue("");
    };

    const onSubmitMessage = (event) => {
        event.preventDefault();
        props.onSend(value);
        resetForm();
    };

    const onChangeMessageInput = (event) => {
        setValue(event.target.value);
    };

    return (
        <Paper
            className={classes.paper}
            component="form"
            onSubmit={onSubmitMessage}
            >
            <InputBase
                className={classes.input}
                onChange={onChangeMessageInput}
                placeholder={props.placeholder}
                value={value}
                type="text"
            />
            <IconButton>
                <Send />
            </IconButton>
        </Paper>
    );
};

MessageInput.propTypes = {
    onSend: PropTypes.func,
    placeholder: PropTypes.string
};

MessageInput.defaultProps = {
    placeholder: "type message"
};