import Component1 from "./component1";

const Screen3 = () => {
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
        images={[
          "https://randomuser.me/api/portraits/men/75.jpg",
        ]}
        title="Miriam Jimenez"
      />
      <Component1
        images={[
          "https://randomuser.me/api/portraits/men/75.jpg",
          "https://randomuser.me/api/portraits/men/65.jpg",
          "https://randomuser.me/api/portraits/women/44.jpg",
        ]}
        title="Teams"
        subtitle="Two currently"
        bgColor="#740EF5"
      />
            <Component1
        images={[
          "https://randomuser.me/api/portraits/men/75.jpg",
          "https://randomuser.me/api/portraits/men/65.jpg",
        ]}
        title="New Teams"
        bgColor="#FFF614"
      />
    </div>
  );
};

export default Screen3;
