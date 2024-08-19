import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
//implement the basic styles for our cards and skeletons.

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
