import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Chip from "./index";

describe("Chip component", () => {
  it("Renders", () => {
    render(<Chip>test</Chip>);

    const chipElement = screen.getByText(/test/i);
    expect(chipElement).toBeInTheDocument();
  });

  it("Matches snapshot", () => {
    const component = renderer.create(<Chip>test</Chip>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Contains passed text", () => {
    const chip = shallow(<Chip>test</Chip>);

    expect(chip.text()).toEqual("test");
  });

  it("Has chip-color class when color is passed", () => {
    const chip = shallow(<Chip color="secondary">test</Chip>);

    expect(chip.hasClass("chip-secondary")).toEqual(true);
  });

  it("Has chip-primary class when no color is passed", () => {
    const chip = shallow(<Chip>test</Chip>);

    expect(chip.hasClass("chip-primary")).toEqual(true);
  });
});
