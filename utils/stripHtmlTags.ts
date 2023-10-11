export const stripHtmlTags = (html: string): string => {
  if (!html) {
    return '';
  }
  html = html.toString();
  return html.replace(/<[^>]*>/g, '');
};
