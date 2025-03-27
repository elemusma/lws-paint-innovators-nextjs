import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <>
      <Link href="/">
        <Image
          src="/assets/Logo-Paint-Innovators.png"
          style={{ margin: "auto" }}
          className={`max-w-full ${className}`}
          alt="Paint Innovators Arkansas, Oklahoma and now in Colorado"
          width={1000}
          height={1000}
        />
      </Link>
    </>
  );
}
