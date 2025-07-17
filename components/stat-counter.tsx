import Image from "next/image"

interface StatCounterProps {
  icon: string
  count: string
  label: string
}

export default function StatCounter({ icon, count, label }: StatCounterProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3">
        <Image src={icon || "/placeholder.svg"} alt={label} width={80} height={80} />
      </div>
      <h3 className="text-2xl font-bold text-primary">{count}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  )
}
