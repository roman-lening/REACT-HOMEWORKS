export const boxTheme = (theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 5,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 8,
  border: "2px solid",
  borderColor: theme ? "primary.main" : "secondary.main",
  width: "fit-content",
  margin: "0 auto",
  padding: 3,
});
