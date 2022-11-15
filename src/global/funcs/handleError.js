import toast from "react-hot-toast";

export function handleError(err) {
  switch (err) {
    case 404:
      return toast.error(`${"مشکلی پیش امده لطفا دوباره امتحان کنید"}`);
    case 500:
      return toast.error(`${"مشکلی از سمت سرور پیش امد"}`);
    default:
      break;
  }
}
