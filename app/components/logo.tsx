import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/">
        <Image
          src="/assets/Logo-Paint-Innovators.png"
          style={{ width: "100%", margin: "auto" }}
          alt="Paint Innovators Arkansas, Oklahoma and now in Colorado"
          width="1000"
          height="1000"
        />
      </Link>
    </>
  );
}
