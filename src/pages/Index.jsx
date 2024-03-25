import React from "react";
import { Box, Heading, Text, Image, SimpleGrid, Container, UnorderedList, ListItem } from "@chakra-ui/react";

const TrainingStation = ({ title, description, equipment, imageSrc }) => (
  <Box p={4} borderWidth={1} borderRadius="lg">
    <Heading as="h3" size="lg" mb={2}>
      {title}
    </Heading>
    <Image src={imageSrc} alt={title} mb={4} />
    <Text mb={2}>{description}</Text>
    <Heading as="h4" size="md" mb={2}>
      Equipment:
    </Heading>
    <UnorderedList>
      {equipment.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </UnorderedList>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Multi-Station Athletic Training Facility
      </Heading>
      <Text fontSize="xl" mb={8}>
        Our state-of-the-art training facility is designed to cover a wide array of training needs, integrating both physical and mental fitness components. Each station is meticulously detailed with specific equipment and tools to contribute to a holistic approach to athlete development.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <TrainingStation title="ATG Station" description="Focused on Athletic Truth Group (ATG) training principles, this station emphasizes knee-over-toe exercises for lower body strength and resilience." equipment={["Knee-over-toe sleds", "Reverse hyper machine", "Nordic curl bench"]} imageSrc="https://images.unsplash.com/photo-1516481265257-97e5f4bc50d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdGclMjB0cmFpbmluZyUyMHN0YXRpb258ZW58MHx8fHwxNzExMzM3MDU1fDA&ixlib=rb-4.0.3&q=80&w=1080" />
        <TrainingStation title="Powerlifting Station" description="Equipped for heavy lifting, this station is designed for athletes focusing on the three main powerlifting exercises: squat, bench press, and deadlift." equipment={["Squat racks", "Bench press stations", "Deadlift platforms", "Barbells and weight plates"]} imageSrc="https://images.unsplash.com/photo-1519859660545-3dea8ddf683c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3dlcmxpZnRpbmclMjBneW18ZW58MHx8fHwxNzExMzM3MDU1fDA&ixlib=rb-4.0.3&q=80&w=1080" />
        <TrainingStation title="Mental Fitness Station" description="Incorporating Acceptance and Commitment Training (ACT), this station provides a space for mental training and mindfulness practice." equipment={["Yoga mats", "Meditation cushions", "ACT workbooks and resources"]} imageSrc="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwc3BhY2V8ZW58MHx8fHwxNzExMzM3MDU2fDA&ixlib=rb-4.0.3&q=80&w=1080" />
        <TrainingStation title="Speed and Coordination Station" description="Designed to improve agility, speed, and coordination, this station features various tools for footwork and reaction time drills." equipment={["Agility ladders", "Hurdles", "Reaction balls", "Cone drills"]} imageSrc="https://images.unsplash.com/photo-1645153529729-daab8168b5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZ2lsaXR5JTIwdHJhaW5pbmd8ZW58MHx8fHwxNzExMzM3MDU2fDA&ixlib=rb-4.0.3&q=80&w=1080" />
        <TrainingStation title="Explosive Power Station" description="Focused on developing explosive strength, this station includes plyometric and Olympic lifting equipment." equipment={["Plyo boxes", "Medicine balls", "Weightlifting platforms", "Bumper plates"]} imageSrc="https://images.unsplash.com/photo-1516481265257-97e5f4bc50d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwbHlvbWV0cmljJTIwdHJhaW5pbmd8ZW58MHx8fHwxNzExMzM3MDU2fDA&ixlib=rb-4.0.3&q=80&w=1080" />
        <TrainingStation title="Endurance Station" description="Equipped with cardio machines and functional training tools, this station is designed for endurance and conditioning workouts." equipment={["Treadmills", "Rowing machines", "Assault bikes", "Kettlebells", "Resistance bands"]} imageSrc="https://images.unsplash.com/photo-1535743686920-55e4145369b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmR1cmFuY2UlMjB0cmFpbmluZyUyMGVxdWlwbWVudHxlbnwwfHx8fDE3MTEzMzcwNTd8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <TrainingStation title="Maximal Strength Station" description="Featuring heavy-duty strength training equipment, this station is focused on building maximal strength across various muscle groups." equipment={["Power racks", "Plate-loaded machines", "Dumbbells", "Cables and pulleys"]} imageSrc="https://images.unsplash.com/photo-1516481265257-97e5f4bc50d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwZXF1aXBtZW50fGVufDB8fHx8MTcxMTMzNzA1N3ww&ixlib=rb-4.0.3&q=80&w=1080" />
        <TrainingStation title="Mixed Station" description="Integrating elements from all other stations, the Mixed Station allows for versatile and creative workouts tailored to individual needs." equipment={["EMS units", "Suspension trainers", "Battle ropes", "Sandbags", "Slam balls"]} imageSrc="https://images.unsplash.com/photo-1516481265257-97e5f4bc50d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdW5jdGlvbmFsJTIwdHJhaW5pbmclMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzExMzM3MDU3fDA&ixlib=rb-4.0.3&q=80&w=1080" />
      </SimpleGrid>
    </Container>
  );
};

export default Index;
