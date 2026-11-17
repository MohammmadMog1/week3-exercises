function createResponse(status, operation, message, item) {
  return {
    success: status,
    operation,
    message,
    item,
  };
}

module.exports = createResponse;
