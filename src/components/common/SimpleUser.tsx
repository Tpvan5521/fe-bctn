import { Flex, Image, Text } from "@chakra-ui/react";

const SimpleUser = ({
  name,
  extraInfo,
}: {
  extraInfo?: string;
  name: string;
}) => {
  return (
    <Flex marginTop="2" gap="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${name}`}
      />
      <Text fontWeight="medium">{name}</Text>
      {extraInfo ? (
        <>
          <Text>—</Text>
          <Text>{extraInfo}</Text>
        </>
      ) : null}
    </Flex>
  );
};

export default SimpleUser;
