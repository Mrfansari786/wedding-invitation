type Props = {
  value: number;
  label: string;
};

export default function CountdownCard({
  value,
  label,
}: Props) {
  return (
    <div className="rounded-3xl border border-[#D4AF37]/30 bg-white/5 px-8 py-6 backdrop-blur-xl">

      <h2 className="text-5xl font-bold text-[#D4AF37]">

        {String(value).padStart(2, "0")}

      </h2>

      <p className="mt-3 uppercase tracking-[4px] text-gray-400">

        {label}

      </p>

    </div>
  );
}