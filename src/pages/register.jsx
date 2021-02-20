import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MuiPaper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";

//import { commonType, defaultHouse, defaultApartment } from "./api/types";
import HouseForm from "./components/house";

const SignUp = () => {
    const [sent, setSent] = useState(false);
    const [type, setType] = useState("");

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const onSubmit = async (values) => {
        await sleep(1000);
        const data = JSON.stringify(values, 0, 2);
        alert(data);
    };

    const getForm = (type) =>
        type === "house" ? (
            <HouseForm onSubmit={onSubmit} sent={sent} />
        ) : type === "apartment" ? (
            <ApartmentForm onSubmit={onSubmit} sent={sent} />
        ) : (
            <div />
        );

    return (
        <Container maxWidth="sm">
            <MuiPaper style={{ padding: 30 }} elevation={1}>
                <Fade timeout={1000} in={true}>
                    <Typography
                        variant="h3"
                        gutterBottom
                        marked="center"
                        align="center"
                    >
                        Cadastrar um(a):
                    </Typography>
                </Fade>
                <Grid container style={{ marginBottom: 30 }}>
                    <Grid item xs={6}>
                        <Fade timeout={3000} in={true}>
                            <Button fullWidth onClick={() => setType("house")}>
                                Casa
                            </Button>
                        </Fade>
                    </Grid>
                    <Grid item>
                        <Fade timeout={3000} in={true}>
                            <Button
                                fullWidth
                                onClick={() => setType("apartment")}
                            >
                                Apartamento
                            </Button>
                        </Fade>
                    </Grid>
                </Grid>

                {getForm(type)}
            </MuiPaper>
        </Container>
    );
};

export default SignUp;