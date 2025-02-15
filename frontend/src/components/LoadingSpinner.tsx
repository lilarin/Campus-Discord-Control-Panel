export const ChannelLoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center p-2">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500"></div>
    </div>
  );
};


export const ComponentLoadingSpinner = () => {
  return (
    <div className="absolute top-[calc(50%-50px)] left-1/2">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-500"></div>
    </div>
  );
}