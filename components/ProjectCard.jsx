"use client";

import Link from "next/link";
import { Card, Button, Row, Col } from "react-bootstrap";

export default function ProjectCard({ item }) {
  return (
    <Card className="col-md-12 shadow-sm mb-4 hover-card h-100" style={{ borderRadius: "0px" }}>
      <Row className="g-0 h-100">
        
        {/* image on the left */}
        <Col md={4} className="h-100">
          <Card.Img
            src={item.image}
            className="h-100 w-100"
            fill
            sizes="180px"
            style={{ objectFit: "cover", 
                     borderTopLeftRadius: "0px",
                     borderBottomLeftRadius: "0px",
                     borderTopRightRadius: "0px",
                     borderBottomRightRadius: "0px",}}
          />
        </Col>

        {/* info on the right */}
        <Col md={8} className="d-flex flex-column">
          <Card.Body className="d-flex flex-column">

            <Card.Title className="mb-2">{item.title}
            </Card.Title>
            {/* {item.conference} */}
            {item.description && (
              <Card.Text className="text-muted small mb-3">
                {item.description.substring(0, 200)}...
              </Card.Text>
            )}

            <div className="mt-auto d-flex gap-2">
              {/* <Link href={`/${item.type}/${item.slug}`}> */}
              <Link href={`/research/${item.slug}`}>
                <Button variant="outline-primary" size="sm">Learn More</Button>
              </Link>

              {item.pdf && (
                <a href={item.pdf} target="_blank">
                  <Button variant="outline-secondary" size="sm">PDF</Button>
                </a>
              )}
            </div>

          </Card.Body>
        </Col>

      </Row>
    </Card>
  );
}
