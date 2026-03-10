"use client";

import Link from "next/link";
import { Card, Button, Row, Col } from "react-bootstrap";

export default function ProjectCard({ item }) {
  return (
    <Card 
      className="shadow-sm mb-4 hover-card h-100"
      onClick={() => window.location.href = `/research/${item.slug}`}
      style={{ borderRadius: "0px" }}>
      <Row className="g-0 h-100 project-card-row">
        
        {/* image on the left */}
        <Col md={4} className="project-card-image-col">
          <Card.Img
            src={item.image}
            className="h-100 w-100"
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
                <Button variant="outline-info" size="sm">Learn More</Button>
              </Link>

              {item.pdf && (
                <a 
                  href={item.pdf} 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button variant="outline-warning" size="sm">PDF</Button>
                </a>
              )}
              
            </div>

          </Card.Body>
        </Col>

      </Row>
    </Card>
  );
}
