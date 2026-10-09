/** Slots live in public/images. Replace a file and keep its filename. */
export function imageSrc(file) {
  return `${import.meta.env.BASE_URL}images/${file}`;
}
