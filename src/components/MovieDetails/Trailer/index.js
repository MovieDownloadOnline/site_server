import { AspectRatio, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Trailer = ({ ytID }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [ytID]);

  return (
    <Skeleton w="full" isLoaded={!isLoading}>
      <AspectRatio ratio={16 / 9} maxW="full">
        <iframe
          title={ytID}
          id="ytplayer"
          type="text/html"
          onLoad={() => setIsLoading(false)}
          src={"https://www.youtube.com/embed/" + ytID}
        ></iframe>
      </AspectRatio>
    </Skeleton>
  );
};

export default Trailer;
