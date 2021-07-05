import React from "react";

import "./styles.sass";

interface ChipProps {
  children: string;
  color?: "primary" | "secondary";
}

const Chip: React.FC<ChipProps> = ({
  children,
  color = "primary",
}): JSX.Element => <span className={`chip chip-${color}`}>{children}</span>;

export default Chip;
