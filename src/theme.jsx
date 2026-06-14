// @ts-ignore
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light" ? {} : {}),
  },
});
