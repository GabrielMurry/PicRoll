import { Flex, Box } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function MasonryLayout({ children }) {
  return (
    // <Box
    //   // display={"grid"}
    //   // gridTemplateRows={"masonry"}
    //   // gridTemplateColumns={"repeat(4, 1fr)"}
    //   // flexFlow={"row wrap"}
    //   // alignContent={"space-between"}
    //   // minHeight={"75vh"}
    //   sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
    //   padding={4}
    //   width="100%"
      
    // >
    //   {children}
    // </Box>
    <ResponsiveMasonry
      columnsCountBreakPoints={{350: 2, 900: 3}}
      style={{
        width: "100%",
        padding: "16px"
      }}
    >
      <Masonry>
        {children}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default MasonryLayout;
