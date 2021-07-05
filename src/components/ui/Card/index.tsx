import React from "react";

import "./styles.sass";

interface CardProps {
  title: string;
  image: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  className = "",
}): JSX.Element => (
  <div className={`card ${className}`}>
    <img src={image} alt={title} />
    <h4>{title}</h4>
  </div>
);

export default Card;
