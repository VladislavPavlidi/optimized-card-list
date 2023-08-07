import { serializeParams, toString } from 'Utilities/params';
import apiRoutes from './routes';

interface APIResponse<T> {
  status: number;
  results?: T;
}

interface ErrorInterface {
  [x: string]: any;
  message: any;
  abortError?: boolean;
  status?: any;
  data?: any;
}

class API_ERROR extends Error {
  constructor(object: ErrorInterface) {
    super(object.message);
    const { message, ...rest } = object;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context: ErrorInterface = this;
    Object.keys(rest).forEach((key) => {
      context[key] = rest[key];
    });
  }
}

async function get<T>(
  url: URL | string,
  paramsProp = {},
  options = {}
): Promise<APIResponse<T>> {
  let response: undefined | Response;
  try {
    response = await fetch(`${url}${toString({ ...paramsProp })}`, {
      ...options,
    });
  } catch (fetchError: any) {
    if (fetchError.name === 'AbortError') {
      throw new API_ERROR({ message: 'AbortError', abortError: true });
    }
  }

  if (response) {
    const contentType = response.headers.get('content-type');
    if (response.ok) {
      let data;
      if (contentType === 'application/json') {
        data = await response.json();
        return data;
      }
      return { status: response.status };
    }

    const { status } = response;
    const data = await response.json();

    throw new API_ERROR({ message: data.error, status, data });
  }

  throw new API_ERROR({ message: 'response is undefined' });
}

async function post(url: string, body: object, options = {}, method = 'post') {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Language': document.documentElement.lang,
    },
    body: serializeParams(body),
    ...options,
  });
  const { status } = response;
  if (response.ok) {
    const data = await response.json();
    if (data.error) {
      throw new API_ERROR({
        message: data.error,
        logicsError: true,
        ...data,
        status,
      });
    }
    return data;
  }
  const data = await response.json();
  throw new API_ERROR({ message: data.error, status, data });
}

async function put(url: any, body: any, options = {}) {
  const data = await post(url, body, options, 'put');
  return data;
}

async function deleteRequest(url: any, body: any, options = {}) {
  const data = await post(url, body, options, 'delete');
  return data;
}

function generateAbortController() {
  return new AbortController();
}

const api = {
  get,
  post,
  deleteRequest,
  put,
  generateAbortController,
};

export { api, apiRoutes };
