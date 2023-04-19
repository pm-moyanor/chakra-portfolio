import {
  Card,
  Heading,
  CardBody,
  Image,
  Text,
  Link,
  VStack,
  CardFooter,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProjectCard = ({ title, description, imageSrc }) => {
  return (
    <Card>
      <CardBody padding={0}>
        <Image src={imageSrc} borderRadius="md" margin={0} />
        <VStack alignItems="flex-start" padding={5}>
          <Heading size="sm" mt={2} fontWeight="extrabold">
            {title}
          </Heading>
          <Text fontSize="sm">{description}</Text>
        </VStack>
      </CardBody>
      <CardFooter paddingTop={0}>
        <Link fontWeight="bold" alignContent={"center"} fontSize="sm">
          see more
          <FontAwesomeIcon
            icon={faArrowRight}
            size="1x"
            style={{ marginLeft: "8px" }}
          />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
