import React from "react";
import { Card, CardContent, CardHeader, Typography, Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contacts() {
    return (
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "40px 0" }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
                Contact Me
            </Typography>
            <Card>
                <CardHeader
                    title={<Typography variant="h5">Contact Me</Typography>}
                    subheader="Any questions? Feel free to contact me through my email, LinkedIn, or Github!"
                />
                <CardContent>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                        <MailIcon color="action" />
                        <Typography variant="body1" fontWeight="medium">
                            kikimworkmail@gmail.com
                        </Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                        <LinkedInIcon color="action" />
                        <Button
                            variant="outlined"
                            color="primary"
                            href="https://www.linkedin.com/in/ki-kim-work/"
                            target="_blank"
                            startIcon={<LinkedInIcon />}
                        >
                            LinkedIn
                        </Button>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <GitHubIcon color="action" />
                        <Button
                            variant="outlined"
                            color="primary"
                            href="https://github.com/kikimwebsite"
                            target="_blank"
                            startIcon={<GitHubIcon />}
                        >
                            GitHub
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
