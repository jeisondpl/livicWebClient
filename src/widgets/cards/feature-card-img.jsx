import SliderComponent from "../swiper/Swiper";
import { Card, CardBody } from "@material-tailwind/react";

export function FeatureCardImage({ icon }) {
  return (
    <Card className="rounded-2xl shadow-lg shadow-gray-500/10 ">
      <CardBody className=" px-0 py-0 text-center">
        <SliderComponent icon={icon} />
      </CardBody>
    </Card>
  );
}

FeatureCardImage.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCardImage;
