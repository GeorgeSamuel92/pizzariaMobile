import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    height: 100,
    width: 330,
  },

  inputContainer: {
    height:Dimensions.get('window').height/3,
    paddingVertical: 34,
    paddingHorizontal: 14,
  },

  input: {
    width: "95%",
    height:Dimensions.get('window').height/5,
    backgroundColor: "#101026",
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: "#fff",
    borderWidth: 0.3,
    borderColor: "#8a8a8a",
  },

  button: {
    width: "95%",
    height:Dimensions.get('window').height/3,
    backgroundColor: "#3fffa3",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
