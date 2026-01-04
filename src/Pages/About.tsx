
import { Box, Container, Typography, Avatar, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import profile from '../Assets/Images/IMG20230224095550.jpg';
import TotalExp from '../Healper/TotalExpCalculation';
import '../styles/About.css';
import '../styles/Home.css';
const About = () => {


  return (

    <Container maxWidth="md" className="about-section">
      <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
        <Avatar
          src={profile}
          alt="Mukilan"
          sx={{
            width: 120,
            height: 120,
            mb: 2,
            boxShadow: 4,
            border: '3px solid white',
          }}
        />
        <Typography variant="h3" gutterBottom sx={{ fontFamily: '"Caveat", cursive' }}>
          About Me
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontFamily: 'Roboto, sans-serif' }}>
          Hello, I’m Mukilan! I graduated in 2023 with a B.Sc. in Information Technology and currently work as a
          <b> Java Spring Boot + React.Js Developer at Acumen Technology Pvt Ltd.</b>
          I have {TotalExp(2023, 8)} years of experience in web development with expertise in:
        </Typography>

        <Box component="ul" className="no-bullets">
          <li><b>Frontend Development:</b> React.js, Redux Toolkit, React Router, Material-UI, Tailwind CSS, Bootstrap, HTML5, CSS3</li>
          <li><b>UI Frameworks:</b> Bootstrap, Tailwind CSS</li>
          <li><b>State Management:</b>  React Hooks, Context API, Redux Toolkit, Global State Management</li>
          <li><b>Backend Development:</b> Node.js, Express.js, Java Spring Boot, MongoDB</li>
          <li><b>API & Web: </b>  RESTful APIs, Axios, Swagger, Postman, JSON</li>
          <li><b>Version Control:</b> Git, GitHub</li>
           <li><b>build tool:</b> Vite, Webpack</li>
          <li><b>Healthcare Standards:</b> Custom FHIR API Development, FHIR Resource CRUD </li>
        </Box>

        <Typography variant="body1" paragraph>
          I'm passionate about building    dynamic web apps and ensuring efficient, scalable solutions.
        </Typography>

        <Typography variant="body1" paragraph>
          I enjoy exploring new tech, contributing to open source, and collaborating with teams to grow together.
        </Typography>

        <Typography variant="body1" paragraph>
          Want to collaborate or chat? Reach out via the links below!
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
          <IconButton
            href="https://linkedin.com/in/mukilan-r-a01275265/"
            target="_blank"
            sx={{
              backgroundColor: '#0077b5',
              color: 'white',
              '&:hover': { backgroundColor: '#005e8e' },
            }}
          >
            <LinkedInIcon sx={{ fontSize: 32 }} />
          </IconButton>
          <IconButton
            href="https://github.com/mukilan41132"
            target="_blank"
            sx={{
              backgroundColor: '#333',
              color: 'white',
              '&:hover': { backgroundColor: '#24292f' },
            }}
          >
            <GitHubIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>
      </Box>
    </Container>


  );
};

export default About;

