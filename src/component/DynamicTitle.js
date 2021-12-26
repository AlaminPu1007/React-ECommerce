
export function DynamicTitle(data = {}) {
  data.title = data.title || "E-Commerce site";
  data.metaDescription = data.metaDescription || "E-Commerce site Meta Description";

  document.title = data.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", data.metaDescription);
};

