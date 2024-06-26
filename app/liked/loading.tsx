/**
 * Use the "use client" directive to indicate this component should be rendered on the client-side
 */
"use client";

/**
 * Import necessary components
 */
import Box from "@/components/Box";
import { BounceLoader } from "react-spinners";

/**
 * The Loading component displays a loading indicator
 * @returns The JSX.Element to be rendered
 */
const Loading = () => {
  /**
   * Render the loading indicator
   */
  return (
    <Box className="h-full flex items-center justify-center">
      {/* Use the BounceLoader component from react-spinnerswith a custom color and size */}
      <BounceLoader color="#22c55e" size={40} />
    </Box>
  );
};

/**
 * Export the Loading component
 */
export default Loading;
