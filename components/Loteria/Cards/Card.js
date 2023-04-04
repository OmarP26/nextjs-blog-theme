import { Image } from '../Media/Index';

const Card = ({ image }) => {
  return (
    <>
      <div>
        <Image image={image} />
      </div>
    </>
  );
};

export default Card;
