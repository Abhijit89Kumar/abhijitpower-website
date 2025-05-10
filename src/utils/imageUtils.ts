/**
 * Utility functions for handling images
 */

/**
 * Fallback image URL to use when an image fails to load
 */
export const FALLBACK_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFNUU3RUIiLz4KICA8cGF0aCBkPSJNMTAwIDcwQzExMC40NTcgNzAgMTE5IDc4LjU0MyAxMTkgODlDMTE5IDk5LjQ1NyAxMTAuNDU3IDEwOCAxMDAgMTA4Qzg5LjU0MyAxMDggODEgOTkuNDU3IDgxIDg5QzgxIDc4LjU0MyA4OS41NDMgNzAgMTAwIDcwWiIgZmlsbD0iIzk0QTNCOCIvPgogIDxwYXRoIGQ9Ik0xNDAgMTQwSDYwQzYwIDEyMy40MzEgNzMuNDMxIDExMCA5MCAxMTBIMTEwQzEyNi41NjkgMTEwIDE0MCAxMjMuNDMxIDE0MCAxNDBaIiBmaWxsPSIjOTRBM0I4Ii8+CiAgPHBhdGggZD0iTTYwIDUwSDg1VjYwSDYwVjUwWiIgZmlsbD0iIzk0QTNCOCIvPgogIDxwYXRoIGQ9Ik05NSA1MEgxMjBWNjBIOTVWNTBaIiBmaWxsPSIjOTRBM0I4Ii8+CiAgPHBhdGggZD0iTTEzMCA1MEgxNDBWNjBIMTMwVjUwWiIgZmlsbD0iIzk0QTNCOCIvPgo8L3N2Zz4K';

/**
 * Handles image loading errors by replacing the source with a fallback image
 * @param event The error event from the img element
 */
export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const img = event.currentTarget;
  img.src = FALLBACK_IMAGE;
  img.onerror = null; // Prevent infinite error loop
};

/**
 * Creates an image URL with a fallback mechanism
 * @param src The original image source URL
 * @returns A function that handles the image element
 */
export const withFallback = (src: string) => {
  return (imgElement: HTMLImageElement | null) => {
    if (!imgElement) return;
    
    imgElement.onerror = () => {
      imgElement.src = FALLBACK_IMAGE;
      imgElement.onerror = null;
    };
    
    imgElement.src = src;
  };
};
