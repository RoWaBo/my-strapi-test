/**
 * Model definition for undefined
 */
export interface any {
  id: string;
  title: string;
  description: string;
  featured_image?: Blob;
  categories?: relation;
}