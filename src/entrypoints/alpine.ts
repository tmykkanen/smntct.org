import type { Alpine } from "alpinejs";
import intersect from "@alpinejs/intersect";
import resize from "@alpinejs/resize";

export default (Alpine: Alpine) => {
  Alpine.plugin(intersect);
  Alpine.plugin(resize);
  Alpine.store("menu", false);
};
