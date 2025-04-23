import "@/app/styles/HiringBanner.scss";
import Link from "next/link";

export default function HiringBanner() {
  return (
    <>
      <div className="text-center bg-black">
        <p className="pt-1 pb-1 m-0 text-white">
          We are hiring! Check out our{" "}
          <Link href="/careers" style={{ textDecoration: "underline" }}>
            Careers
          </Link>{" "}
          page for all positions.
        </p>
      </div>
    </>
  );
}
