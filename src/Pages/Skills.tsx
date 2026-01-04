import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import dataskill from "../Assets/Data/Dataskills.json";
import "../styles/Skills.css";
import "../styles/Card.css";

function Skills() {
  return (
    <div className="skills-container">
      <Typography variant="h4" align="center" gutterBottom>
        My Skills Timeline
      </Typography>

      <Timeline position="alternate">
        {dataskill.map((skill, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index !== dataskill.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent>
              <Card className="skills-card" sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="80"
                  image={skill.img}
                  alt={skill.title}
                  sx={{ objectFit: "contain", p: 1 }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {skill.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.description}
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

export default Skills;
