import { Center, Stack, Text } from "@mantine/core";
import Image from "next/image";
import qrCode from "../public/images/qrcode.png";

export default function Home() {
  return (
    <Center w="100vw" h="100vh" bg="hsl(212, 45%, 89%)">
      <Stack
        spacing={20}
        w={330}
        p={20}
        bg="hsl(0, 0%, 100%)"
        style={{ borderRadius: 15 }}
      >
        <Image
          src={qrCode}
          width={290}
          height={290}
          style={{ borderRadius: 10 }}
        />
        <Text
          px={5}
          align="center"
          size={22}
          weight={700}
          c="hsl(218, 44%, 22%)"
        >
          Imrove your front-end skills by building projects
        </Text>
        <Text px={5} align="center" size={16} c="hsl(220, 15%, 55%)">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Text>
      </Stack>
    </Center>
  );
}
