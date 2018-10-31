import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";
import BookClubCard from "../components/BookClubCard";
import CookbookCard from "../components/CookbookCard";
import HabitTrackerCard from "../components/HabitTrackerCard";

const ProjectsContainer = props => {
  return (
    <React.Fragment>
      <a name="projects" />
      <Jumbotron
        style={{ minHeight: window.innerHeight, backgroundColor: "#bd8c7d" }}
      >
        <h1 className="header-right">Projects</h1>
        <Row>
          <Col sm="4" xs="12">
            <BookClubCard />
          </Col>
          <Col sm="4" xs="12">
            <CookbookCard />
          </Col>
          <Col sm="4" xs="12">
            <HabitTrackerCard />
          </Col>
        </Row>
      </Jumbotron>
    </React.Fragment>
  );
};

export default ProjectsContainer;
