import Image from 'next/image'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="bz Télécom"
        width={200}
        height={50}
        priority
        className="h-auto w-auto"
      />
    </div>
  )
}
