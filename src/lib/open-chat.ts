import { toast } from "sonner";

declare global {
  interface Window {
    leadConnector?: { chatWidget?: { openWidget?: () => void } };
  }
}

/** Opens the GoHighLevel chat widget (Coco). Falls back gracefully if not loaded yet. */
export function openChat() {
  const open = window.leadConnector?.chatWidget?.openWidget;
  if (typeof open === "function") {
    open();
    return;
  }
  window.scrollTo({ top: document.body.scrollHeight, left: document.body.scrollWidth, behavior: "smooth" });
  toast("Chat is loading, try again in a second.");
}
