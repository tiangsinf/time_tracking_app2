import React from "react";

import {
    Box,
    Card,
    CardHeader,
    Divider,
    CardContent,
    TextField,
    ButtonGroup,
    Button
} from "@material-ui/core";

import { TimerDashboardContext } from "./TimerDashboard";

export const TimerForm = props => {
    const [timerForm, setTimerForm] = React.useState(() => {
        if (props.id) {
            return {
                id: props.id,
                title: props.title,
                project: props.project
            };
        } else {
            return {
                title: "",
                project: ""
            };
        }
    });

    const submitText = props.id ? "Update" : "Create";

    const handleTitleChange = e => {
        setTimerForm({ ...timerForm, title: e.target.value });
    };

    const handleProjectChange = e => {
        setTimerForm({ ...timerForm, project: e.target.value });
    };

    const informTimerFormSubmit = () => {
        if (props.id) {
            handleTimerUpdate({
                id: props.id,
                title: timerForm.title,
                project: timerForm.project
            });
            props.informTimerFormClose();
        } else {
            handleCreateFormSubmit({
                title: timerForm.title,
                project: timerForm.project
            });
            props.informTimerFormClose();
        }
    };

    // get update TimerDashboard from context
    const { handleCreateFormSubmit, handleTimerUpdate } = React.useContext(
        TimerDashboardContext
    );

    return (
        <Box display="flex" justifyContent="center" m={3} mb={1}>
            <Card raised={true} style={{ width: 350 }}>
                <CardHeader
                    title={`${submitText} Timer`}
                    subheader="Update title or project description"
                    style={{ height: 50 }}
                />
                <Divider />
                <CardContent>
                    <form
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            height: 150
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            fullWidth
                            style={{
                                margin: 20,
                                marginTop: 1,
                                marginBottom: 1
                            }}
                            id="outlined-name"
                            label="Title"
                            margin="normal"
                            variant="outlined"
                            defaultValue={timerForm.title}
                            placeholder="Title"
                            onChange={handleTitleChange}
                        />
                        <TextField
                            fullWidth
                            style={{ margin: 20 }}
                            id="outlined-name"
                            label="Project"
                            margin="normal"
                            variant="outlined"
                            defaultValue={timerForm.project}
                            placeholder="Project"
                            onChange={handleProjectChange}
                        />
                    </form>
                </CardContent>
                <ButtonGroup fullWidth size="large">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={informTimerFormSubmit}
                    >
                        {submitText}
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={props.informTimerFormClose}
                    >
                        Cancel
                    </Button>
                </ButtonGroup>
            </Card>
        </Box>
    );
};
