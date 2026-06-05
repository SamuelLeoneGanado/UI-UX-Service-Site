interface HomeCardProps {
  image: string;
  title: string;
  onClick: () => void; // Added onClick prop
}

const HomeCard = ({ image, title, onClick }: HomeCardProps) => {
  return (
    <div className="HomeCard" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={image} alt="Image not found" />
      <div className="IconSpacing">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default HomeCard;
