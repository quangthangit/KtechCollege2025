import { FilterIcon, PhoneIcon, SearchIcon } from "lucide-react";
import "./App.css";
import ContinueWithApple from "./components/ContinueWithApple";
import ContinueWithGoogle from "./components/ContinueWithGoogle";
import GetStartedButton from "./components/GetStartedButton";
import InputComponent from "./components/InputComponent";

function App() {
  return (
    <>
      <GetStartedButton />
      <br />
      <ContinueWithApple />
      <br />
      <ContinueWithGoogle />
      <br />
      <InputComponent leftIcon={<SearchIcon />} />
      <InputComponent
        label="Search"
        leftIcon={<SearchIcon />}
        rightIcon={<FilterIcon />}
      />
      <InputComponent
        label="Search in the web"
        leftIcon={<SearchIcon />}
        rightIcon={
          <span
            style={{
              background: "#d6ff20",
              borderRadius: "45px",
              padding: "10px",
            }}
          >
            <PhoneIcon />
          </span>
        }
      />
      <InputComponent
        label="Search crypto"
        leftIcon={<SearchIcon />}
        rightIcon={
          <span>
            <PhoneIcon />
          </span>
        }
      />
      <InputComponent
        label="Phone number"
        rightIcon={
          <span
            style={{
              background: "#d1fae5",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <PhoneIcon />
          </span>
        }
      />
      <InputComponent
        label="Search in the web"
        leftIcon={<SearchIcon />}
        rightIcon={
          <span
            style={{
              background: "#d6ff20",
              borderRadius: "45px",
              padding: "10px",
            }}
          >
            <PhoneIcon />
          </span>
        }
      />
    </>
  );
}

export default App;
