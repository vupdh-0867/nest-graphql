import { FormattedExecutionResult } from "graphql";

export function formatError(formattedError: any) {
  return {
    location: formattedError.locations,
    message: formattedError?.extensions?.originalError?.message || formattedError.message,
    statusCode: formattedError.extensions.status,
  };
}

export function formatResponse(response: FormattedExecutionResult) {
  if (response.errors) {
    return JSON.stringify({ errors: response.errors });
  }

  return JSON.stringify({
    data: Object.values(response.data),
  });
}
