import { Canvas, Document, FileImageResponse, FileResponse } from 'figma-js';
import { CodedError, ERRORS, Icons, IconsSvgUrls } from '../types.js';
import _ from 'lodash';
import { handleError } from '../utils.js';

interface ErrorResponse {
  readonly err?: string;
  readonly status?: 400 | 403 | 404 | 429 | 500;
}
interface FigmaFileResponse extends FileResponse, ErrorResponse {}
export interface FigmaFileImageResponse extends Omit<FileImageResponse, 'err' | 'status'>, ErrorResponse {}

const baseUrl = 'https://api.figma.com';

export async function getFigmaDocument(): Promise<Document> {
  const resp = await fetch(`${baseUrl}/v1/files/${process.env.FIGMA_FILE_KEY}`, {
    headers: new Headers({
      'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN || '',
    }),
  });
  const data = (await resp.json()) as FigmaFileResponse;
  if (data.status === 403 && data.err === 'Invalid token') {
    throw new CodedError(
      ERRORS.FIGMA_API,
      'An invalid token was used. Follow the Auth Guide (https://git.io/Je87i), and try again.'
    );
  }
  return data.document;
}

export function getIconsPage(document: Document): Canvas | null {
  const canvas = document.children.find((page) => page.name.toLowerCase() === 'icons');

  return canvas && canvas.type === 'CANVAS' ? canvas : null;
}

export function getIcons(iconsCanvas: Canvas): Icons {
  return iconsCanvas.children.reduce((icons: Icons, categroryGroupFrame: any) => {
    // Find the icons Wrapper
    const iconsFrame: any = categroryGroupFrame.children.find((frame: any) => frame.name === 'Icons') as Node;

    // Map both icon type and create icons
    iconsFrame.children.forEach((iconType: any) => {
      iconType.children.forEach((iconNode: any) => {
        const iconName = iconNode.name.split(' | ')[0];
        const tags = (iconNode.name.split(' | ')[1] || '').split(',');
        const labels = (iconNode.name.split(' | ')[2] || '').split(',');

        icons[iconNode.id] = {
          jsxName: (() => {
            const camelCased = _.camelCase(iconName);
            const componentName = camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
            return componentName;
          })(),
          svgName: iconName,
          id: iconNode.id,
          category: categroryGroupFrame.name,
          type: (() => {
            if (iconType.name === 'line' && iconName.endsWith('line')) {
              return 'line';
            }
            if (iconType.name === 'fill' && iconName.endsWith('fill')) {
              return 'fill';
            }

            handleError(new CodedError(ERRORS.FIX_FIGMA, `Some incorrect icon - ${iconName}, ${iconType}`, true));

            return '';
          })(),
          tags,
          labels,
        };
      });
    });

    return icons;
  }, {});
}

export async function renderIdsToSvgs(ids: string[]): Promise<IconsSvgUrls> {
  const batchSize = 700;
  const batches = [];
  for (let i = 0; i < ids.length; i += batchSize) {
    batches.push(ids.slice(i, i + batchSize));
  }

  const results = await Promise.allSettled(batches.map((batch) => fetchImagesWithRetry(batch)));

  const images = {};
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      Object.assign(images, result.value);
    } else {
      console.error('Batch failed', result.reason);
    }
  });

  return images;
}

async function fetchImagesWithRetry(batch: string[], retries: number = 3): Promise<IconsSvgUrls | undefined> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fetchImagesBatch(batch);
    } catch (error) {
      if (attempt === retries) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 1000 * attempt)); // Exponential backoff
    }
  }
}

async function fetchImagesBatch(batch: string[]): Promise<IconsSvgUrls> {
  const requests = batch.map((node_id) => ({
    node_id: node_id,
    format: 'svg',
  }));

  const resp = await fetch(`${baseUrl}/v1/images/${process.env.FIGMA_FILE_KEY}`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN || '',
    }),
    body: JSON.stringify({ requests }),
  });

  let data: any = {
    err: undefined,
    images: {},
  };

  if (resp.headers.get('content-type')?.includes('application/json')) {
    data = (await resp.json()) as FigmaFileImageResponse;
  }

  if (!resp.ok) {
    const error = typeof data.err === 'object' ? JSON.stringify(data.err, null, 2) : data.err;
    handleErrorMessage(resp.status, error);
  }

  if (!data.images || !Object.keys(data.images).length) {
    throw new CodedError(
      ERRORS.UNEXPECTED,
      `An error occured after rendering icons in Figma. Render response:\n${JSON.stringify(data, null, 2)}`
    );
  }

  return data.images.reduce((acc: IconsSvgUrls, item: any) => {
    acc[item.node_id] = item.image;
    return acc;
  }, {});
}

function handleErrorMessage(status: number, error: string) {
  switch (status) {
    case 400:
      throw new CodedError(ERRORS.FIGMA_API, `Unexpected error encountered from Figma API\n${error}`);
    case 404:
      throw new CodedError(
        ERRORS.FIGMA_API,
        "One or more of the icons couldn't be found in Figma. Check to see if they still exist, and try again."
      );
    case 500:
      throw new CodedError(ERRORS.FIGMA_API, 'Figma could not render the icons. ಠ_ಠ');
    default:
      throw new CodedError(ERRORS.UNEXPECTED, `An error occurred while rendering icons to SVG.\n${status}\n${error}\n`);
  }
}
