import { Header } from "../../components/Header";
import React from "react";
import { shallow } from "enzyme";

test("should render Header correctly", () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

