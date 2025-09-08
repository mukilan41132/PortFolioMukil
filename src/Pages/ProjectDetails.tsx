import React, { useState } from "react";
import "../styles/Project.css";
import {
  Box,
  Button,
  Container,
  Divider,
 
  IconButton,
  Link,
  List,
  ListItem,
  Paper,
  Typography,
  Dialog,
  Tooltip,
  Fade,
  Collapse,
} from "@mui/material";
import Grid from '@mui/material/Grid';

import { Close } from "@mui/icons-material";
import { FaArrowLeft } from "react-icons/fa";
import { workExperience } from "../assets/Data/workExperience";
type ProjectProps = {
  project: any;
  onBack: any;
};
const Project: React.FC<ProjectProps> = ({ project, onBack }) => {
  let workExperiences = workExperience?.workExperience;
  workExperiences = workExperiences.filter(
    (experience) => experience.id === project.id
  );
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [featureIndex, setFeatureIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const [expandedFeatures, setExpandedFeatures] = useState<
    Record<number, boolean>
  >({});

  const handleOpen = (img: any, fIndex: any, iIndex: any) => {
    setSelectedImage(img);
    setFeatureIndex(fIndex);
    setImageIndex(iIndex);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNextImage = () => {
    const featureObj = workExperiences[0];
    if (!featureObj || !featureObj.project || !featureObj.project.features)
      return;

    const feature = featureObj.project.features[featureIndex];

    const images = Array.isArray(feature.image) ? feature.image : [];

    setImageIndex((prev) => (prev + 1) % images.length);

    setSelectedImage(images[(imageIndex + 1) % images.length]);
  };

  const handlePreviousImage = () => {
    const featureObj = workExperiences[0];
    if (!featureObj || !featureObj.project || !featureObj.project.features)
      return;

    const feature = featureObj.project.features[featureIndex];

    const images = Array.isArray(feature.image) ? feature.image : [];
    setImageIndex((prev) => (prev - 1) % images.length);

    setSelectedImage(images[(imageIndex - 1) % images.length]);
  };

  const toggleExpand = (idx: any) => {
    setExpandedFeatures((prev: any) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 5 } }}>
        <Box mb={4}>
          <Button
            variant="outlined"
            startIcon={<FaArrowLeft />}
            onClick={() => onBack(null)}
            sx={{ fontWeight: 600 }}>
            Back
          </Button>
        </Box>

        {workExperiences.map((experience, index) => (
          <Fade in key={index} timeout={600}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                mb: 6,
                borderRadius: 4,
                background: "linear-gradient(145deg, #f0f2f5, #ffffff)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}>
              <Typography variant="h5" gutterBottom fontWeight={700}>
                Project Title:&nbsp;
                <Link
                  href={experience.company.websiteLink}
                  target="_blank"
                  underline="hover"
                  color="primary">
                  {experience.project.name}
                </Link>
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 3, color: "text.secondary" }}>
                {experience.project.description}
              </Typography>

              <Typography variant="h6" fontWeight={600} gutterBottom>
                Key Features & Functionalities:
              </Typography>

              {experience.project.features.map((feature, fIdx) => (
                <Box key={fIdx} sx={{ mb: 5 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                      color: "primary.main",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleExpand(fIdx)}>
                    {feature.title}
                  </Typography>

                  <Collapse
                    in={expandedFeatures[fIdx] !== false}
                    timeout="auto"
                    unmountOnExit>
                    <Grid container spacing={2}>
                      {(feature.image && feature.image.length > 0
                        ? feature.image
                        : []
                      ).map((img, iIdx) => (
                        <Grid item xs={12} sm={6} md={4} key={iIdx}>
                          <Box
                            component="img"
                            src={img}
                            alt={`${feature.title} ${iIdx + 1}`}
                            onClick={() => handleOpen(img, fIdx, iIdx)}
                            sx={{
                              width: "100%",
                              height: 160,
                              objectFit: "cover",
                              borderRadius: 2,
                              boxShadow: 4,
                              cursor: "pointer",
                              transition:
                                "transform 0.3s ease, box-shadow 0.3s ease",
                              "&:hover": {
                                transform: "scale(1.02)",
                                boxShadow: 8,
                              },
                            }}
                          />
                        </Grid>
                      ))}
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            background:
                              "linear-gradient(135deg, #e0f7fa 0%, #80deea 100%)",
                            borderRadius: 2,
                            p: 2,
                            boxShadow: 3,
                          }}>
                          <Typography
                            variant="body1"
                            sx={{
                              color: "text.primary",
                              lineHeight: 1.7,
                              fontSize: "0.95rem",
                            }}>
                            {feature.details}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Collapse>
                </Box>
              ))}

              <Dialog open={open} onClose={handleClose} maxWidth="md">
                <Box sx={{ position: "relative", p: 2 }}>
                  <IconButton
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      color: "white",
                      zIndex: 2,
                    }}>
                    <Close />
                  </IconButton>
                  <Box
                    component="img"
                    src={selectedImage}
                    alt="Preview"
                    sx={{
                      width: "100%",
                      maxHeight: "80vh",
                      objectFit: "contain",
                      borderRadius: 2,
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                    }}>
                    <Button onClick={handlePreviousImage}>Previous</Button>
                    <Button onClick={handleNextImage}>Next</Button>
                  </Box>
                </Box>
              </Dialog>

              <Divider sx={{ my: 3 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Technologies Used:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                {experience.project.technologies.map((tech, i) => (
                  <Tooltip key={i} title={tech.name}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        px: 2,
                        py: 1,
                        bgcolor: "grey.100",
                        borderRadius: 2,
                        boxShadow: 1,
                        gap: 1,
                        cursor: "default",
                        "&:hover": {
                          transform: "scale(1.05)",
                          transition: "0.2s ease-in-out",
                        },
                      }}>
                      <img
                        src={tech.img}
                        alt={tech.name}
                        width={20}
                        height={20}
                      />
                      <Typography fontSize="0.875rem">{tech.name}</Typography>
                    </Box>
                  </Tooltip>
                ))}
              </Box>

              <Typography
                variant="h6"
                fontWeight={600}
                gutterBottom
                sx={{ mt: 3 }}>
                Tools Used:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                {experience.project.tools.map((tool, i) => (
                  <Tooltip key={i} title={tool.title}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        px: 2,
                        py: 1,
                        bgcolor: "grey.100",
                        borderRadius: 2,
                        boxShadow: 1,
                        gap: 1,
                        "&:hover": {
                          transform: "scale(1.05)",
                          transition: "0.2s ease-in-out",
                        },
                      }}>
                      <img
                        src={tool.img}
                        alt={tool.title}
                        width={20}
                        height={20}
                      />
                      <Typography fontSize="0.875rem">{tool.title}</Typography>
                    </Box>
                  </Tooltip>
                ))}
              </Box>

              <Typography
                variant="h6"
                fontWeight={600}
                gutterBottom
                sx={{ mt: 3 }}>
                Key Achievements:
              </Typography>
              <List dense>
                {experience.keyAchievements.map((achievement, i) => (
                  <ListItem key={i} sx={{ pl: 0 }}>
                    <Typography variant="body2">➼ {achievement}</Typography>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Fade>
        ))}
      </Container>
    </>
  );
};

export default Project;
