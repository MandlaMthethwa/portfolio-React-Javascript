import React from "react";
import { Container, Row } from "react-bootstrap";

import TitleBar from "../components/TitleBar";

class Projects extends React.Component {
    render() {
        return (
            <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
                <div className="center inner-structure" style={{ flexDirection: "column" }}>
                    <TitleBar title="Projects" />
                    <Container fluid>
                        <Row className="justify-content-center" style={{ alignItems: "center" }}>
                            <h1>Sorry!! Page is Under maintenance, No worries though You can visit my Github and view all my projects and
 repositories, Thank you! 
</h1>
                            
                            
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Projects;
