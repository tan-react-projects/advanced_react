import React from "react";
import ArticleList from "../ArticleList";
import Article from "../Article";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import { shallow } from "enzyme";

describe("ArticleList", () => {
  const testProps = {
    articles: {
      a: { id: "a" },
      b: { id: "b" }
    }
  };

  Article.propTypes = {};

  it("renders correctly", () => {
    const wrapper = shallow(<ArticleList {...testProps} />);

    // console.log(wrapper.instance.props);

    // expect(wrapper.instance.propsw.children.length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
