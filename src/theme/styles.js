const styles = {
  global: {
    "html, body": {
      minWidth: "360px",
    },
    "::-webkit-scrollbar": {
      width: { xs: "6px", lg: "8px" },
      height: { xs: "6px", lg: "8px" },
    },
    "::-webkit-scrollbar-thumb": {
      bg: "rgba(0, 0, 0, 0.4)",
      transition: ".25s ease-in-out",
      borderRadius: "10px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      bg: "rgba(0, 0, 0, 0.6)",
    },
    "::-webkit-scrollbar-track": {
      bg: "inherit",
      borderRadius: "0",
    },
    ".no-scroll": {
      overflow: "hidden",
    },
  },
};

export default styles;
