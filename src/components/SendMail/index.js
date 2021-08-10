import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import { db } from "../../firebase";
import firebase from "firebase";

function SendMail() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        db.collection("emails").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        dispatch(closeSendMessage())
    };
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon
                    className="sendMail__close"
                    onClick={() => dispatch(closeSendMessage())}
                />
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="To"
                    type="email"
                    {...register("to", { required: true })}
                />
                {errors.to && (
                    <p className="sendMail__error">To is Required!</p>
                )}
                <input
                    placeholder="Subject"
                    type="text"
                    {...register("subject", { required: true })}
                />
                {errors.subject && (
                    <p className="sendMail__error">To is Required!</p>
                )}
                <input
                    placeholder="Message..."
                    className="sendMail__message"
                    type="text"
                    {...register("message", { required: true })}
                />
                {errors.message && (
                    <p className="sendMail__error">To is Required!</p>
                )}
                <div className="sendMail__options">
                    <Button
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SendMail;
