import Component1 from "../screen2/component1";
import Component2 from "../screen2/component2";

const Screen2 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
        padding: "32px",
        maxWidth: "440px",
        width: "100%",
        background: "#E2E9EE",
        margin: "40px auto",
        borderRadius: "32px",
        boxSizing: "border-box",
      }}
    >
      <Component1
        name={"Yolanda"}
        avata={
          <img
            height={52}
            width={52}
            style={{ borderRadius: "45px" }}
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
          />
        }
        number={"Web Development"}
      />
      <Component2/>
    </div>
  );
};

export default Screen2;
