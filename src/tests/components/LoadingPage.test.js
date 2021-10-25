import LoadingPage from "../../components/LoadingPage";
import React from "react";
import { shallow } from "enzyme";

test("should correctly render LoadingPage", () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});
