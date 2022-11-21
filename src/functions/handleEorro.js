import toast from "react-hot-toast";

const messages = {
  netWorkError: "!مشکلی از سمت سرور پیش امده است",
};

export function handleError(err) {
  if (err === null) return toast.error(`${messages.netWorkError}`);
  switch (err) {
    case "ERR_NETWORK":
      return toast.error(`${messages.netWorkError}`);
    default:
      return;
  }
}
