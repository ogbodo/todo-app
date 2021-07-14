import { WToast } from "react-native-smart-tip";

const showToast = (message: string) => {
  const toastOpts = {
    data: message,
    textColor: "green",
    backgroundColor: "#fff",
    duration: WToast.duration.SHORT, //1.SHORT 2.LONG
    position: WToast.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
  };

  WToast.show(toastOpts);
};

export default showToast;
