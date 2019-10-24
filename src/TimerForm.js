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

// Stateful: Form is always stateful.
export const TimerForm = props => {
    const submitText = props.title ? "Update" : "Create";

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
                            defaultValue={props.title}
                            placeholder="Title"
                        />
                        <TextField
                            fullWidth
                            style={{ margin: 20 }}
                            id="outlined-name"
                            label="Project"
                            margin="normal"
                            variant="outlined"
                            defaultValue={props.project}
                            placeholder="Project"
                        />
                    </form>
                </CardContent>
                <ButtonGroup fullWidth size="large">
                    <Button variant="contained" color="primary">
                        {submitText}
                    </Button>
                    <Button variant="contained" color="secondary">
                        Cancel
                    </Button>
                </ButtonGroup>
            </Card>
        </Box>
    );
};
