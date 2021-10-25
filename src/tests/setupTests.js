import Adapter from "enzyme-adapter-react-16";
import DotEnv from "dotenv";
import Enzyme from "enzyme";

Enzyme.configure({
    adapter: new Adapter(),
});

DotEnv.config({ path: ".env.test" });
