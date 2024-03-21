import { ExclamationTriangleIcon } from "@radix-ui/react-icons";


interface FormErrorProps {
  message?: React.ReactNode;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 items-center p-3 rounded-md flex gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
