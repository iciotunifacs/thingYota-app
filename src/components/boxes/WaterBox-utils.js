export const switchDimensions = ({ size = "mediun" }) => {
  switch (size) {
    case "small":
      return {
        tamAgua: 40,
        topBase: "0",
        tamCaixa: "50px",
      };
    case "mediun":
    default:
      return {
        tamAgua: 136,
        topBase: "0",
        tamCaixa: "150px",
      };
    case "large":
      return {
        tamAgua: 300,
        topBase: "88",
        tamCaixa: "315px",
      };
  }
};
