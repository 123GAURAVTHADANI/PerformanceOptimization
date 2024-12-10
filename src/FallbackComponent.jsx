function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  console.dir(error);
  return (
    <div role="alert">
      <h1>Something went wrong:{error.message}</h1>
    </div>
  );
}
export default fallbackRender;
