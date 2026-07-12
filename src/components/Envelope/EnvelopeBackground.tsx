export default function EnvelopeBackground() {
  return (
    <>
      <div className="absolute h-[44rem] w-[44rem] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]" />
    </>
  );
}