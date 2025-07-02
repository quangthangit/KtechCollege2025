import Component1 from "./component1";
import Component2 from "./component2";

const Screen4 = () => {
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
        title={"Nike store"}
        logo={
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="42" height="42" rx="21" fill="black" />
            <path
              d="M32.9999 16.7995L15.4419 24.2755C13.9859 24.8915 12.7629 25.2005 11.7739 25.2005C10.6539 25.2005 9.84094 24.8085 9.33694 24.0235C9.01994 23.5195 8.92694 22.8805 9.05694 22.1055C9.18694 21.3305 9.53294 20.5055 10.0929 19.6275C10.5599 18.9175 11.3249 17.9845 12.3899 16.8275C12.0287 17.3962 11.7638 18.0206 11.6059 18.6755C11.3259 19.8705 11.5779 20.7475 12.3619 21.3075C12.7349 21.5685 13.2479 21.6995 13.9019 21.6995C14.4239 21.6995 15.0119 21.6155 15.6659 21.4475L32.9999 16.7995Z"
              fill="white"
            />
          </svg>
        }
        subtitle={"6 months of promotions"}
        cost={"-27.50"}
        time={"11:00AM"}
      />
      <Component2/>
    </div>
  );
};

export default Screen4;
