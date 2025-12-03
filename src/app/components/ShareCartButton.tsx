"use client";

interface ShareCartButtonProps {
  cartUrl: string;
  title?: string;
  description?: string;
  buttonText?: string;
  subText?: string;
}

export function ShareCartButton({
  cartUrl,
  title = "Everything in one cart",
  description = "Here is a single cart containing all the parts we used to get started, and see an estimated total cost.",
  buttonText = "View Complete Cart on Amazon",
  subText = "All the parts we used for one plane • Adjusted quantities • Ready to order",
}: ShareCartButtonProps) {
  return (
    <div className="p-8 bg-[linear-gradient(45deg,#000000,#000000,#110f44,#110f44,#000000,#000000)] shadow-xl border-2 border-cyan-400">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-vipessrg flex items-center justify-center gap-3 tracking-wide text-shadow-lg text-shadow-black">
          {title}
        </h2>
        <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
          {description}
        </p>
        <a
          href={cartUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[linear-gradient(180deg,#ff0000,#cc0000,#990000,#cc0000,#ff0000)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 font-xirod"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span>{buttonText}</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
        <p className="text-red-500 text-md mt-4">{subText}</p>
      </div>
    </div>
  );
}
