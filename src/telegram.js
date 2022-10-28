export default function Telegram() {
  const tg = window.Telegram.WebApp;
  tg.ready();
  const mainButton = tg.MainButton;
  return {
    tg,
    mainButton,
  };
}
