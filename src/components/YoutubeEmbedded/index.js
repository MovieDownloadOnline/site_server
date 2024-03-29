import {
  AspectRatio,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton,
} from "@chakra-ui/react";
import React, { useState } from "react";

const YoutubeEmbedded = ({ isOpen, onClose, videoID, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent px={3}>
        <ModalHeader mb={1}>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Skeleton w="full" isLoaded={!isLoading} rounded="lg">
            <AspectRatio ratio={16 / 9} maxW="full">
              <iframe
                title={title}
                id="ytplayer"
                type="text/html"
                onLoad={() => setIsLoading(false)}
                src={"https://www.youtube.com/embed/" + videoID}
              ></iframe>
            </AspectRatio>
          </Skeleton>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default YoutubeEmbedded;
