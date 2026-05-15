import { useState } from "react";

// Định nghĩa Type cho Props (nếu bạn muốn truyền dữ liệu từ file .astro vào)
interface CounterProps {
  initialCount?: number; // Dấu ? nghĩa là không bắt buộc truyền
  title: string;
}

export default function Counter({ initialCount = 0, title }: CounterProps) {
  // TypeScript sẽ tự động hiểu 'count' là kiểu number nhờ vào giá trị mặc định của useState
  const [count, setCount] = useState<number>(initialCount);

  return (
    <div className="mt-5 rounded-lg border border-[#007acc] p-5">
      <h3>{title}</h3>
      <p>
        Số hiện tại: <strong>{count}</strong>
      </p>
      <button
        className="cursor-pointer rounded border-0 bg-[#007acc] px-4 py-2 text-white"
        onClick={() => setCount(count + 1)}
      >
        Bấm để tăng số
      </button>
    </div>
  );
}
