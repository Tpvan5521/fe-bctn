import FeaturedJobCard from "@/components/cards/FeaturedJobCard";
import { Box } from "@chakra-ui/react";

const FeaturedJobsSection = () => {
  return (
    <Box className="container">
      <FeaturedJobCard />
      <FeaturedJobCard />
      <FeaturedJobCard />
      <FeaturedJobCard />
      <FeaturedJobCard />
      <FeaturedJobCard />
    </Box>
  );
};

export default FeaturedJobsSection;
