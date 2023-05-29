import { f as fail } from "../../../chunks/index.js";
const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const password = data.get("password");
    if (!password) {
      return fail(400, { missing: true });
    }
    return { success: true };
  }
};
export {
  actions
};
