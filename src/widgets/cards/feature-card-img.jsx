import SliderComponent from "../swiper/Swiper";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export function FeatureCardImage({ icon, title }) {
  return (
    <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
      <CardBody className="px-0 py-0">
        <SliderComponent icon={icon} />
        <Typography variant="h5" color="blue-gray" className="mb-2 font-bold text-center mt-2">
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
}

FeatureCardImage.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCardImage;
