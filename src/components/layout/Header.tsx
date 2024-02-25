import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { IoSunny, IoMoon } from "react-icons/io5";
import Logo from "../common/Logo";
import { useState } from "react";
import SimpleUser from "../common/SimpleUser";

interface Props {
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Logo />
          </Box>
          <Stack direction={"row"} spacing={6}>
            <Box as="a" href={"#"}>
              Home
            </Box>
            <Box as="a" href={"#"}>
              Forum
            </Box>
            <Box as="a" href={"#"}>
              Contact
            </Box>
          </Stack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <IoMoon /> : <IoSunny />}
              </Button>

              {loggedIn ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://100k-faces.glitch.me/random-image"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <Box px={4}>
                      <SimpleUser name="John Doe" />
                    </Box>
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem onClick={() => setLoggedIn(false)}>
                      Logout
                    </MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Stack
                  flex={{ base: 1, md: 0 }}
                  justify={"flex-end"}
                  direction={"row"}
                  spacing={6}
                >
                  <Button
                    // as={"a"}
                    // variant={"link"}
                    // href={"#"}
                    fontSize={"sm"}
                    fontWeight={400}
                    onClick={() => setLoggedIn(true)}
                  >
                    Sign In
                  </Button>
                  <Button
                    // as={"a"}
                    // href={"#"}
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"pink.400"}
                    _hover={{
                      bg: "pink.300",
                    }}
                    onClick={() => setLoggedIn(true)}
                  >
                    Sign Up
                  </Button>
                </Stack>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
