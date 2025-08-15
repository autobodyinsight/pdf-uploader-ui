function ResultBox({ result }) {
  return (
    <div className="bg-brand-gray p-4 rounded-lg shadow-md mt-6 text-left w-full max-w-md">
      <h2 className="text-xl font-bold text-brand-orange mb-2">Audit Result</h2>
      <pre className="text-brand-white whitespace-pre-wrap break-words">
        {result || "No result yet."}
      </pre>
    </div>
  );
}

export default ResultBox;
