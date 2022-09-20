type Props = {
  text: string;
};

export function TestComponent({ text }: Props) {
  return (
    <div className="max-w-md border-4 border-blue-900 bg-yellow-200 p-4">
      <div className="text-center text-lg">Test Component</div>
      <div className="text-gray-400">{text}</div>
    </div>
  );
}
