/**
 * GALLERY_IMAGES Configuration
 * ----------------------------
 * This file serves as the single source of truth for the Music School Gallery.
 * * ATTENTION:
 * 1. PATHS: Do not use "../../../public/". Images in the public folder 
 * are served from the root "/".
 * 2. IDs: Ensure each 'id' is unique to prevent React rendering issues.
 * 3. SIZES:
 * - 'small': 1x1 grid cell
 * - 'tall' : 1x2 (vertical)
 * - 'wide' : 2x1 (horizontal)
 * - 'large': 2x2 (feature block)
 * 4. TYPES: Use 'video' for YouTube embeds and 'image' for standard photos.
 */

export interface GalleryItem {
  id: number;
  src: string;
  size: 'small' | 'tall' | 'wide' | 'large';
  type: 'image' | 'video';
  videoId?: string; // Required only if type is 'video'
}


//NOTE : Remove this in the ProductionVersion when we use an actual domain and update the image paths accordingly.
const BASE_URL = "/jessabach"; // Base URL for gallery images - Dont forget to update this when deploying to production!

export const GALLERY_IMAGES: GalleryItem[] = [ // ensure once the base URL is updated, all paths are correct and accessible.
  { id: 1, videoId: "yllkeb6nIpo", src: `${BASE_URL}/Gallery/Video1.mp4`, size: "large", type: "video" },
  { id: 2, src: `${BASE_URL}/Gallery/Mic-Fuku-Long.jpeg`, size: "tall", type: "image" }, 
  { id: 4, src: `${BASE_URL}/Gallery/Mic-Fuku.jpeg`, size: "small", type: "image" },
  // { id: 5, src: `${BASE_URL}/images/img5.jpg`, size: "small", type: "image" },
  { id: 6, videoId: "WfMHccaJ6C4", src: `${BASE_URL}/Gallery/Video2.mp4`, size: "large", type: "video" },
  { id: 7, src: `${BASE_URL}/Gallery/Mic-Sax.jpeg`, size: "tall", type: "image" },
  { id: 8, src: `${BASE_URL}/Gallery/Mic-Fuku-Small.jpeg`, size: "small", type: "image" },
];