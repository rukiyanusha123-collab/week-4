export function hideLoading(loading) {
  loading.style.display = "none";
}

export function showError(loading) {
  loading.innerHTML = "Failed to load products.";
}