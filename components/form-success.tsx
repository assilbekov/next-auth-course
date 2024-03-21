import { CheckCircledIcon } from "@radix-ui/react-icons";


interface FormSuccessProps {
  message?: React.ReactNode;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 items-center p-3 rounded-md flex gap-x-2 text-sm text-emerald-500">
      <CheckCircledIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
