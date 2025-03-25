import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/">
        <Image
          src="/assets/Logo-Paint-Innovators.png"
          style={{ margin: "auto" }}
          alt="Paint Innovators Arkansas, Oklahoma and now in Colorado"
          width={170}
          height={104}
        />
      </Link>
    </>
  );
}
