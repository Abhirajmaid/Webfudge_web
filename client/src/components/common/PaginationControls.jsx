"use client";
import { useRouter, useSearchParams } from "next/navigation";

const PaginationControls = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "6";

  const max_limit = Math.ceil(10 / Number(per_page));

  return (
    <div className="mt-[80px] flex gap-4 items-center justify-center">
      {page > 1 ? (
        <button
          className="btn bg-blue-500 text-white"
          onClick={() => {
            router.push(
              `/our-work/?page=${Number(page) - 1}&per_page=${per_page}`
            );
          }}
        >
          prev page
        </button>
      ) : (
        <button className="btn bg-blue-500 text-white opacity-50">
          prev page
        </button>
      )}

      <div>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      {page < max_limit ? (
        <button
          className="btn bg-blue-500 text-white "
          onClick={() => {
            router.push(
              `/our-work/?page=${Number(page) + 1}&per_page=${per_page}`
            );
          }}
        >
          next page
        </button>
      ) : (
        <button className="btn bg-blue-500 text-white opacity-50">
          next page
        </button>
      )}
    </div>
  );
};

export default PaginationControls;
