import { Notification } from "electron";

function showNotification(message: string, fn?: any) {
  const notification = {
    // title: message,
    body: message,
    // icon: appIcon,
  };
  let notify: any = new Notification(notification);
  notify.show();
  fn && notify.on("click", fn);
}

export default showNotification;
