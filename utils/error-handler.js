import { toast } from "@/hooks/use-toast";

export default function errorHandler(error) {
  let errorMsg = "";
  const errorData = error?.response?.data;
  if (errorData) {
    const { status } = error?.response;

    if (errorData?.length > 0) {
      errorData.map((error) => {
        toast({
          variant: "destructive",
          title: error?.errorCode,
          description: error?.message,
        });
      });
    } else {
      // ✅ Handle Unauthorized (401) globally
      if (status === 401) {
        errorMsg = error?.response?.data?.message || "Unauthorized Access";
      }

      // ✅ Handle Forbidden (403)
      else if (status === 403) {
        errorMsg =
          error?.response?.data?.message ||
          "Forbidden! You don't have permission.";
      }

      // ✅ Handle Not Found (404)
      else if (status === 404) {
        errorMsg = error?.response?.data?.message || "Resource not found!";
      }

      // ✅ Handle Internal Server Error (500)
      else if (status === 500) {
        errorMsg =
          error?.response?.data?.message ||
          error?.response?.data?.error ||
          "Internal Server Error";
      } else {
        errorMsg =
          error?.response?.data?.message || error?.response?.data?.error;
      }
    }
  } else {
    errorMsg = error?.message || "Error! Please refresh";
  }
  errorMsg && toast({ variant: "destructive", title: errorMsg });
}
